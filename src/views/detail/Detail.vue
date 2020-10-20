<!--
 * @Author: your name
 * @Date: 2020-10-04 20:31:20
 * @LastEditTime: 2020-10-20 22:59:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\home\Home.vue
-->
<!--  -->
<template>
<div class='detail'>
	<detail-nav-bar class="detail-nav" @itemClick="itemClick" ref="nav"/>
	<scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
		<detail-swiper :topImages="topImages"/>
		<detail-base-info :goods="goods"/>
		<detail-shop-info :shop="shop"/>
		<detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
		<detail-params-info ref="params" :paramsInfo="paramsInfo"/>
		<detail-comment-info ref="comment" :commentInfo="commentInfo"/>
		<goods-list ref="recommend" :goods="recommend"/>
	</scroll>
	<detail-bottom-bar @addToCart="addToCart"/>
	<back-top v-if="isShowBackTop" @click.native="backTop"/>
	<!-- 封装toast，这些不要了 -->
	<!-- <toast :message="message" :show="show"/> -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
	
// 封装toast，这些不要了
// import Toast from 'components/common/toast/Toast'

import {getDetail, Goods, Shop, GoodsParams, getRecommend} from 'network/detail.js'
import {debounce} from 'common/utils'
import {backTopMixin} from 'common/mixin'

import {mapActions} from 'vuex'
export default {
name: 'Detail',
//import引入的组件需要注入到对象中才能使用
components: {
	DetailNavBar,
	DetailSwiper,
	DetailBaseInfo,
	DetailShopInfo,
	DetailGoodsInfo,
	DetailParamsInfo,
	DetailCommentInfo,
	DetailBottomBar,
	GoodsList,
	Scroll
	// 封装toast，这些不要了
	// Toast
},
mixins: [backTopMixin],
data() {
//这里存放数据
	return {
		iid: null,
		topImages: [],
		goods: {},
		shop: {},
		detailInfo: {},
		paramsInfo: {},
		commentInfo: {},
		recommend: [],
		themeTopYs: [],
		getThemeTopY: null,
		currentIndex: 0,
		refresh: null
		// 封装toast，这些不要了
		// message: '',
		// show: false
	};
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
	// 1. 保存传入的iid
	this.iid = this.$route.params.iid
	// 2. 根据iid请求详情数据
	getDetail(this.iid).then(res => {
		console.log(res)
		const data = res.result
		this.topImages = data.itemInfo.topImages
		// 3. 获取商品信息
		this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
		// 3. 获取商家信息
		this.shop = new Shop(data.shopInfo)
		// 4. 保存商品的详情数据
		this.detailInfo = data.detailInfo
		// 5. 获取参数相关信息
		this.paramsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
		// 6. 获取评论信息
		if (data.rate.cRate) {
			this.commentInfo = data.rate.list[0]
		}
		// 7. 获取推荐相关信息
		// 8. 导航栏交互
		// 直接在外面获取，值不对是因为this.$refs.params.$el还未被渲染
		this.$nextTick(() => {
			// 根据最新的数据，对应的DOM时已经渲染出来了
			// 这里值不对是因为图片没加载
			// 但是DOM渲染完。不代表图片加载完（目前获取的offsetTop不包含其中的图片）
			// offsetTop不好使的时候，都是因为图片的问题
			// this.themeTopYs = []
			// this.themeTopYs.push(0)
			// this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
			// this.themeTopYs.push(this.$refs.comment.$el.offsetTop  - 44)
			// this.themeTopYs.push(this.$refs.recommend.$el.offsetTop  - 44)
			// console.log(this.themeTopYs)
		})
	}),
	getRecommend().then(res => {
		this.recommend = res.data.list
	})

	// 4. 给getThemeTopY赋值
	this.getThemeTopY = debounce(() => {
		this.themeTopYs = []
		this.themeTopYs.push(0)
		this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
		this.themeTopYs.push(this.$refs.comment.$el.offsetTop  - 44)
		this.themeTopYs.push(this.$refs.recommend.$el.offsetTop  - 44)
		this.themeTopYs.push(Number.MAX_VALUE)
	}, 100)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
	this.refresh = debounce(this.$refs.scroll.refresh, 100)
	this.$bus.$on('detailItemImageLoad', () => {
		this.refresh()
	})
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
	...mapActions(['addCart']),
	itemClick (index) {
		this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
	},
	imageLoad () {
		this.refresh()
		this.getThemeTopY()
	},
	contentScroll (position) {
		// 0. backTop显示隐藏
		this.isShowBackTop = -position.y > 1000
		// 8. 导航栏交互-内容滚动，显示正确的标题
		// console.log(this.themeTopYs)
		// console.log(position)
		// 1. 获取y值
		const positionY = -position.y
		// 2. positionY和主题中的值作对比
		for(let i = 0; i < this.themeTopYs.length - 1; i++) {
			// 1. 普通做法 / 这里遍历this.themeTopYs.length
			// 有问题
			// 这样写最后一个1+1=4会越界，找不到了
			// if (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
			// 	console.log(i)
			// }
			// 正确
			// if (this.currentIndex !== i &&
			// 	((i < this.themeTopYs.length - 1 && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]))
			// 	|| (i === this.themeTopYs.length - 1 && positionY >= this.themeTopYs[i]))) {
			// 	this.currentIndex = i
			// 	console.log(this.currentIndex)
			// 	this.$refs.nav.currentIndex = i
			// }
			// 2. hack做法 / 这里遍历this.themeTopYs.length - 1 （否则海华丝会越界，同上）
			// 给标题位置信息里添加一个最大值
			if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
				this.currentIndex = i
				// console.log(i)
				this.$refs.nav.currentIndex = i
			}
		}
	},
	addToCart () {
		// 1. 获取购物车需要展示的数据
		const product = {}
		product.image = this.topImages[0]
		product.title = this.goods.title
		product.desc = this.goods.desc
		product.price = this.goods.realPrice
		product.iid = this.iid
		console.log(product)
		// 2. 将商品添加到购物车
		// 因为我们mutations里面的方法目的尽量单一
		// 调用mutations用this.$store.commit
		// mutations唯一的目的是修改state的值
		// 目的尽量单一
		// 这里判断既要添加商品又可能添加数量
		// 所以我们放到actions里
		// this.$store.commit('addCart', product)
		// 3. 放到actions
		// 调用mutations用this.$store.dispatch

		// 添加到购物车时可以选择直接调用vuex里的actions，也可以通过辅助函数映射action里的方法过来
		this.addCart(product).then(res => {
			// 封装toast，这些不要了
			// this.show = true
			// this.message = res
			// setTimeout(() => {
			// 	this.show = false
			// 	this.message = ''
			// }, 1500)
			
			// 封装完
			this.$toast.show(res, 2000)
			console.log(this.$toast)
		})
		// this.$store.dispatch('addCart', product).then(res => {
		// 	console.log(res)
		// })

		// 3. 添加到购物车
	}
},
activated() {}, //如果页面有keep-alive缓存功能，路由活跃时会触发
deactivated() {}, //如果页面有keep-alive缓存功能，路由离开时这个函数会触发
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {
	// 这里相比created和mounted能获取到值，但是不对，图片还没加载完
	// this.themeTopYs = []
	// this.themeTopYs.push(0)
	// this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
	// this.themeTopYs.push(this.$refs.comment.$el.offsetTop  - 44)
	// this.themeTopYs.push(this.$refs.recommend.$el.offsetTop  - 44)
	// console.log(this.themeTopYs)
}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入公共css类 */
.detail {
	height: 100vh;
	position: relative;
	z-index: 9;
	background-color: #fff;
}
.detail-nav {
	position: relative;
	z-index: 9;
	background-color: #fff;
}
.content {
	height: calc(100% - 44px - 49px);
}
</style>
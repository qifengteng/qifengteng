<!--
 * @Author: your name
 * @Date: 2020-10-04 20:31:20
 * @LastEditTime: 2020-10-11 17:25:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\home\Home.vue
-->
<!--  -->
<template>
<div id='home'>
	<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
	<scroll class="content"
					ref="scroll"
					:probe-type='3'
					:pull-up-load="true"
					@scroll="contentScroll"
					@pullingUp="loadMore">
		<home-swiper :banners='banners'/>
		<recommend-view :recommends='recommends'/>
		<feature-view/>
		<tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
		<goods-list :goods="showGoods"/>
	</scroll>
	<back-top @click.native="backClick" v-show="isShowBackTop"/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import {getHomeMultidata, getHomeGoods} from 'network/home.js'

export default {
//import引入的组件需要注入到对象中才能使用
name: 'Home',
components: {
	NavBar,
	TabControl,
	GoodsList,
	HomeSwiper,
	RecommendView,
	FeatureView,
	Scroll,
	BackTop
},
data() {
//这里存放数据
	return {
		banners: null,
		recommends: null,
		goods: {
			'pop': {page: 0, list: []},
			'new': {page: 0, list: []},
			'sell': {page: 0, list: []}
		},
		currentType: 'pop',
		BScroll: null,
		isShowBackTop: false
	};
},
//监听属性 类似于data概念
computed: {
	showGoods () {
		return this.goods[this.currentType].list
	}
},
//监控data中的数据变化
watch: {},

//生命周期 - 创建完成（可以访问当前this实例）
created() {
	// 1. 请求多个数据
	this.getHomeMultidata()
	// 2. 请求商品数据
	this.getHomeGoods('pop')
	this.getHomeGoods('new')
	this.getHomeGoods('sell')
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
},
//方法集合
methods: {
	/*
	*	时间监听相关
	*/
	tabClick (index) {
		switch (index) {
			case 0: this.currentType = 'pop'
			break
			case 1: this.currentType = 'new'
			break
			case 2: this.currentType = 'sell'
			break
		}
	},
	backClick () {
		this.$refs.scroll.scrollTo(0, 0, 500)
	},
	contentScroll (position) {
		this.isShowBackTop = -position.y > 1000
	},
	loadMore () {
		this.getHomeGoods(this.currentType)
	},
	/*
	* 网络请求相关
	*/
	getHomeMultidata () {
		getHomeMultidata().then(res => {
			this.banners = res.data.banner.list
			this.recommends = res.data.recommend.list
		})
	},
	getHomeGoods (type) {
		const page = this.goods[type].page + 1
		getHomeGoods(type, page).then(res => {
			this.goods[type].page = res.data.page
			this.goods[type].list.push(...res.data.list)
			// 上啦加载完成之后不会进行新的一次加载，需要调用finishPullUp()
			this.$refs.scroll.finishPullUp()
		})
	}
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
/* //@import url(); 引入公共css类 */
#home {
	padding-top: 44px;
	height: 100vh;
	position: relative;
}
.home-nav {
	background-color: var(--color-tint);
	color: var(--color-background);
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	z-index: 2;
}
.tab-control {
	position: sticky;
	top: 44px;
	z-index: 2;
}
/* 一种方案 */
/* .content {
	margin-top: 44px;
	height: calc(100% - 44px - 49px);
	overflow: hidden;
} */
/* 第二种 */
.content {
	overflow: hidden;
	position: absolute;
	top: 44px;
	bottom: 49px;
	right: 0;
	left: 0;
}
</style>
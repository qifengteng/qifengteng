<!--
 * @Author: your name
 * @Date: 2020-10-14 21:44:34
 * @LastEditTime: 2020-10-14 23:06:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\detail\childComps\DetailShopInfo.vue
-->
<!--  -->
<template>
<div class='detail-shop-info'>
	<div class="shop-top">
		<span class="logo">
			<img :src="shop.logo" alt="">
		</span>
		<span class="title">{{shop.name}}</span>
	</div>
	<div class="shop-middle">
		<div class="shop-middle-item shop-middle-left">
			<div class="info-sells">
				<p class="sells-count">{{shop.sells | sellCountFilter}}</p>
				<p class="sells-text">总销量</p>
			</div>
			<div class="info-goods">
				<p class="goods-count">{{shop.goodsCount}}</p>
				<p class="goods-text">全部宝贝</p>
			</div>
		</div>
		<div class="shop-middle-item shop-middle-right">
			<div class="shop-score" v-for="item in shop.score">
				<span class="score-name">{{item.name}}</span>
				<span class="score-score" :class="{redScore: item.isBetter}">{{item.score}}</span>
				<span class="score-better" :class="{redBetter: item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
			</div>
		</div>
	</div>
	<div class="shop-bottom">
		<div class="enter-shop">进店逛逛</div>
	</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
name: 'DetailShopInfo',
props: {
	shop: {
		type: Object,
		default () {
			return {}
		}
	}
},
data() {
//这里存放数据
return {

};
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
filters: {
	sellCountFilter (value) {
		if (value < 10000) return value
		return (value/10000).toFixed(1) + '万'
	}
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
activated() {}, //如果页面有keep-alive缓存功能，路由活跃时会触发
deactivated() {}, //如果页面有keep-alive缓存功能，路由离开时这个函数会触发
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入公共css类 */
.detail-shop-info {
	padding: 25px 8px;
	border-bottom: 5px solid #F2F5F8;
}
.shop-top {
	line-height: 45px;
	display: flex;
	align-items: center;
}
.shop-top img {
	width: 45px;
	height: 45px;
}
.shop-top .title {
	padding-left: 10px;
}
.shop-middle {
	padding-top: 15px;
	display: flex;
	align-items: center;
}
.shop-middle-item {
	flex: 1;
}
.shop-middle-left {
	display: flex;
	justify-content: space-evenly;
	border-right: 1px solid rgba(0,0,0,.1);
	text-align: center;
	color: #333;
}
.sells-count {
	font-size: 16.5px;
	margin-top: -1px;
}
.goods-count {
	font-size: 18px;
}
.sells-text {
	margin-top: 6px;
	font-size: 12px;
}
.goods-text {
	margin-top: 5.5px;
	font-size: 12px;
}
.shop-middle-right {
	font-size: 13px;
	color: #333;
	margin-left: 25px;
}
.shop-score {
	margin-bottom: 5px;
}
.shop-score span {
	margin-right: 10px;
}
.score-score {
	display: inline-block;
	width: 30px;
	color: green;
}
.redScore {
	color: red;
}
.score-better {
	background-color: green;
	color: #fff;
	font-size: 12PX;
	text-align: center;
}
.redBetter {
	background-color: red;
}
.shop-bottom {
	text-align: center;
	margin-top: 10px;
}
.enter-shop {
	display:inline-block;
	font-size: 14px;
	width: 150px;
	height: 30px;
	background-color: #f2f5f8;
	text-align: center;
	line-height: 30px;
	border-radius: 10px;
}
</style>
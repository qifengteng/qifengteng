<!--
 * @Author: your name
 * @Date: 2020-10-18 23:35:09
 * @LastEditTime: 2020-10-19 20:10:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\detail\childComps\DetailBottomBar.vue
-->
<!--  -->
<template>
<div class='bottom-bar'>
	<div class="bar-item bar-left">
		<div>
			<i class="icon service"></i>
			<span class="text">客服</span>
		</div>
		<div>
			<i class="icon shop"></i>
			<span class="text">店铺</span>
		</div>
		<div>
			<i class="icon select"></i>
			<span class="text">收藏</span>
		</div>
	</div>
	<div class="bar-item bar-right">
		<div class="cart" @click="addToCart">加入购物车</div>
		<div class="buy">购买</div>
	</div>
	<!-- <sport-ball ref="ball" class="sport-ball"></sport-ball> -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name: 'DeatiBottomBar',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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
	addToCart () {
		this.$emit('addToCart')
	}
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
.bottom-bar {
	height: 49px;
	background-color: #fff;
	position: relative;
	bottom: 0;
	display: flex;
	text-align: center;
}
.bar-item {
	flex: 1;
	display: flex;
}
.bar-item div {
	flex: 1;
}
.bar-left .text {
	font-size: 13px;
}
.bar-left .icon {
	display: block;
	width: 22px;
	height: 22px;
	margin: 5px auto 2px;
	background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.bar-left .service {
	background-position: 0 -54px;
}
.bar-left .shop {
	background-position: 0 -98px;
}
.bar-right {
	font-size: 15px;
	color: #fff;
	line-height: 49px;
}
.bar-right .cart {
	background-color: #ffe817;
	color: #333;
}
.bar-right .buy {
	background-color: #f69;
}
</style>
<!--
 * @Author: your name
 * @Date: 2020-10-04 20:31:19
 * @LastEditTime: 2020-10-19 23:41:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\cart\Cart.vue
-->
<!--  -->
<template>
<div class='cart'>
	<!-- 导航 -->
	<nav-bar class="nav-bar">
		<div slot="center">购物车({{length}})</div>
	</nav-bar>
	<!-- 商品列表 -->
	<cart-list/>
	<!-- 底部汇总 -->
	<cart-bottom-bar/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex' // 辅助函数
export default {
name: 'cart',
//import引入的组件需要注入到对象中才能使用
components: {
	NavBar,
	CartList,
	CartBottomBar
},
data() {
//这里存放数据
	return {
		count: 0
	};
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
//监听属性 类似于data概念
computed: {
	// 第一种语法， 直接用getters里的属性
	// ...mapGetters(['cartLength', 'cartList'])
	// 第二种语法，可以改名字
	...mapGetters({
		length: 'cartLength',
		list: 'cartList'
	})
},
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
.cart {
	height: 100vh;
}
.nav-bar {
	background-color: var(--color-tint);
	color: #fff;
	font-weight: 700;
}
</style>
<!--
 * @Author: your name
 * @Date: 2020-10-19 23:40:25
 * @LastEditTime: 2020-10-20 22:56:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\cart\childComps\CartBottomBar.vue
-->
<!--  -->
<template>
<div class='bottom-bar'>
	<div class="check-content">
		<Check-button @click.native="checkClick" :is-checked="isSelectAll" class="check-button"/>
		<span>全选</span>
	</div>
	<div class="price">
		合计：{{totalPrice}}
	</div>
	<div class="calclate" @click="calcClick">
		去结算({{checkLength}})
	</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
	CheckButton
},
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
computed: {
	...mapGetters(['cartList']),
	totalPrice () {
		return '￥' +  this.$store.state.cartList.filter((item) => {
			return item.checked
		}).reduce((preValue, item) => {
			return preValue + item.price * item.count
		}, 0).toFixed(2)
	},
	checkLength () {
		return this.$store.state.cartList.filter((item) => {
			return item.checked
		}).length
	},
	isSelectAll () {
		if (this.cartList.length === 0) return false
		// 第一种方法，遍历完，性能不是很高
		// return !(this.cartList.filter((item) => {
		// 	return !item.checked
		// }).length)

		// 第二种方法
		return !this.cartList.find((item) => !item.checked)
	}
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
	checkClick () {
		if (this.isSelectAll) {
			this.cartList.forEach(item => item.checked = false)
		} else {
			this.cartList.forEach(item => item.checked = true)
		}
	},
	calcClick () {
		if (!this.checkLength) {
			this.$tosat.show('请选择购买的商品', 2000)
		}
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
	height: 40px;
	position: relative;
	line-height: 40px;
	background-color: #eee;
	display: flex;
	font-size: 15px;
}
.check-content {
	display: flex;
	align-items: center;
	margin-left: 10px;
	width: 60px;
}
.check-button {
	width: 20px;
	height: 20px;
	line-height: 20px;
	margin-right: 5px;
}
.price {
	margin-left: 30px;
	flex: 1;
}
.calclate {
	width: 100px;
	text-align: center;
	background-color: var(--color-tint);
	color: #fff;
}
</style>
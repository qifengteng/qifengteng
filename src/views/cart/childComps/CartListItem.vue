<!--
 * @Author: your name
 * @Date: 2020-10-19 22:21:59
 * @LastEditTime: 2020-10-19 23:38:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\cart\childComps\CartListItem.vue
-->
<!--  -->
<template>
<div id='shop-item'>
	<div class="item-selector">
		<checkButton :isChecked="product.checked" @click.native="checkClick"></checkButton>
	</div>
	<div class="item-img">
		<img :src="product.image" alt="商品图片">
	</div>
	<div class="item-info">
		<div class="item-title">{{product.title}}</div>
		<div class="item-desc">{{product.desc}}</div>
		<div class="info-bottom">
			<div class="item-price left">¥{{product.price}}</div>
			<div class="item-count right">x{{product.count}}</div>
		</div>
	</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
name: 'CartListItem',
//import引入的组件需要注入到对象中才能使用
components: {
	CheckButton
},
props: {
	product: {
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
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
	checkClick () {
		this.product.checked = !this.product.checked
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
#shop-item {
	width: 100%;
	padding: 5px;
	font-size: 0;
	display: flex;
	border-bottom: 1px solid #ccc;
}
.item-selector {
	width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.item-img {
	padding: 5px;
}
.item-img img {
	width: 80px;
	height: 100px;
	display: block;
	border-radius: 5px;
}
.item-info {
	font-size: 17px;
	color: #333;
	padding: 5px 10px;
	position: relative;
	overflow: hidden;
}
.item-title, .item-desc {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.item-info .item-desc {
	font-size: 14px;
	color: #666;
	margin-top: 15px;
}
.info-bottom {
	margin-top: 10px;
	position: absolute;
	bottom: 10px;
	left: 10px;
	right: 10px;
}
.info-bottom .item-price {
	color: var(--color-tint);
}
</style>
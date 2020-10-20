<!--
 * @Author: your name
 * @Date: 2020-10-13 22:55:12
 * @LastEditTime: 2020-10-14 22:09:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\detail\childComps\DetailSwiper.vue
-->
<!--  -->
<template>
	<!--判断一个对象是不是一个空的对象,object.keys(obj).length === 0,则是一个空的对象-->
<div v-if="Object.keys(goods).length !== 0" class='detail-base-info'>
	<div class="info-title">{{goods.title}}</div>
	<div class="info-price">
		<span class="new-price">{{goods.newPrice}}</span>
		<span class="old-price">{{goods.oldPrice}}</span>
		<span class="discount" v-if="goods.discount">{{goods.discount}}</span>
	</div>
	<div class="info-other">
		<span>{{goods.columns[0]}}</span>
		<span>{{goods.columns[1]}}</span>
		<span>{{goods.services[goods.services.length - 1].name}}</span>
	</div>
	<div class="info-service">
		<span v-for="index in goods.services.length - 1">
			<img :src="goods.services[index - 1].icon" alt="">
			<span>{{goods.services[index- 1].name}}</span>
		</span>
	</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
	goods: {
		type: Object,
		default: {}
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
.detail-base-info {
	padding: 8px;
	border-bottom: 8px solid #eee;
}
.info-title {
	padding: 10px 0px;
	font-size: 18px;
	font-weight: 600;
	color: #333;
}
.info-price .new-price {
	font-size: 20px;
	color: var(--color-high-text);
}
.info-price .old-price {
	padding-left: 5px;
	font-size: 10px;
	text-decoration: line-through;
}
.info-price .discount {
	font-size: 12px;
	background-color: var(--color-high-text);
	padding: 3px;
	color: #fff;
	border-radius: 6px;
	margin-left: 5px;
	position: relative;
	top: -8px;
}
.info-other {
	margin-top: 10px;
	font-size: 13px;
	line-height: 30px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-service {
	display: flex;
	justify-content: space-between;
	line-height: 50px;
	font-size: 12px;
	color: #333;
	border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-service img {
	width: 15px;
	height: 15px;
	vertical-align: middle;
}
</style>
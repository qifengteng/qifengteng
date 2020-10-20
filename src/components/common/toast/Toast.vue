<!--
 * @Author: your name
 * @Date: 2020-10-20 21:57:15
 * @LastEditTime: 2020-10-20 22:48:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\components\common\toast\Toast.vue
-->
<!--  -->
<template>
<div class='toast'  v-show="isShow">
	<div>{{message}}</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
	// message: {
	// 	type: String,
	// 	default: ''
	// },
	// show: {
	// 	type: Boolean,
	// 	defaule: false
	// }
},
data() {
//这里存放数据
	return {
		message: '',
		isShow: false
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
	show (message='默认文字', duration=2000) {
		this.isShow = true
		this.message = message
		setTimeout(() => {
			this.isShow = false
			this.message = ''
		}, duration)
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
.toast {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 8px 10px;
	color: #fff;
	background-color: rgba(1,1,1,.7);
	z-index: 9;
}
</style>
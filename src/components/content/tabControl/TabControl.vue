<!--
 * @Author: your name
 * @Date: 2020-10-06 22:43:21
 * @LastEditTime: 2020-10-07 01:20:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\components\content\tabControl\TabControl.vue
-->
<!--  -->
<template>
<div class='tab-control'>
	<div v-for="(item, index) in titles" class="tab-control-item" 
	:class="{active: index === currentIndex}" 
	@click="itemClick(index)">
		<span>{{item}}</span>
	</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name: 'TabControl',
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
	titles: {
		type: Array,
		default () {
			return []
		}
	}
},
data() {
//这里存放数据
	return {
		currentIndex: 0
	};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
	itemClick(index) {
		this.currentIndex = index
		this.$emit('tabClick', index)
	}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

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
.tab-control {
	display: flex;
	text-align: center;
	font-size: 15px;
	height: 40px;
	line-height: 40px;
	background-color: #fff;
}
.tab-control-item {
	flex: 1;
}
.tab-control-item span {
	padding: 5px;
}
.tab-control-item.active {
	color: var(--color-high-text);
}
.tab-control-item.active span {
	border-bottom: 3px solid var(--color-tint);
}
</style>
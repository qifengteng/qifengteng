<!--
 * @Author: your name
 * @Date: 2020-10-15 00:31:27
 * @LastEditTime: 2020-10-18 20:50:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\detail\childComps\DetailParamsInfo.vue
-->
<!--  -->
<template>
<div class="params-info" v-if="Object.keys(paramsInfo).length > 0">
	<table v-for="item in paramsInfo.sizes">
		<tr v-for="tr in item">
			<td v-for="td in tr">{{td}}</td>
		</tr>
	</table>
	<table class="info-param">
		<tr v-for="item in paramsInfo.infos">
			<td class="info-param-key">{{item.key}}</td>
			<td class="info-param-value">{{item.value}}</td>
		</tr>
	</table>
	<div class="info-img" v-if="paramsInfo.image.length !== 0">
		<img :src="paramsInfo.image" alt=""/>
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
	paramsInfo: {
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

},
activated() {}, //如果页面有keep-alive缓存功能，路由活跃时会触发
deactivated() {}, //如果页面有keep-alive缓存功能，路由离开时这个函数会触发
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {
}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入公共css类 */
.params-info {
	padding: 20px 15px;
	font-size: 14px;
	border-bottom: 5px solid #f2f5f8;
}
table {
	width: 100%;
}
table tr {
	height: 42px;
	border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-param {
	border-top: 1px solid rgba(0,0,0,.1);
}
.info-param-key {
	/*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
	width: 95px;
}
.info-param-value {
	color: var(--color-high-text);
}
.info-img img {
	width: 100%;
}
</style>
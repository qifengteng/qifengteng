<!--
 * @Author: your name
 * @Date: 2020-10-14 23:11:19
 * @LastEditTime: 2020-10-15 00:06:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\detail\childComps\DetailGoodsInfo.vue
-->
<!--  -->
<template>
<div v-if="Object.keys(detailInfo).length > 0" class='goods-info'>
	<div class="info-desc clear-fix">
		<div class="start"></div>
		<div class="desc">{{detailInfo.desc}}</div>
		<div class="end"></div>
	</div>
	<div v-for="item in detailInfo.detailImage">
		<div class="info-key">{{item.key}}</div>
		<div class="info-list" v-for="imgItem in item.list">
			<img :src="imgItem" alt="" @load="imageLoad">
		</div>
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
	detailInfo: {
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
watch: {
},
//方法集合
methods: {
	imageLoad () {
		this.$emit('imageLoad')
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
.goods-info {
	border-bottom: 5px solid #f2f5f8;
	padding: 20px 0;
}
.info-desc {
	padding: 0px 15px;
}
.info-desc .start, .info-desc .end {
	width: 90px;
	height: 1px;
	background-color: #a3a3a5;
	position: relative;
}
.info-desc .start {
	float: left;
}
.info-desc .end {
	float: right;
}
.info-desc .start::before, .info-desc .end::after {
	content: '';
	width: 5px;
	height: 5px;
	background: #333;
	position: absolute;
	bottom: 0;
}
.info-desc .end::after {
	right: 0;
}
.info-desc .desc {
	padding: 15px 0;
	font-size: 14px;
}
.info-key {
	font-size: 15px;
	color: #333;
	margin: 10px 0 10px 15px;
}
.info-list img {
	width: 100%;
}
</style>
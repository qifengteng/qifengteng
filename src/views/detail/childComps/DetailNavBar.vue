<!--
 * @Author: your name
 * @Date: 2020-10-11 23:56:37
 * @LastEditTime: 2020-10-18 20:14:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\components\common\navbar\childComps\DetailNavBar.vue
-->
<!--  -->
<template>
<div class='detailNavBar'>
	<nav-bar>
		<div slot="left" class="back" @click="backClick">
			<img src="~assets/img/common/back.svg" alt="">
		</div>
		<div slot="center" class="title">
			<div v-for="(item, index) in titles"
					 class="title-item"
					 @click="itemClick(index)"
					 :class="{active: currentIndex === index}">{{item}}</div>
		</div>
	</nav-bar>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
name: 'detailNavBar',
//import引入的组件需要注入到对象中才能使用
components: {
	NavBar
},
data() {
//这里存放数据
	return {
		titles: ['商品', '参数', '评论', '推荐'],
		currentIndex: 0
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
	itemClick (index) {
		this.currentIndex = index
		this.$emit('itemClick', index)
	},
	backClick () {
		this.$router.back()
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
.title {
	display: flex;
	font-size: 13px;
}
.title-item {
	flex: 1
}
.active {
	color: var(--color-high-text);
}
.back {
	margin-top: 6px;
}
</style>
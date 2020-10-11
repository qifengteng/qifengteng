<!--
 * @Author: your name
 * @Date: 2020-10-07 00:06:45
 * @LastEditTime: 2020-10-07 01:16:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\components\content\goods\GoodsList.vue
-->
<!--  -->
<template>
<div class='goods'>
	<goods-list-item v-for="(item, index) in goods" :goods-item="item" :key="index"/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import GoodsListItem from './GoodsListItem'

export default {
name: 'GoodsList',
//import引入的组件需要注入到对象中才能使用
components: {
	GoodsListItem
},
props: {
	goods: {
		type: Array,
		default () {
			return []
		}
	}
},
data() {
//这里存放数据
	return {

	};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
.goods {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 2px;
}
</style>
<!--
 * @Author: your name
 * @Date: 2020-10-05 23:48:58
 * @LastEditTime: 2020-10-11 22:10:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\home\childComps\HomeSwiper.vue
-->
<!--  -->
<template>
	<swiper>
		<swiper-item v-for="(item, index) in banners" :key="index">
			<a :href="item.link">
				<img :src="item.image" alt="" @load="imageLoad">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {Swiper, SwiperItem} from '../../../components/common/swiper'

export default {
name: 'HomeSwiper',
//import引入的组件需要注入到对象中才能使用
components: {
	Swiper,
	SwiperItem
},
props: {
	banners: {
		type: Array,
		default() {
			return []
		}
	}
},
data() {
//这里存放数据
	return {
		isLoad: false
	};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
	imageLoad () {
		// 为了不让多次发出事件（注意：这里不进行多次调用和debounce的区别），这里用变量记录状态，下次不用发出
		if (!this.isLoad) {
			this.$emit('SwiperImageLoad')
			this.isLoad = true
		}
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

</style>
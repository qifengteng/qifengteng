<!--
 * @Author: your name
 * @Date: 2020-10-08 00:46:29
 * @LastEditTime: 2020-10-11 23:11:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\components\common\scroll\scroll.vue
-->
<!--  -->
<template>
<div ref='wrapper'>
	<div>
		<slot></slot>
	</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from 'better-scroll'
export default {
name: 'Scroll',
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
	probeType: {
		type: Number,
		default: 0
	},
	pullUpLoad: {
		type: Boolean,
		default: false
	}
},
data() {
//这里存放数据
	return {
		scroll: null
	};
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
	// 1. 创建Scroll对象
	this.scroll = new BScroll(this.$refs.wrapper, {
		probeType: this.probeType, // 有这个属性才能监听滚动位置
		click: true,
		pullUpLoad: this.pullUpLoad
	})
	// 2. 监听滚动位置 监听scroll事件
	this.scroll.on('scroll', (position) => {
		this.$emit('scroll', position)
	})
	// 3. 监听上拉事件 监听pullingUp事件 当设置为2或者3的时候才做监听
	if (this.probeType === 2 || this.probeType === 3) {
		this.scroll.on('pullingUp', () => {
			this.$emit('pullingUp')
		})
	}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
	// 封装scrollTo方法， 方便调用
	scrollTo (x, y, time=500) {
		// this.scroll && 逻辑与，调用这个方法的时候先看看有没有这个对象，有才进行后面的调用
		this.scroll && this.scroll.scrollTo(x, y, time)
	},
	// 封装finishPullUp方法，上啦加载完成之后回调
	finishPullUp () {
		this.scroll && this.scroll.finishPullUp()
	},
	// 封装refresh方法，方便调用
	refresh () {
		this.scroll && this.scroll.refresh()
	},
	getScrollY () {
		return this.scroll ? this.scroll.y : 0
	}
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
/* @import url(); 引入公共css类 */

</style>
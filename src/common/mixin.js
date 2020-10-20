/*
 * @Author: your name
 * @Date: 2020-10-17 23:57:44
 * @LastEditTime: 2020-10-19 00:22:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\common\mixin.js
 */
import BackTop from 'components/content/backTop/BackTop'
export const backTopMixin = {
	components: {
		BackTop
	},
	data () {
		return {
		isShowBackTop: false,
		}
	},
	methods: {
		backTop () {
			this.$refs.scroll.scrollTo(0, 0, 500)
		}
	}
}

/*
 * @Author: your name
 * @Date: 2020-10-19 21:44:51
 * @LastEditTime: 2020-10-19 21:49:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\store\getters.js
 */

// 相当于计算属性
export default {
	cartLength (state) {
		return state.cartList.length
	},
	cartList (state) {
		return state.cartList
	}
}
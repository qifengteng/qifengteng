/*
 * @Author: your name
 * @Date: 2020-10-19 20:28:37
 * @LastEditTime: 2020-10-19 21:45:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * 
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1. 使用vuex
Vue.use(Vuex)

const state = {
	cartList: []
}
// 2. 创建vuex实例
const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
export default store
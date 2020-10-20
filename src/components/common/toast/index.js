/*
 * @Author: your name
 * @Date: 2020-10-20 22:19:31
 * @LastEditTime: 2020-10-20 22:59:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\components\common\toast\index.js
 */
import Toast from './Toast'
const obj = {}

obj.install = function (Vue) {
	// 1. 创建组件构造器
	const toastContrustor = Vue.extend(Toast)
	// 2. new的方式，根据组件构造器，可以创建出来一个组件对象
	const toast = new toastContrustor()
	// 3. 将组件对象，手动挂载到某一个对象上
	toast.$mount(document.createElement('div'))
	// 4. toast.$el对应的就是div
	document.body.appendChild(toast.$el)
	Vue.prototype.$toast = toast
}
export default obj
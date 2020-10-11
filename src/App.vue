<!--
 * @Author: your name
 * @Date: 2020-09-24 00:14:38
 * @LastEditTime: 2020-10-04 20:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\App.vue
-->
<template>
  <div id="app">
		<router-view/>
		<main-tab-bar/>
	</div>
</template>

<script>
	import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'
export default {
  name: "App",
  components: {
		MainTabBar
	}
};
</script>

<style>
@import "assets/css/base.css";
</style>

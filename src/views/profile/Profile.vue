<!--
 * @Author: your name
 * @Date: 2020-10-04 20:31:20
 * @LastEditTime: 2020-10-11 16:59:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\views\profile\Profile.vue
-->
<!-- 这里主要测试一下better-scroll 的 :probe-type的属性 -->
<template>
<div class='profile'>
	<scroll class='content' :probe-type="0">
		<ul>
			<li>我的列表1</li>
			<li>我的列表2</li>
			<li>我的列表3</li>
			<li>我的列表4</li>
			<li>我的列表5</li>
			<li>我的列表6</li>
			<li>我的列表7</li>
			<li>我的列表8</li>
			<li>我的列表9</li>
			<li>我的列表10</li>
			<li>我的列表11</li>
			<li>我的列表12</li>
			<li>我的列表13</li>
			<li>我的列表14</li>
			<li>我的列表15</li>
			<li>我的列表16</li>
			<li>我的列表17</li>
			<li>我的列表18</li>
			<li>我的列表19</li>
			<li>我的列表20</li>
			<li>我的列表21</li>
			<li>我的列表22</li>
			<li>我的列表23</li>
			<li>我的列表24</li>
			<li>我的列表25</li>
			<li>我的列表26</li>
			<li>我的列表27</li>
			<li>我的列表28</li>
			<li>我的列表29</li>
			<li>我的列表30</li>
			<li>我的列表31</li>
			<li>我的列表32</li>
			<li>我的列表33</li>
			<li>我的列表34</li>
			<li>我的列表35</li>
			<li>我的列表36</li>
			<li>我的列表37</li>
			<li>我的列表38</li>
			<li>我的列表39</li>
			<li>我的列表40</li>
			<li>我的列表41</li>
			<li>我的列表42</li>
			<li>我的列表43</li>
			<li>我的列表44</li>
			<li>我的列表45</li>
			<li>我的列表46</li>
			<li>我的列表47</li>
			<li>我的列表48</li>
			<li>我的列表49</li>
			<li>我的列表50</li>
			<li>我的列表51</li>
			<li>我的列表52</li>
			<li>我的列表53</li>
			<li>我的列表54</li>
			<li>我的列表55</li>
			<li>我的列表56</li>
			<li>我的列表57</li>
			<li>我的列表58</li>
			<li>我的列表59</li>
			<li>我的列表60</li>
			<li>我的列表61</li>
			<li>我的列表62</li>
			<li>我的列表63</li>
			<li>我的列表64</li>
			<li>我的列表65</li>
			<li>我的列表66</li>
			<li>我的列表67</li>
			<li>我的列表68</li>
			<li>我的列表69</li>
			<li>我的列表70</li>
			<li>我的列表71</li>
			<li>我的列表72</li>
			<li>我的列表73</li>
			<li>我的列表74</li>
			<li>我的列表75</li>
			<li>我的列表76</li>
			<li>我的列表77</li>
			<li>我的列表78</li>
			<li>我的列表79</li>
			<li>我的列表80</li>
			<li>我的列表81</li>
			<li>我的列表82</li>
			<li>我的列表83</li>
			<li>我的列表84</li>
			<li>我的列表85</li>
			<li>我的列表86</li>
			<li>我的列表87</li>
			<li>我的列表88</li>
			<li>我的列表89</li>
			<li>我的列表90</li>
			<li>我的列表91</li>
			<li>我的列表92</li>
			<li>我的列表93</li>
			<li>我的列表94</li>
			<li>我的列表95</li>
			<li>我的列表96</li>
			<li>我的列表97</li>
			<li>我的列表98</li>
			<li>我的列表99</li>
			<li>我的列表100</li>
		</ul>
	</scroll>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Scroll from 'components/common/scroll/Scroll.vue'
export default {
name: 'profile',
//import引入的组件需要注入到对象中才能使用
components: {
	Scroll
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
watch: {},
//方法集合
methods: {

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
.content {
	height: 300px;
	background-color: red;
	overflow: hidden;
}
</style>
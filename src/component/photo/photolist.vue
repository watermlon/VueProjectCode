<template>
	<div class="temp">
		<div id="cate">
			<ul>
				<li>全部</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
				<li>分类</li>
			</ul>
		</div>
	</div>
</template>

<script>
import apiline from '../subcom/comment.vue';
	export default{

	}
</script>

<style scoped>
	#cate{
		width: 375px;
		max-width: 375px;
		overflow-x: auto;
	}
	#cate ul{
		width: 1000px;
		margin: 0px;
		padding-left: 10px;
	}
	#cate li{
		list-style: none;
		display: inline-block;
		color:#0094ff;
		font-size: 14px;
		padding-left: 6px;
	}
</style>
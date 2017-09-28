<template>
	<div class="back">
		<router-link class='color' v-bind="{to:'/'+url}">&lt; 返回</router-link>
	</div>
</template>

<script>
	export default{
		props:['url']
	}
</script>

<style scoped>
	.back{
		color:#fff;
		position: fixed;
		top: 5px;
		left: 5px;
		z-index: 200;
	}
	.color{
		color:#fff;
	}
</style>
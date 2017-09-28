<template>
	<div class="back">
		<router-link v-bind="{to:url}">返回</router-link>
	</div>
</template>

<script>
	export default{
		proto:['url']
	}
</script>

<style scoped>
	.back{
		position: fixed;
		top: 5px;
		left: 5px;
		z-index: 200;
	}
</style>
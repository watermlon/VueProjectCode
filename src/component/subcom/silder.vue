<template>
	<div class="temp">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for='(item,index) in imglis' :key='index'>
                <img :src="item.img">
          </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		props:['imglis']
	}
</script>

<style scoped>
	.mint-swipe{
        height: 300px;
    }
    .mint-swipe-item img{
        width: 100%;
        height: 100%
    }
    .mint-swipe-item{
        width: 100%;
        height: 300px;
    }
</style>
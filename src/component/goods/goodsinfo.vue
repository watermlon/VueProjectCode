<template>
	<div class="temp">
		<div>轮播图占位</div>
		<div class="buy">
			<h3>title</h3>
			<hr />
			<p><span>市场价：</span><s>￥2699</s><span>销售价：</span><span>2195</span></p>
			<span>购买数量：</span>
			<p>
				<mt-button type="default" size='small'>-</mt-button>
				<span class="num">1</span>
				<mt-button type="default" size='small'>+</mt-button>
			</p>
			<mt-button type="primary">立即购买</mt-button>
			<mt-button type="danger">加入购物车</mt-button>
		</div>
		<div class="params"></div>
		<div class="other"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				id:0
			}
		},
		created(){
			this.id=this.$route.params.id;
		}
	}
</script>

<style scoped>
	.buy,.params,.other{
		border: 1px solid #ccc;
		border-right: 10px;
	}
	.num{
		display: inline-block;
		height: 33px;
		text-align: center;
		line-height: 33px;
		border: 1px solid #ccc;
		padding: 0 10px;
	}
</style>
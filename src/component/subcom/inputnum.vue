<template>
	<div class="inputnum">
		<mt-button type="default" size='small' @click='substrict'>-</mt-button>
			<span class="num" v-text='count'></span>
		<mt-button type="default" size='small' @click='add'>+</mt-button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				count:1
			}
		},
		methods:{
			add(){
				this.count++
				this.senddata();
			},
			substrict(){
				this.count--
				if (this.count<1) {
					this.count=1
				}
				this.senddata()
			},
			senddata(){
				this.$emit('dataobj',this.count)
			}
		}
	}
</script>

<style scoped>
	.num{
		display: inline-block;
		height: 33px;
		text-align: center;
		line-height: 33px;
		border: 1px solid #ccc;
		padding: 0 10px;
	}
</style>
<template>
	<div class="temp">
		<commen :newsid='id'></commen>
		}
	</div>
</template>

<script>
import commen from '../subcom/comment.vue'
	export default{
		components:{
			commen
		},
		data(){
			return{
				id:0
			}
		},
		created(){
			this.id=this.$route.params.id;
		}
	}
</script>

<style scoped>
	
</style>
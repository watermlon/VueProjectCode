<template>
	<div class="temp">
		<h3 v-text='desc.title'></h3>
		<hr />
		<div class="content" v-html='desc.content'></div>
	</div>
</template>

<script>
import apiline from '../../kits/common.js'
	export default{
		data(){
			return {
				id:0,
				desc:{}
			}
		},
		created(){
			this.id=this.$route.params.id
			this.getdesc();
		},
		methods:{
			getdesc(){
				var url = apiline.apiline+'/api/goods/getdesc/'+this.id
				this.$http.get(url).then(function(res){
					var data = res.body
					if (data.status !=0) {
						alert(data.message);
						return
					}
					this.desc=data.message[0];
				})
			}
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
	}
	.content img{
		width: 100%;
	}
</style>
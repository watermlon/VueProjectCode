<template>
	<div class="temp">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for='(item,index) in list' :key='index'>
                <img :src="item.img">
          </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
    import { Toast } from 'mint-ui'
	export default{
        data(){
            return {
                list:[]
            }
        },
        created(){
            this.getImg()
        },
        methods:{
            //ajax获取数据
            getImg(){
                var url = 'http://182.254.146.100:8899/api/getlunbo'
                this.$http.get(url).then(function(res){
                    var data = res.body;
                    if (data.status!=0) {
                        Toast(body.message);
                        return
                    }
                    this.list = data.message;
                })
            }
        }
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
//可以公共调用的本地存储方法
export default{
	setdata(data){
		/*var olddata=localStorage.getItem('goodsdata') || '[]';
		var arr = JSON.parse(olddata);*/
		var arr = this.getdata();
		arr.push(data);
		var str = JSON.stringify(arr);
		localStorage.setItem('goodsdata',str);
	},
	getdata(){
		var olddata=localStorage.getItem('goodsdata') || '[]';
		var arr = JSON.parse(olddata);
		return arr
	},
	getgoodsnum(){
		var arr = this.getdata();
		var sum = 0;
	}
}
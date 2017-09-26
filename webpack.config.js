var htmlwp = require('html-webpack-plugin');
module.exports={
	entry:'./src/main.js',//源文件
	output:{
		path:__dirname+'/dist',//目标地址
		filename:'build.js'//生成文件名
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!sass-loader'
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader'
			},
			{
				test:/\.(png|jpg|ttf|svg|gif)$/,
				loader:'url-loader?limit=40000'
			},
			/*{
				test: /\.js$/, 
				loader:'babel-loader',
				exclude:/node_modules/
			},*/
			{
				test: /\.vue$/, 
				loader:'vue-loader'
			}
		]
	},
/*	babel:{
	    presets:['es2015'],  
	    plugins:['transform-runtime']
	 },*/
	plugins:[
        new htmlwp({
          title: '首页',  //生成的页面标题<head><title>首页</title></head>
          filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
          template: 'index1.html' //根据index1.html这个模板来生成(这个文件请程序员自己生成)
        })
    ]
}
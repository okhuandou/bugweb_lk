插件
//全局安装
npm install - g webpack
//安装到你的项目目录
npm install--save - dev webpack
//在上述练习文件夹中创建一个package.json文件，这是一个标准的npm说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等。在终端中使用npm init命令可以自动创建这个package.json文件
npm init
//通过简单的配置， webpack就可以在打包时为我们生成的source maps， 这为我们提供了一种对应编译文件和源文件的方法， 使得编译后的代码可读性更高， 也更容易调试。
devtool
source - map
//在一个单独的文件中产生一个完整且功能完全的文件。 这个文件具有最好的source map， 但是它会减慢打包速度；
eval - source - map
//使用eval打包源文件模块， 在同一个文件中生成干净的完整的source map。 这个选项可以在不影响构建速度的前提下生成完整的sourcemap， 但是对打包后输出的JS文件的执行具有性能和安全的隐患。 在开发阶段这是一个非常好的选项， 在生产阶段则一定不要启用这个选项；
cheap - module - eval - source - map
//这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；
npm install--save - dev webpack - dev - server
devserver的配置选项
contentBase
//默认webpack - dev - server会为根文件夹提供本地服务器， 如果想为另外一个目录下的文件提供本地服务器， 应该在这里设置其所在目录（ 本例设置到“ public "目录）

port
//	设置默认监听端口，如果省略，默认为”8080“
inline
// 	设置为true，当源文件改变时会自动刷新页面
historyApiFallback
//	 	在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
npm run server
在终端中输入npm run server即可在本地的8080端口查看结果
Loaders
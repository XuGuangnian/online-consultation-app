// typescript作用：给js定义的变量添加类型约束=》把js变成强类型语言（更严谨）
// 例子：之前学过less、sass=>.less .scss=> 打包转换成.css才能在浏览器运行
// 说明：同样，typescript的.ts格式需要打包转换成.js才能在浏览器运行
let hi: string = 'hi typescript!'

hi = 'hi vue3!'

console.log(hi)

// 说明：声明模块化，避免命名冲突
export { }


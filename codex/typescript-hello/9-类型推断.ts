/**
 * 思考问题❓：实际开发中，每次定义变量都让你加类型约束，高效吗？
 * 太麻烦了！
 * 原则：能不加就不加，充分利用类型推断机制=》让ts自动给你加类型
 * ts通过类型推断机制，提高使用ts开发体验
 */
// 场景一：声明变量并初始化时
let test = 'hi ts'
test = ''

let obj = {
  name: '张诗琦',
  age: 18
}

// 场景二：函数返回值类型
const fn = (a: number, b: string) => {
  return a + b
}


export { }



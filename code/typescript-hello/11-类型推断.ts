/**
 * 类型推断 =》ts底层运行机制
 * 作用：根据定义变量的值，自动添加类型约束
 * 注意：定义变量明确给默认值，类型推断机制才会工作
 */
let age = 1
// 报错
// age = ''
age = 10

let show = false
show = true


let person = {
  name: '小红',
  age: 19,
  say() {

  }
}

person.say()


// 函数返回值的类型被自动推断为：number
const add = (num1: number, num2: number) => {
  return num1 + num2;
};


export { }
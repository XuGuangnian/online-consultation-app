/**
 * 函数类型：给函数指定类型，其实是给 `参数` 和 `返回值` 指定类型
 */
// es5
function sub(num1: number, num2: number): number {
  return num1 + num2;
}
// es6
const add = (a: number, b: number): number => {
  return a + b
}

// 把add函数类型定义为类型别名复用
type Add = (a: number, b: number) => number

const add2: Add = (a, b) => {
  return a + b
}

// 函数没有返回值=> 通过void指定
const fn = (a: string, b: string): void => {

}

add2(1, 2)

// 函数的可选参数=》参数定义为可选参数，使用的时候这个参数可以传也可以不传
// 注意：必传参数前不能有可选参数=》打乱了顺序
const slice = (start?: number, end?: number) => {

}

slice()
slice(1, 2)


export { }
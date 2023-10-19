/**
 * 语法：let arr:type1 | type2 ...
 * 作用：给变量添加多个类型约束
 */
let arr: (number | string | boolean)[] = [1, 2, 5, 'df', false]

let abc: null | number
abc = null
abc = 100
// 报错
// abc = ''

let arr2: number | string | boolean[]
// 思考：arr2变量是什么类型？数字 + 字符串 + 数组
arr2 = 1
arr2 = 'df'
arr2 = [true]

export { }

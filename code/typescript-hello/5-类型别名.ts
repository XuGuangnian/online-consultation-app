/**
 * 语法：type 别名变量名 = types类型值
 * 作用：复用类型
 */
let arr: (number | string | boolean)[] = [1, 2, 5, 'df', false]

let arr2: (number | string | boolean)[]
arr2 = [1, false]

// 问题：怎么去复用一个类型？
// 解决：使用类型别名=》推荐用大驼峰命名法
// 1. 定义类型别名
type Arr = (number | string | boolean)[]

type StrNum = string | number

// 2. 复用
let arr3: Arr = [1, 'ts', false]

let arr4: Arr = [false, 1]

let abc: StrNum = ''





export { }
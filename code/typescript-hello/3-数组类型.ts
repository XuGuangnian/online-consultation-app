/**
 * 语法：
 * 1. let arr:type[] (推荐)
 * 2. let arr:Array<type>
 */
let arr: number[] = [1, 2, 5]
// 报错
// arr = [1,10, '']
arr = [1, 10, 12]

let arr2: Array<boolean> = [true, false]



export { }
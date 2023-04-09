/**
 * 作用：any 类型的作用是逃避 TS 的类型检查
 */
// 1. 给变量添加any,不受类型保护
let msg: any = 1
msg = [1, 2]
// 2. 隐式any的情况,不受类型保护
let abc
abc = 1
abc = ''




export { }
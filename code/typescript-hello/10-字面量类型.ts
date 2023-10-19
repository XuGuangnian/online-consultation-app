/**
 * 什么是字面量类型？类型是一个具体的值（类似常量）
 * 使用场景：可选值的列表
 */

let msg: 10 = 10
// 场景1:
let sex: '男' | '女'
sex = '女'
sex = '男'
// 场景2:
const play = (direction: 'up' | 'down' | 'left' | 'right') => {

}
play('up')

// const abc = 123
// 不能给其他值
// abc = 456



export { }
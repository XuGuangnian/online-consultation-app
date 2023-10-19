/**
 * 语法：let 变量名 = 值 as 类型
 */
// aLink 的类型 HTMLElement，该类型只包含所有标签公共的属性或方法
// 这个类型太宽泛，没包含 a 元素特有的属性或方法，如 href
// 场景1: 给dom元素添加类型
// 说明：获取html元素类型=》document.querySelector('标签名').__proto__
const aLink = document.getElementById('link') as HTMLAnchorElement
aLink.href = 'http://baidu.com'

// 场景2: 实际开发会使用(掌握)
// 需求：登录后，获取用户详情数据（id、头像、用户名等）
// 后台获取用户数据的类型
type User = {
  id: string
  name: string
  age: number
}
// 实际开发会设置空对象为默认值，但是类型报错
// let user:User = {}
let user = {} as User

user = {
  id: 'dfd',
  name: 'dfdf',
  age: 18
}


export { }
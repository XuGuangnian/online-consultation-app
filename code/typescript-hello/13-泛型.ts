/**
 * 作用：泛型（Generics）可以在保证类型安全前提下，给别名、接口、函数等添加**类型参数**，从而实现**复用**
 */
// 1. 范型别名 语法：type 类型别名<Type1, Type2...> = {}
/**
 * 实际开发：
 * 后台api返回数据
 * 1. response数据整体结构一样：data数据 + message提示消息
 * 2. response中每个api返回的数据不一样
 */
// 问题：这样定义api返回数据类型，代码冗余
// type Response = {
//   message: string
//   data: {
//     // 文章列表这个api的数据类型
//   }
// }
// type Response2 = {
//   message: string
//   data: {
//     // 文章详情这个api的数据类型
//   }
// }

// 解决：使用范型别名
// 1. 定义一个后台返回数据的范型工具函数
// 说明：因为每个api返回data数据不一样，为了复用一样的部分，不一样的部分使用范型参数传入
// 传入什么类型，data就是什么类型
type Response<Data> = {
  message: string
  data: Data
}

// 2. 应用了
// 个人中心api
type UserData = Response<{
  id: string
  name: string
  age: number
}>

// 新闻列表
type ListData = Response<{ id: string; tittle: string }[]>




export { }



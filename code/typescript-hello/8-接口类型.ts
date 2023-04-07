/**
 * 语法：interface 接口类型名字 {key1:type1; key2?:type2...}
 * 作用：给对象定义类型
 */
// 1. 接口类型基本使用
interface Student {
  name: string
  age: number
  sex: string
  cj: number
  height?: number
  study?: () => void
  play?: () => void
}

let stu: Student
stu = {
  name: '小红',
  age: 18,
  sex: '男',
  cj: 100,
  height: 180
}

// 2. 接口类型的继承
interface Person {
  name: string
  age?: number
  say: () => void
}
// 需求：Teacher接口类型想要使用Person接口类型中的属性=》继承
interface Teacher extends Person {
  // name: string
  // age: number
  // say: () => void
  wirteCode: () => void
}

let twang: Teacher = {
  name: '王猛',
  // age:
  say() {

  },
  wirteCode() {

  },
}







export { }
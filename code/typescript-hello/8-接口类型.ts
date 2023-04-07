/**
 * 语法：interface 接口类型名字 {key1:type1; key2?:type2...}
 * 作用：给对象定义类型
 */

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



export { }
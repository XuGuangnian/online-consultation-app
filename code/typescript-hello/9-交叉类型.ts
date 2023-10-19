/**
 * 语法：type 类型名 = Type1 & Type2 & {  }
 * 作用：给类型别名做继承复用
 */
type Person = {
  name: string
  age?: number
  say: () => void
}

type Teacher = Person & {
  // name: string
  // age?: number
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

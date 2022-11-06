/**
 * 作用：泛型（Generics）可以在保证类型安全前提下，给别名、接口、函数等添加**类型参数**，从而实现**复用**
 */
// 场景一：泛型别名 => 语法：type 类型别名<Type1, Type2...> = {}
type Data1<Type1, Type2> = {
  name: string
  age: number
  message: Type1 // 类型通过泛型参数指定
  meta?: {
    msg: Type2
    status: number
  }
}

let data1: Data1<number[], string> = {
  name: '',
  age: 1,
  message: [1, 2]
}

let data2: Data1<string, number> = {
  name: '',
  age: 1,
  message: 'str',
  meta: {
    msg: 100,
    status: 200
  }
}

// 场景二：泛型接口 =》interface 接口名<Type1, Type2...> {}
interface Data2<Type1> {
  meta: string
  data: Type1
}

let data3: Data2<number> = {
  meta: '',
  data: 1
}

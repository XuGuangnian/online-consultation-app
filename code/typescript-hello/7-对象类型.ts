/**
 * 语法：变量名:{key1:type1; key2:type2...}
 */
let person: { name: string; age: number; wirteCode: (a?: number) => void }

person = {
  name: '陈爽',
  age: 18,
  wirteCode(a) {
    console.log(a)
  },
}
person.wirteCode(3)

// 怎么复用对象类型？=》类型别名(推荐写法)
type Person = { name: string; age?: number; wirteCode?: (a?: number) => void }

let person2: Person = {
  name: '冯鑫涛',
  // age:10,
  wirteCode(a) {

  },
}
// ts让js代码更严谨=> 健壮性（鲁棒性）
person2.wirteCode && person2.wirteCode()
if (person2.wirteCode) {
  person2.wirteCode()
}





export { }
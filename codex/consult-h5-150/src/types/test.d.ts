type Person = {
  name: string
  age: number
}
/**
 * ts内置泛型工具：Pick<Person, 'age'> 取出某些属性
 */
type PickPerson = Pick<Person, 'age'>

/**
 * ts内置泛型工具：Omit<Person, 'age'> 排除某些属性
 */
type OmitPerson = Omit<Person, 'age'>

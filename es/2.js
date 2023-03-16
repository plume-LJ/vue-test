#!/usr/bin/env node
function comment() {
  // This is a one line JavaScript comment
  console.log('Hello world!');
}
comment();
console.log('javascript')

// class Person {
//   name = 'Tom'
// }

// console.log(Person)

class Person {
  #privateField1 = 'private field 1'; // 私有字段赋初值
  #privateField2; // 默认 undefined
  static #privateStaticField3 = 'private static field 3'
  constructor(value) {
    this.#privateField2 = value; // 实例化时为私有字段赋值
  }
  #toString() {
    console.log(this.#privateField1, this.#privateField2, Person.#privateStaticField3);
  }
  print() {
    this.#toString()
  }
  static check(obj) {
    return #privateField1 in obj;
  }
}
const p = new Person('private field 2')
p.print()
console.log(Person.check(p))
console.log(await new Promise(resolve => {
  resolve(2)
}))

const str = 'ECMAScript_JavaScript'
const regexp = /s(?<year>c)/igd // 忽略大小全局匹配并返回匹配元素的开始、结束位置索引
console.log(regexp.exec(str).indices) // [ 4, 6 ]
console.log(regexp.exec(str).indices) // [ 15, 17 ]

const str1 = 'JavaScript'
const regexp1 = /(?<test>a)/g
console.log([...str1.matchAll(regexp1)]);

// Output:
// [
//   [ 'a', index: 1, input: 'JavaScript', groups: undefined ],
//   [ 'a', index: 3, input: 'JavaScript', groups: undefined ]
// ]

const arr = ['a', 'b', 'c']
console.log(arr.at(0));
console.log(arr.at(-1)); // 等价于 arr[arr.length - 1]

const person = Object.create({ name: 'Tom' })
person.age = 18;
console.log(Object.hasOwn(person, 'name')); // false
console.log(Object.hasOwn(person, 'age')); // true

// 遇到这种情况 hasOwnProperty 会报错
const p1 = null
console.log(Object.hasOwn(p, 'name'))
// console.log(p1.hasOwnProperty('name')); // TypeError: Cannot read properties of null (reading 'hasOwnProperty')

try {
  await fetch().catch(err => {
    throw new Error('Request failed', { cause: err })
  })
} catch (e) {
  console.log(e.message);
  console.log(e.cause);
}

export {
  Person
}
export default Person
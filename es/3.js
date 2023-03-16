#!/usr/bin/env node

// function doSomethingWith(x) {
//   console.log(x);
//   return {
//     y: "y",
//     z: "z",
//   };
// }
class C {
  static x = "x";
  static y;
  static z;
  static {
    try {
      const obj = doSomethingWith(this.x);
      this.y = obj.y;
      this.z = obj.z;
    } catch (err) {
      this.y = "y is error";
      this.z = "z is error";
    }
  }
}

// const c = new C();
console.log(C);
console.log("JavaScript".replaceAll("a", "b")); // JbvbScript
const delay = (value, ms) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(value), ms));
const promises = [delay("a", 300), delay("b", 200), delay("c", 400)];

await Promise.any(promises)
  .then((res) => console.log(res)) // b
  .catch((err) =>
    console.error(err.name, "----", err.message, "----", err.errors)
  ); // 全部失败时返回：AggregateError All promises were rejected [ 'a', 'b', 'c' ]

const budget = 1_000_000_000_000;
console.log(budget === 10 ** 12); // true
const budget1 = 1_00_0000_0_00000;
console.log(budget1 === 10 ** 12); // true

let a,b = 2;
a ||= b; // a || (a = b);
console.log(a)
a = undefined
// "And And Equals"
a &&= b; // a && (a = b);
console.log(a)
a = undefined

// "QQ Equals"
a ??= b; // a ?? (a = b);
console.log(a)

// import('./2.js').then((module) => {
//   console.log(module.default)
//   console.log(new module.Person())
// })
console.log(import.meta)
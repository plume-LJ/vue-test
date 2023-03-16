#!/usr/bin/env node

let a = 9007199254740995 // 会出现精度丢失
let b = 11119007199254740998n // BigInt 表示方式一

console.log(b**2n)
console.log(a,b)

function fn1 (a, b) {
  const c = a + b;
  return c;
}
const fn = (a, b) => {
  // return a + b value
  const c = a + b;
  return c;
}
console.log(fn1.toString()); 
let aa = new Function('return ' + fn1.toString())
console.log(aa)

// counter.test.js
import { describe, it, expect } from 'vitest'
import { inject, ref } from 'vue'
import { useCounter } from './1.js'
import { withSetup } from './test-utils.js'
// import { test, expect } from '@playwright/test';

const useFoo = (number: number) => {
  return {foo: number}
}

describe('useCounter', () => {
  it('test', () => {
    const { count, increment } = useCounter()
    expect(count.value).toBe(0)
    increment()
    expect(count.value).toBe(1)
  })
})

describe('useCounter', () => {
  it('test', () => {
    const { count, increment } = useCounter()
    expect(count.value).toBe(0)
  
    increment()
    increment()
    increment()
    expect(count.value).toBe(3)
  })
})
describe('useCounter', () => {
  it('test', () => {
    const [result, app] = withSetup(() => useFoo(1))
    // 为注入的测试模拟一方供给
    app.provide('ker',1)
    // 执行断言
    expect(result.foo).toBe(1)
    // 如果需要的话可以这样触发
    app.unmount()
  })
})
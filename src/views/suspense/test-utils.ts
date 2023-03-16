// test-utils.js
import { createApp, type App } from 'vue'

export function withSetup(composable: () => any): [any, App<Element>] {
  let result
  const app = createApp({
    setup() {
      result = composable()
      // 忽略模板警告
      return () => {}
    }
  })
  app.mount(document.createElement('div'))
  // 返回结果与应用实例
  // 用来测试供给和组件卸载
  return [result, app]
}

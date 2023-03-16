import { createApp, readonly, ref, watchEffect } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { injectionauthor1Key, injectionauthorKey } from './views/test/keys'
import directives from './directives/'
import i18nPlugin from './plugins/i18n'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import { VueClipboard } from './directives/clipboard'

const app = createApp(App)

let author = ref('plume')
app.use(createPinia())
app.use(router)
app.provide(injectionauthorKey, author)
app.provide(injectionauthor1Key, readonly(author))

app.directive('focus', {
  mounted: (el: HTMLInputElement) => el.focus()
})
app.directive('color', (el, binding) => {
  // 这会在 `mounted` 和 `updated` 时都调用
  el.style.color = binding.value
})
app.directive('demo', (el, binding) => {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text) // => "hello!"
})

app.use(directives)
app.use(VueClipboard)
app.use(ElementPlus, {
  size: 'small',
  zIndex: 3000,
  locale: zhCn
})
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!'
  }
})

setTimeout(() => {
author.value = 'yumao'
}, 1000)
watchEffect(() => {
  console.log(author.value)
})

app.mount('#app')

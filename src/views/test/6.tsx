import { defineCustomElement } from "vue";

import Te from "./6.ce.vue";

const MyVueElement = defineCustomElement({
  // 这里是同平常一样的 Vue 组件选项
  props: {
    test: String,
    id: String
  },
  emits: {
    build: (...args: number[]) => true,
  },
  setup(props, ctx) {
    const handler = {
      onAdd: () => {
        console.log(23232);
        ctx.emit("build", 1,3,4);
      },
    };

    return () => <div id={props.id} onClick={handler.onAdd}>my-vue{props.test}</div>;
  },

  // defineCustomElement 特有的：注入进 shadow root 的 CSS
  styles: [`/* inlined css */`],
});

const MyVueElement2 = defineCustomElement({
  // 这里是同平常一样的 Vue 组件选项
  props: {
    postTitle: String,
  },
  emits: {
    build: (...args: number[]) => true,
  },
  template:`
    <h3>{{ postTitle }}</h3>
  `,

  // defineCustomElement 特有的：注入进 shadow root 的 CSS
  styles: [`/* inlined css */`],
});

// 注册自定义元素
// 注册之后，所有此页面中的 `<my-vue-element>` 标签
// 都会被升级
customElements.define("my-vue-element", MyVueElement);
customElements.define("my-vue-element2", MyVueElement2);

const Tee = defineCustomElement(
  Te
);
customElements.define("my-vue-element1", Tee);

// 你也可以编程式地实例化元素：
// （必须在注册之后）
document.body.appendChild(
  new MyVueElement({
    // 初始化 props（可选）
    test: 2323,
    id: 'test',
  })
);
document.body.appendChild(
  new MyVueElement2({
    // 初始化 props（可选）
    // postTitle: '2323',
  })
);
document.body.appendChild(
  new Tee({
    // 初始化 props（可选）
    label: 2323
  })
);
setTimeout(() => {
  document.getElementsByTagName('my-vue-element')[1].addEventListener('build', (e) => console.log(e))
  document.getElementsByTagName('my-vue-element1')[1].addEventListener('test', (e) => console.log(e))
})

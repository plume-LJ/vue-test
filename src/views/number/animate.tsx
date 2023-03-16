import { defineCustomElement } from "vue";

import Te from "./animated-number.ce.vue";

const Tee = defineCustomElement(
  Te
);
customElements.define("animated-vue-number", Tee);
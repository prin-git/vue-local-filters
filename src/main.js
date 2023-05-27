import Vue from "vue";
import App from "./App.vue";
//Vue.filter("to-lowercase");
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

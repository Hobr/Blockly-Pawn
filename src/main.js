import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import Blockly from 'node-blockly/browser'
import chinese from 'node-blockly/lib/i18n/zh-hans'

Blockly.setLocale(chinese)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

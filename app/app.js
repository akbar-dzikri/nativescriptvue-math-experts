import Vue from 'nativescript-vue'

import Landing from './components/Landing'

new Vue({
  render: (h) => h('frame', [h(Landing)]),
}).$start()

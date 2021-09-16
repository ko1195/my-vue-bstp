import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'intersection-observer' // Optional

//import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp.use(BootstrapVue);
createApp.config.productionTip = false

 
createApp(App).use(store).use(router).mount('#app')

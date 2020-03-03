import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// page
import Main from './pages/main.vue'
import Detail from './pages/detail.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { 
    path: '/main', 
    name: "Main", 
    component: Main 
  },
  { 
    path: '/detail', 
    name: "Detail", 
    component: Detail 
  },
]

const router = new VueRouter({
  mode: "history",
  routes // `routes: routes`의 줄임
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

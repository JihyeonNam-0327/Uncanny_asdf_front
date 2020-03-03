import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// page
import Apply from './pages/Apply.vue'
import Detail from './pages/Detail.vue'
import Login from './pages/Login.vue'
import LoginCompleted from './pages/LoginCompleted.vue'
import Main from './pages/Main.vue'
import MapPage from './pages/MapPage.vue'
import RegisterStore from './pages/RegisterStore.vue'
import Search from './pages/Search.vue'
import SignUp from './pages/SignUp.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { 
    path: '/apply', 
    name: "Apply", 
    component: Apply 
  },
  { 
    path: '/detail', 
    name: "Detail", 
    component: Detail 
  },
  { 
    path: '/login', 
    name: "Login", 
    component: Login 
  },
  { 
    path: '/logincompleted', 
    name: "LoginCompleted", 
    component: LoginCompleted 
  },
  { 
    path: '/main', 
    name: "Main", 
    component: Main 
  },
  { 
    path: '/mappage', 
    name: "MapPage", 
    component: MapPage
  },
  { 
    path: '/registerStore', 
    name: "RegisterStore", 
    component: RegisterStore 
  },
  { 
    path: '/search', 
    name: "Search", 
    component: Search
  },
  { 
    path: '/signup', 
    name: "SignUp", 
    component: SignUp
  }
]

const router = new VueRouter({
  mode: "history",
  routes // `routes: routes`의 줄임
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

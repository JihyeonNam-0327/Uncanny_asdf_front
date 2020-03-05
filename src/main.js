import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueAgile from 'vue-agile'


// page
import Apply from './pages/Apply.vue'
import Detail from './pages/Detail.vue'
import Login from './pages/Login.vue'
import MyPage from './pages/MyPage.vue'
import Main from './pages/Main.vue'
import MapPage from './pages/MapPage.vue'
import RegisterStore from './pages/RegisterStore.vue'
import Search from './pages/Search.vue'
import SignUp from './pages/SignUp.vue'
import Home from './pages/Home.vue'

Vue.use(VueRouter)
Vue.use(VueAgile)
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
  },
  { 
    path: '/', 
    name: "Home", 
    component: Home,
    children: [
      { 
        path: '/', 
        name: "Main", 
        component: Main 
      },
      { 
        path: '/mappage', 
        name: "MapPage", 
        component: MapPage
      },
      { 
        path: '/mypage', 
        name: "MyPage", 
        component: MyPage 
      },
      { 
        path: '/login', 
        name: "Login", 
        component: Login 
      }
    ]
  },
]

const router = new VueRouter({
  mode: "history",
  routes // `routes: routes`의 줄임
})

new Vue({
  render: h => h(App),
  router,
  components: {
		agile: VueAgile,
	}
}).$mount('#app')

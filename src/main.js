import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueAgile from 'vue-agile'
import ToggleButton from 'vue-js-toggle-button'
import VueScrollTo from 'vue-scrollto';

// page
import Apply from '@/pages/Apply.vue'
import Detail from '@/pages/Detail.vue'
import Login from '@/pages/Login.vue'
import MyPage from '@/pages/MyPage.vue'
import Main from '@/pages/Main.vue'
import MapPage from '@/pages/MapPage.vue'
import RegisterStore from '@/pages/RegisterStore.vue'
import Search from '@/pages/Search.vue'
import SignUp from '@/pages/SignUp.vue'
import Home from '@/pages/Home.vue'
import TestPage from '@/pages/TestPage.vue'
import vuetify from '@/plugins/vuetify';

Vue.use(VueRouter)
Vue.use(VueAgile)
Vue.use(ToggleButton)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

const routes = [
  { 
    path: '/apply', 
    name: 'Apply', 
    component: Apply 
  },
  { 
    path: '/detail', 
    name: 'Detail', 
    component: Detail
  },
  { 
    path: '/registerstore', 
    name: 'RegisterStore', 
    component: RegisterStore 
  },
  { 
    path: '/search', 
    name: 'Search', 
    component: Search
  },
  { 
    path: '/signup', 
    name: 'SignUp', 
    component: SignUp
  },
  { 
    path: '/', 
    name: 'Home', 
    component: Home,
    children: [
      { 
        path: '/', 
        name: 'Main', 
        component: Main 
      },
      { 
        path: '/mappage', 
        name: 'MapPage', 
        component: MapPage
      },
      { 
        path: '/mypage', 
        name: 'MyPage', 
        component: MyPage 
      },
      { 
        path: '/login', 
        name: 'Login', 
        component: Login 
      },
      { 
        path: '/test', 
        name: 'TestPage', 
        component: TestPage 
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  // savedPosition : return a native-like behavior when navigating with back/forward button in the web browser.
  scrollBehavior(to, fron, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      const position = {};
      if(to.hash) {
        position.selector = to.hash;
        if(to.hash === '#experience') {
          position.offset = {y: -30}
        }
        console.log('positions : ', position);
        if(document.querySelector(to.hash)) {
          return position
        }
        return false
      }
    }
  },
  routes // `routes: routes`의 줄임
})

new Vue({
  render: h => h(App),
  router,
  vuetify,
  components: {
    agile: VueAgile
	}
}).$mount('#app')

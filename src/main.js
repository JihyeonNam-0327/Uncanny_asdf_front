import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueAgile from 'vue-agile'
import ToggleButton from 'vue-js-toggle-button'
import VueScrollTo from 'vue-scrollto';
import axios from 'axios'
import API from '@/api.js'
import vClickOutside from 'v-click-outside'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
import feather from 'vue-icon'

// page
import Apply from '@/pages/Apply.vue'
import Detail from '@/pages/Detail.vue'
import Login from '@/pages/Login.vue'
import MyPage from '@/pages/MyPage.vue'
import Main from '@/pages/Main.vue'
import MapPage from '@/pages/MapPage.vue'
import RegisterStore from '@/pages/RegisterStore.vue'
import UpdateStore from '@/pages/UpdateStore.vue'
import SearchKeyword from '@/pages/SearchKeyword.vue'
import SignUp from '@/pages/SignUp.vue'
import Home from '@/pages/Home.vue'
import TestPage from '@/pages/TestPage.vue'
import NjhTestPage from '@/pages/NjhTestPage.vue'
import JhjTestPage from '@/pages/JhjTestPage.vue'
import SearchFilter from '@/pages/SearchFilter.vue'
import UpdateMenu from '@/pages/UpdateMenu.vue'
import UpdateFilter from '@/pages/UpdateFilter.vue'

const CLIENT_ID = '5qehk43mhz';

Vue.use(feather, 'v-icon')
// Loading the plugin into the Vue.
Vue.use(Vuesax)
Vue.use(vClickOutside)
Vue.use(VueRouter)
Vue.use(VueAgile)
Vue.use(ToggleButton)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$api = API

const routes = [
  { 
    path: '/apply', 
    name: 'Apply', 
    component: Apply 
  },
  { 
    path: '/jhjtestpage', 
    name: 'JhjTestPage', 
    component: JhjTestPage
  },
  { 
    path: '/updatefilter', 
    name: 'UpdateFilter', 
    component: UpdateFilter 
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
    path: '/updatestore',
    name: 'UpdateStore',
    component: UpdateStore
  },
  { 
    path: '/searchkeyword', 
    name: 'Searchkeyword', 
    component: SearchKeyword
  },
  { 
    path: '/searchfilter', 
    name: 'SearchFilter', 
    component: SearchFilter
  },
  { 
    path: '/signup', 
    name: 'SignUp', 
    component: SignUp
  },
  { 
    path: '/updatemenu', 
    name: 'UpdateMenu', 
    component: UpdateMenu
  },
  { 
    path: '/', 
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
      },
      { 
        path: '/njhtest', 
        name: 'NjhTestPage', 
        component: NjhTestPage 
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
  components: {
    agile: VueAgile
	}
}).$mount('#app')

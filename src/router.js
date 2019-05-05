import Vue from 'vue'
import Router from 'vue-router'
import first from './components/tabbar/first.vue'
import second from './components/tabbar/second.vue'
import third from './components/tabbar/third.vue'
import fouth from './components/tabbar/fouth.vue'
import NewsList from './components/news/NewsList.vue'
import newsinfo from './components/news/newsinfo.vue'
import video from './components/video/video.vue'
import videoDetail from './components/video/videoDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', redirect: '/first'},
    {path: '/first', component: first},
    {path: '/second', component: second},
    {path: '/third', component: third},
    {path: '/fouth', component: fouth},
    {path: '/first/NewsList', component: NewsList},
    {path: '/first/NewsList/newsinfo/:id', component: newsinfo},
    {path: '/first/video', component: video},
    {path: '/first/video/videoDetail/:id', component: videoDetail}
  ],
  linkActiveClass: 'mui-active'
})

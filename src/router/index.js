import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage.vue'
import ClassCard from '../components/ClassCard.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name: 'MainPage',
    component: MainPage 
  },
  {
    path: '/class/:id', 
    name: 'ClassDetails', 
    component: ClassCard 
  }
]

const router = new VueRouter({
  mode: 'history', 
  routes
})

export default router

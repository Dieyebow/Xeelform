import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from  '../components/HelloWorld.vue'
import Form from  '../components/Form.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/testdone',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/:id_form',
    name: 'formlink',
    component: Form,
    props: true
  }
]
const router = new VueRouter({
 scrollBehavior() {
   return { x: 0, y: 0 };
 },
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})

export default router

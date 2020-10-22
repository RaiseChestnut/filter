import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Classify from '../views/Classify.vue'
import ClassifyList from '../views/ClassifyList.vue'
import EditClassify from '../views/EditClassify.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Main',
  component: Main,
  redirect: '/classify',
  children: [{
      path: 'Classify',
      component: Classify
    },
    {
      path: 'ClassifyList',
      component: ClassifyList
    },
    {
      path: 'EditClassify',
      component: EditClassify
    }
  ]
}]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
import { createRouter } from 'vue-router'

const routes = [
    {
        name:'mainPage',
        path:'/main',
        component: () => import('@/views/Main.vue'), 	// import the main page component and pass it the name "mainPage"
    }
]

const router = createRouter({
    routes
  })
  
  export default router
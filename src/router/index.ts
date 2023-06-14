import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name:'home',
        path:'/home',
        component: () => import('@/views/Layout.vue'),
        children:[
            {
                name:'Nav1',
                path:'/Navigator1',
                component: () => import('@/components/Navigator1.vue'), 	// import the main page component and pass it the name "mainPage"
            },
            {
                name:'Nav2',
                path:'/Navigator2',
                component: () => import('@/components/Navigator2.vue'), 	// import the main page component and pass it the name "mainPage"
            },
            {
                name:'Nav3',
                path:'/Navigator3',
                component: () => import('@/components/Navigator3.vue'), 	// import the main page component and pass it the name "mainPage"
            }
        ]
    },
    {
        name:'mainPage',
        path:'/main',
        component: () => import('@/components/Menu.vue'), 	// import the main page component and pass it the name "mainPage"
    },
]

const router = createRouter({
    history: createWebHistory(), // create a history history for the browser.  default is false.  otherwise use createHtml5History.  you can also
    routes
  })
  
  export default router
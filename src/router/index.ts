import { createRouter, createWebHashHistory } from 'vue-router';
const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('../views/Home.vue')

        },
        {
            path: '/doc',
            name: 'Doc',
            component: () => import('../views/Doc.vue'),
            children: [{
                path: '',
                component: () => import('../components/DocDefault.vue')
            },
            {
                path: 'switch',
                component: () => import('../components/SwitchDemo.vue')
            },
            {
                path: 'button',
                component: () => import('../components/ButtonDemo.vue')
            },
            {
                path: 'dialog',
                component: () => import('../components/DialogDemo.vue')
            },
            {
                path: 'tabs',
                component: () => import('../components/TabsDemo.vue')
            }]

        }
    ]
})

export { router };

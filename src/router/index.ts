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
                component: () => import('../components/Switch.vue')
            },
            {
                path: 'button',
                component: () => import('../components/Button.vue')
            },
            {
                path: 'dialog',
                component: () => import('../components/Dialog.vue')
            },
            {
                path: 'tabs',
                component: () => import('../components/Tabs.vue')
            }]

        }
    ]
})

export { router };

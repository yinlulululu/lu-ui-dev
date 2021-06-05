import { createRouter, createWebHashHistory } from 'vue-router';
import { h } from 'vue'
import Markdown from '../components/Markdown.vue'
const md = (string: any) => h(Markdown, { content: string, key: string })
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
                path: 'introduce',
                component: () => import('../components/Introduce.vue')
            },
            {
                path: 'fix',
                component: () => import('../components/Fix.vue')
            },
            {
                path: 'use',
                component: () => import('../components/Use.vue')
            },
            {
                path: 'switch',
                component: () => import('../components/SwitchDoc/SwitchDemo.vue')
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

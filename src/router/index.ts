import { createRouter, createWebHashHistory } from 'vue-router';

import Introduce from '../views/markdown/introduce.md'
import Fix from '../views/markdown/fix.md'
import Use from '../views/markdown/use.md'

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
                component: () => import('../components/DefaultDoc/DocDefault.vue')
            },
            {
                path: 'introduce',
                component: md(Introduce)
            },
            {
                path: 'fix',
                component: md(Fix)
            },
            {
                path: 'use',
                component: md(Use)
            },
            {
                path: 'switch',
                component: () => import('../components/SwitchDoc/index.vue')
            },
            {
                path: 'button',
                component: () => import('../components/ButtonDoc/index.vue')
            },
            {
                path: 'dialog',
                component: () => import('../components/DialogDoc/index.vue')
            },
            {
                path: 'tabs',
                component: () => import('../components/TabsDoc/index.vue')
            },
            {
                path: 'layout',
                component: () => import('../components/LayoutDoc/index.vue')
            },
            {
                path: 'radio',
                component: () => import('../components/RadioDoc/index.vue')
            },
            {
                path: 'table',
                component: () => import('../components/TableDoc/index.vue')
            }]

        }
    ]
})

export { router };

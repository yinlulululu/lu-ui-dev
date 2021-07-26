import '@/lib/lu.scss'
import "github-markdown-css";

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index';

import toastPlugin from './lib/tools/toastPlugin';


import './index.scss';

const app = createApp(App)
app.use(toastPlugin)
app.use(router)
app.mount('#app')

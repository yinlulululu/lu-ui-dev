import '@/lib/lu.scss'
import "github-markdown-css";

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index';

import luPlugin from './lib/tools/plugin';


import './index.scss';

const app = createApp(App)
app.use(luPlugin)
app.use(router)
app.mount('#app')

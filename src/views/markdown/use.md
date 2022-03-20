# <font color="#fff">使用</font>

### <font color="#ff009a">方式一：按需引用(推荐)</font>



> 如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容。也可以单独建立一个文件来引入所有需要的组件




```
import 'vue3_lu_ui/dist/lib/lu.css'
import { createApp } from 'vue'
import App from './App.vue'
import { Button: lu-button } from 'vue3_lu_ui'

const app = createApp(App)
app.use(lu-button)
app.mount('#app')
```

<br>

### <font color="#ff009a">方式二：整体引入</font>

> 注意要引入样式文件


```
import 'vue3_lu_ui/dist/lib/lu.css'
import { createApp } from 'vue'
import App from './App.vue'
import { LuUI } from 'vue3_lu_ui'

const app = createApp(App)
app.use(LuUI)
app.mount('#app')

```



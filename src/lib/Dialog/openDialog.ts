import Dialog from './Dialog.vue'
import { createApp, h } from '@vue/runtime-dom'

export const openDialog = (options: any) => {
    const { title, content, ok, cancel, bottomButton } = options
    const div = document.createElement('div')
    document.body.appendChild(div)

    const close = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                'onUpdate: visible': (newVisible: any) => {
                    if (newVisible === false) {
                        close()
                    }
                },
                title,
                bottomButton,
                ok,
                cancel,
            }, { content })
        }
    })
    app.mount(div)
}
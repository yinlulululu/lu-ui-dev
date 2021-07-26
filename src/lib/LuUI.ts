import Button from "./Button/Button.vue";
import Dialog from "./Dialog/Dialog.vue";
import Switch from "./Switch/Switch.vue";
import Tabs from "./Tab/Tabs.vue";
import Tab from "./Tab/Tab.vue";
import Radio from "./Radio/Radio.vue"
import Input from "./Input/Input.vue";
import Row from "./Grid/Row.vue";
import Col from "./Grid/Col.vue";
import Layout from "./Layout/Layout.vue";
import Content from "./Layout/Content.vue";
import Sider from "./Layout/Sider.vue";
import Header from "./Layout/Header.vue";
import Footer from "./Layout/Footer.vue";



import { ComponentOptions, } from "vue";

export default {
    install: (app: ComponentOptions) => {
        // Plugin code goes here
        app.component("lu-switch", Switch);
        app.component("lu-button", Button);
        app.component("lu-dialog", Dialog);
        app.component("lu-tab", Tab);
        app.component("lu-tabs", Tabs);
        app.component("lu-input", Input);
        app.component("lu-row", Row);
        app.component("lu-col", Col);
        app.component("lu-layout", Layout);
        app.component("lu-content", Content);
        app.component("lu-sider", Sider);
        app.component("lu-header", Header);
        app.component("lu-footer", Footer);
        app.component("lu-radio", Radio)

    },
};

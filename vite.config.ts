// @ts-nocheck
import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from "fs";
import {
    baseParse
} from "@vue/compiler-core";
import {
    vueDemoPlugin
} from './plugins/vueDemo'
import {
    md
} from './plugins/markdown'
const resolve = (dir: string) => path.join(__dirname, dir);
const path = require('path');



// https://vitejs.dev/config//
export default defineConfig({
    base: "./",
    assetsDir: "assets",
    server: {
        host: '0.0.0.0'
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [vue(), vueDemoPlugin, md()],
})
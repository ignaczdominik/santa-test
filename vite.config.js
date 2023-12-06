import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import viteProgressBar from "vite-plugin-progress";

export default defineConfig({
    build:{
        assetsInlineLimit: (9*1024*1024)
    },
    server:{
        port: 9632,
        host: true
    },
    plugins: [
        viteProgressBar()
    ],
    resolve:{
        alias:{
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url))
        }
    }
})
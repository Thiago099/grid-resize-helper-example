import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from "vite"




export default defineConfig({
    base: '/grid-resize-helper-example//', 
    resolve: {
        alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    }
})
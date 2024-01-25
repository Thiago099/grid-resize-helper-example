import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from "vite"




export default defineConfig({
    base: '/voxel-modeler-2/', 
    resolve: {
        alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    }
})
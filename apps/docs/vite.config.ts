import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nesting'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ui/',
  plugins: [vue(), Unocss(), vueJsx(), DefineOptions()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ui': fileURLToPath(new URL('../../packages/ui/src', import.meta.url)),
    },
  },
  css: {
    // postcss: {
    //   plugins: [
    //     postcssImport,
    //     postcssNesting,
    //   ],
    // },
  },
  server: {
    port: 3001,
  },
})

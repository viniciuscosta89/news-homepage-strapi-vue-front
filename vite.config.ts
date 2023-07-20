import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import checker from 'vite-plugin-checker'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    vueJsx(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
      vueTsc: true
    }),
    AutoImport({
      dts: true,
      imports: [
        VueRouterAutoImports,
        {
          'vue-router/auto': [
            'RouteLocationNormalized',
            'RouteLocationNormalizedLoaded',
            'RouteLocation',
            'RouteLocationRaw',
            'RouteParams',
            'RouteParamsRaw',
            'useLink',
            'RouterLink'
          ]
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

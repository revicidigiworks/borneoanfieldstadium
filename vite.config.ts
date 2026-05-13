import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Borneo Anfield Stadium',
        short_name: 'Borneo Anfield Stadium',
        description: 'Football Stadium Platform',

        theme_color: '#fff',
        background_color: '#fff',

        display: 'standalone',
        orientation: 'portrait',

        start_url: '/borneoanfieldstadium/',

        icons: [
          {
            src: '/borneoanfieldstadium/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },

          {
            src: '/borneoanfieldstadium/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],

  base: '/borneoanfieldstadium/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
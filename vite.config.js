import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';
import svgSpritePlugin from 'vite-plugin-svg-sprite'

export default defineConfig({
      plugins: [react(), svgr(), svgSpritePlugin()],
      resolve: {
        alias: {
          src: '/src',
          components: '/src/components',
          pages: '/src/pages',
          assets: '/src/assets'
        },
      },
      base: '/react_vite/',
    });
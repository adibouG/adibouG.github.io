import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["./src/assets/**/*.jpg", 
  "./src/assets/**/*.png", 
  "./src/assets/**/*.jpeg",
  "./src/assets/**/*.json",
  "./src/assets/**/*.glb",
  ],
  base: '/',
  build: {
    outDir: 'dist',
    commonjsOptions: {
        include: [/linked-dep/, /node_modules/],
      },
  },
  optimizeDeps: {
    include : ['linked-dep'],
  },
  
}
)

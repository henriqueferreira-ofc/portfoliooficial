// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'
import { copyFileSync, existsSync } from 'fs'

const copyIndexTo404Plugin = (outDir: string) => ({
  name: 'copy-index-to-404',
  apply: 'build' as const,
  closeBundle() {
    const indexPath = path.resolve(__dirname, outDir, 'index.html')
    const fallbackPath = path.resolve(__dirname, outDir, '404.html')

    if (existsSync(indexPath)) {
      copyFileSync(indexPath, fallbackPath)
    }
  },
})

export default defineConfig(({ mode }) => ({
  base: mode === 'gh-pages' ? '/portfoliooficial/' : '/',
  build: {
    outDir: 'docs', // GitHub Pages vai servir a partir desta pasta
  },
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    ...(mode === 'development' ? [componentTagger()] : []),
    copyIndexTo404Plugin('docs'),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))

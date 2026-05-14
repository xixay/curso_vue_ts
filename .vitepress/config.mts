import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Curso Vue + TypeScript",
  description: "Documentación y recursos del curso de Vue con TypeScript",
  base: '/curso_vue_ts/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
    
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Evaluaciones', link: '/evaluaciones' },
      { text: 'Repositorio', link: 'https://github.com/xixay/curso_vue_ts' }
    ],

    sidebar: [
      {
        text: 'Contenido',
        items: [
          { text: 'Inicio', link: '/' },
          { text: 'Evaluaciones', link: '/evaluaciones' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xixay/curso_vue_ts' }
    ]
  }
})

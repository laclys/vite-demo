import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'

const publicUrl = {
  test: `//balabala/projectName/last/dist/`,
  uat: `//s1.balabala/yx/projectName/last/dist/`,
  prod: `//s1.balabala/yx/projectName/last/dist/`
}

export default ({ command, mode }) => {
  console.log('mode', mode)
  console.log('command', command)
  return defineConfig({
    base: command === 'build' ? publicUrl[mode] : '/',
    server: {
      port: 7788,
      proxy: {
        '/wapi': {
          target: 'http://ops.balabala.com',
          changeOrigin: true,
          secure: false
        }
      },
      cors: true
    },
    plugins: [
      vue(), 
      vitePluginImp({
        libList: [
          {
            libName: 'ant-design-vue',
            style(name) {
              return `ant-design-vue/es/${name}/style/index.css`
            }
          },
        ]
      })
    ]
  })
}

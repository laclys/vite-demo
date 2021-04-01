import { createApp } from 'vue'
import { Button } from 'ant-design-vue'
import * as G2 from '@antv/g2'
import * as echarts from 'echarts'

import App from './App.vue'

const app = createApp(App)

app.use(Button)
app.config.globalProperties.$G2 = G2
app.config.globalProperties.$echarts = echarts
app.mount('#app')

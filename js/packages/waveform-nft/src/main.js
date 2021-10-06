import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Select, Slider, Switch, Modal } from 'ant-design-vue'

import './assets/styles/tailwind.css'
import './assets/styles/app.scss'

const app = createApp(App)

app
  .use(Button)
  .use(Select)
  .use(Slider)
  .use(Switch)
  .use(Modal)
  .use(router)
  .mount('#app')

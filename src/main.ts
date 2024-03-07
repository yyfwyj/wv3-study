import { createApp } from 'vue'

// 创建App实例
import App from './App.vue'
const app = createApp(App);

// 引入 router
import router from '@/router/index.ts';
// 挂载router
app.use(router);
// 注册全局router方法
app.config.globalProperties.$router = router;

app.mount('#app');

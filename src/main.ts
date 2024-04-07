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

// 引入CSS变量 实现换肤功能 引入之后才可以使其他文件正常访问CSS变量
// 使用文件（'@/views/CSSTheme/StaticChange/VariableChange/index.vue'）
import '@/views/CSSTheme/StaticChange/VariableChange/theme/basics.css'

app.mount('#app');

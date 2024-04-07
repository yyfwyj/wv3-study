/**
 * 1. 引入相关函数，createRouter以及createWebHashHistory函数
 * @function createRouter 创建路由函数
 * @function createWebHashHistory hash路由模式函数
 * @type {RouteRecordRaw} 路由数组类型
 */
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  Router,
} from 'vue-router'

/**
 * 2. 引入相关的页面路径 如果没有该文件，请自行创建
 * 这一点非强制，这只是为了展示，如果觉得麻烦可以直接使用页面路径
 */

/**
 * 3. 创建一个路由数组，创建路由对象,放入页面相关信息
 * @param {Array} routes 路由数组
 */
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('@/views/Home/index.vue'),
      demo: () => import('@/views/Demo/index.vue'),
    },
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/Main/index.vue'),
  },
  {
    path: '/CSSTheme',
    name: 'CSSTheme',
    children: [
      {
        path: '/CSSTheme/LinkFileChange',
        name: 'LinkFileChange',
        component: () =>
          import('@/views/CSSTheme/StaticChange/LinkFileChange/index.vue'),
        meta: {
          render: true,
          viewName: 'link标签换肤方案'
        }
      },
      {
        path: '/CSSTheme/VariableChange',
        name: 'VariableChange',
        component: () => import('@/views/CSSTheme/StaticChange/VariableChange/index.vue'),
        meta: {
          render: true,
          viewName: 'Css变量换肤方案'
        }
      }
    ],
    meta: {
      render: true,
      viewName: '样式切换'
    }
  },
  {
    path: '/CSSLayout',
    name: 'CSSLayout',
    children: [
      {
        path: '/CSSLayout/LazyLoading',
        name: 'LazyLoading',
        component: () =>
          import('@/views/CSSLayout/LazyLoading/index.vue')
      }
    ],
    meta: {
      render: true,
      viewName: '瀑布流'
    }
  }
]

/**
 * 4. 通过createRouter函数创建路由，并且选择路由模式为 hash模式，最后传入 routes路由数组
 */
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
})

/**
 * 5. 导出路由对象 router 到【vue.config.ts】文件中进行挂载
 */
export default router
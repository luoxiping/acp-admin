/**
 * meta 附加参数说明（除原生参数外）
 * meta{
 *   title: 页面标题；值：i18n表达式。显示位置：1、浏览器网页title；2、面包屑名称（该路由没有对应的菜单时显示）；3、标签导航（该路由没有对应的菜单时显示）
 *   icon: 图标；值：图标样式。显示位置：面包屑名称前（该路由没有对应的菜单时显示）
 *   notCache: 主界面区域是否对该路由对应的组件进行缓存（缓存的组件name为该路由的name）；值：true | false | 不设置，默认进行缓存
 *   requireAuth: 访问该路由是否需要登录权限；值：true | false | 不设置，默认不进行登录验证
 *   withInput: 该路由对应的组件界面是否包含用户输入项；值：true | false| 不设置，默认为false；该值为true且notCache=true时，关闭标签前会进行询问，用户输入的数据不会进行缓存
 * }
 */
export default [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/components/test/test.vue'),
    meta: {
      title: 'pageTitle.test'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/pages/Login.vue'),
    meta: {
      title: 'pageTitle.login'
    }
  },
  {
    path: '/404',
    name: 'E404',
    component: () => import('@/components/pages/E404.vue'),
    meta: {
      title: 'pageTitle.E404'
    }
  },
  {
    path: '/500',
    name: 'E500',
    component: () => import('@/components/pages/E500.vue'),
    meta: {
      title: 'pageTitle.E500'
    }
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/layout/Home.vue'),
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: () => import('@/components/views/Index.vue'),
      meta: {
        title: 'pageTitle.home',
        notCache: true,
        requireAuth: true
      }
    }, {
      path: '/demo4',
      name: 'demo4',
      component: () => import('@/components/views/demo/Demo4.vue'),
      meta: {
        notCache: true,
        requireAuth: true,
        withInput: true
      }
    }, {
      path: '/personalInformation',
      name: 'personalInformation',
      component: () => import('@/components/views/PersonalInformation.vue'),
      meta: {
        title: 'pageTitle.personalInformation',
        icon: 'md-person',
        requireAuth: true,
        withInput: true
      }
    }]
  },
  {
    path: '*',
    name: '404',
    redirect: '/404'
  }
]

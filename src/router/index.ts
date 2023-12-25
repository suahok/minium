import { createRouter, createWebHistory } from 'vue-router'
import { permission } from './permission'

function _import(pagename: string, dir = 'views') {
  return () => import(`../${dir}/${pagename}.vue`)
}

const { VITE_BASE_ROUTE } = import.meta.env
const router = createRouter({
  history: createWebHistory(VITE_BASE_ROUTE),
  routes: [
    { path: '/404', component: _import('NotFound') },
    { path: '/', redirect: '/dashboard' },
    { path: '/', name: 'layout', component: _import('Layout', 'layout') }
  ]
})

let hasNewRoute = true

router.beforeEach(async (to, _from, next) => {
  if (!hasNewRoute) return next()
  try {
    const asyncRoutes = await permission()
    if (!asyncRoutes?.length) return next()
    for (const route of asyncRoutes) {
      if (router.hasRoute(route.name!)) {
        router.removeRoute(route.name!)
      }
      router.addRoute('layout', route)
    }
    router.addRoute({ path: '/:pathMatch(.*)*', redirect: '/404' })
    hasNewRoute = false
    return next({ ...to, replace: true })
  } catch (error) {
    console.error(error)
    return next()
  }
})

export default router

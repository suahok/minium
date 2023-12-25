import { RouteRecordRaw } from 'vue-router'
import { useMenus } from '@/stores'
import { ItemType } from 'ant-design-vue'

function _import(pagename: string, dir = 'views') {
  return () => import(`../${dir}/${pagename}.vue`)
}

function filterRoutes(asyncRoutes: any[]) {
  return asyncRoutes
    .map<RouteRecordRaw>(route => {
      if (route.type === 'group') {
        route.children = filterRoutes(route.children)
      }
      route.component = _import(route.name)
      return route
    })
    .filter((route: any) => route.type !== 'link')
}

export function filterMenus(routes: any[]) {
  return routes.map<ItemType>((route: any) => {
    const { name, label, icon, type, path } = route
    const menu: any = {}
    if (route.children) {
      menu.children = filterMenus(route.children)
    }
    const curRoute = { key: name, label, title: label, icon, type, path }
    return Object.assign({}, menu, curRoute)
  })
}

export async function permission() {
  const menuStore = useMenus()
  try {
    await menuStore.getAsyncRoutes()
    return filterRoutes(menuStore.menus)
  } catch (error) {
    console.error(error)
  }
}

import { Random } from 'mockjs'

type State = {
  id: string
  name: string
  capital: number
  foundTime: string
  corp: string
  region: string
  address: string
  introduction: string
}

const total = Random.natural(10, 50)

function dataRangeGenerator(n: number) {
  const items: State[] = []
  for (let i = 0; i < n; i++) {
    const item: State = {
      id: Random.guid(),
      name: `${Random.string('upper', 3)}科技${Random.string('upper', 2)}公司`,
      capital: Random.natural(100, 10_000),
      foundTime: Random.date(),
      corp: Random.cname(),
      region: Random.region(),
      address: Random.city(),
      introduction: Random.cparagraph(2, 5)
    }
    items.push(item)
  }
  return items
}
const source = dataRangeGenerator(total)

function getRows(currentPage: number, pageSize: number) {
  const offset = (currentPage - 1) * pageSize
  const result = source.slice(offset, offset + pageSize)
  return result
}

export default [
  {
    url: '/api/menus',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: [
          {
            id: '@guid',
            type: 'view',
            path: 'dashboard',
            name: 'Dashboard',
            component: 'Dashboard',
            label: 'Dashboard',
            icon: 'oi:dashboard'
          },
          {
            id: '@guid',
            type: 'view',
            path: 'statistic',
            name: 'Statistic',
            component: 'Statistic',
            label: 'Statistic',
            icon: 'iconoir:svg-format'
          },
          {
            id: '@guid',
            type: 'view',
            path: 'illuminant',
            name: 'Illuminant',
            component: 'Illuminant',
            label: 'Illuminant',
            icon: 'mdi:form-outline'
          },
          {
            id: '@guid',
            type: 'view',
            path: 'audiovisual',
            name: 'Audiovisual',
            component: 'Audiovisual',
            label: 'Audiovisual',
            icon: 'iconoir:3d-select-solid'
          },
          {
            id: '@guid',
            type: 'link',
            path: 'https://cn.vitejs.dev',
            name: 'Vite',
            component: 'Vite',
            label: Random.name(),
            icon: 'vscode-icons:file-type-vite'
          },
          {
            id: '@guid',
            type: 'link',
            path: 'https://react.dev',
            name: 'React',
            component: 'React',
            label: Random.name(),
            icon: 'logos:react'
          }
        ]
      }
    }
  },
  {
    url: '/api/pages',
    method: 'get',
    response: ({ query }: any) => {
      const pageSize = parseInt(query.pageSize)
      const pages = Math.floor(total / pageSize)
      const currentPage = parseInt(query.currentPage)
      const rows = getRows(currentPage, pageSize)
      return {
        code: 0,
        message: 'ok',
        data: { total, pages, currentPage, pageSize, rows }
      }
    }
  }
]

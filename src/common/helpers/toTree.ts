/**
 * 列表 TO 树形
 * @param source
 * @returns
 */
export function toTree(source: any) {
  const map: any = {}
  for (const item of source) {
    map[item.id] = item
    Reflect.deleteProperty(item, 'children')
  }
  const result = []
  for (const item of source) {
    const parent = map[item.pid]
    if (parent === undefined) {
      result.push(item)
    } else {
      void (parent.children || (parent.children = [])).push(item)
    }
  }
  return result
}

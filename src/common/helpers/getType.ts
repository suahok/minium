/**
 * 返回数据类型
 * @param origin
 * @returns
 */
export function getType(origin: any) {
  return Object.prototype.toString
    .call(origin)
    .replace(/\[object (.*)\]/g, '$1')
    .toLowerCase()
}

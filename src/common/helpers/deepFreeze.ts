import { deepClone } from './deepClone'

export function deepFreeze(origin: any) {
  const target = deepClone(origin)
  return tailDeepFreeze(target)
}

function tailDeepFreeze(origin: any) {
  const entries = Reflect.ownKeys(origin).map(key => {
    if (typeof origin[key] !== 'object') return [key, origin[key]]
    return [key, tailDeepFreeze(origin[key])]
  })
  const property: object = Object.fromEntries(entries)
  return Object.freeze(property)
}

import { getType } from './getType'

/**
 * 深拷贝
 * @param {any} source
 * @param {Map} hash
 * @returns
 */
export function deepClone(source: any, hash = new Map()) {
  if (source === null || getType(source) !== 'object') return source
  if (getType(source) === 'date') return new Date(source)
  if (getType(source) === 'regexp') return new RegExp(source)
  if (hash.has(source)) return hash.get(source)
  const target = new source.constructor()
  hash.set(source, target)
  for (const key of Object.keys(source)) {
    target[key] = deepClone(source[key], hash)
  }
  return target
}

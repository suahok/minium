/**
 * 防抖
 * @function
 * @param {function} fn
 * @param {number} delay
 * @param {boolean} immediate
 * @returns void
 */
export function debounce(fn: Function, delay: number = 300, immediate: boolean = false) {
  let timer: any
  return function () {
    const context = this
    const args = [...arguments]
    if (timer) clearTimeout(timer)
    if (immediate) {
      const callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, delay)
      if (callNow) {
        fn.apply(context, args)
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, delay)
    }
  }
}

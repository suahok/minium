/**
 * 节流
 * @function
 * @param {function} fn
 * @param {number} delay
 * @returns void
 */
export function throttle(fn: Function, delay: number = 300) {
  let timer: any
  return function () {
    const context = this
    const args = [...arguments]
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
        fn.apply(context, args)
      }, delay)
    }
  }
}

export function wrapPromise<T = any>(promise: Promise<T>) {
  let status = "pending"
  let result: T

  const suspender = promise
    .then(data => {
      status = "success"
      result = data
    })
    .catch(err => {
      status = "error"
      result = err
    })

  return {
    read() {
      if (status === "pending") {
        throw suspender
      } else if (status === "error") {
        throw result
      } else if (status === "success") {
        return result
      }
    }
  }
}

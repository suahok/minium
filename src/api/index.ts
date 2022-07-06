import { fetchCommit } from "./commit"

export function fetchApiSource() {
  const commitPromise = fetchCommit()

  return {
    commit: wrapPromise(commitPromise)
  }
}

function wrapPromise<T = any>(promise: Promise<T>) {
  let status = "pending"
  let result: T

  const suspender = promise
    .then(data => {
      status = "success"
      result = data
    })
    .catch(error => {
      status = "error"
      result = error
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

enum STATUS {
  PENDING = "pending",
  SUCCESS = "success",
  ERROR = "error"
}

type DataPops<T = any> = {
  data: T
  reason: any
}

export function wrapPromise<T = any>(promise: Promise<T>) {
  let status = STATUS.PENDING
  const result: DataPops = {
    data: null,
    reason: null
  }

  const suspender = promise
    .then(data => {
      status = STATUS.SUCCESS
      result.data = data
    })
    .catch(err => {
      status = STATUS.ERROR
      result.reason = err
    })

  return {
    read() {
      if (status === STATUS.PENDING) {
        throw suspender
      } else if (status === STATUS.ERROR) {
        throw result.reason
      } else if (status === STATUS.SUCCESS) {
        return result.data
      }
    }
  }
}

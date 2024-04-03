console.log('worker')

self.addEventListener('message', ({ data }) => {
  console.log(data)
  self.postMessage('Hi!')
})

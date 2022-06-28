export function fetchCommits() {
  return new Promise((resolve, reject) => {
    fetch("https://api.github.com/repos/suahok/minium/commits")
      .then(res => {
        if (res.ok) {
          resolve(res.json())
        } else {
          reject(res.status)
        }
      })
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}

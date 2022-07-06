export function fetchCommit<T = any>() {
  return new Promise<T>((resolve, reject) => {
    fetch("https://api.github.com/repos/suahok/minium/commits")
      .then(res => res.ok && res.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

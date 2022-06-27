import { wrapPromise } from "./helper"
import { fetchCommits } from "./commits"

export function fetchApiData() {
  let commitsPromise = fetchCommits()
  return {
    commits: wrapPromise(commitsPromise)
  }
}

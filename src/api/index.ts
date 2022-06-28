import { wrapPromise } from "./helper"
import { fetchCommits } from "./commits"

export function fetchApiData() {
  const commitsPromise = fetchCommits()

  return {
    commits: wrapPromise(commitsPromise)
  }
}

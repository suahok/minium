import { wrapPromise } from "./helper"
import { fetchCommits } from "./commits"

export function fetchApiResource() {
  const commitsPromise = fetchCommits()

  return {
    commits: wrapPromise(commitsPromise)
  }
}

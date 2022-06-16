import { type State } from "./index"

export const counterSelector = (state: State) => state.counter
export const todosSelector = (state: State) => state.todos
export const authSelector = (state: State) => state.auth

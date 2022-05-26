import { configureStore } from "@reduxjs/toolkit"
import { counter } from "./counter"

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export const store = configureStore({
  reducer: { counter }
})

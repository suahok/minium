import { configureStore } from "@reduxjs/toolkit"
import { useDispatch as baseUseDispatch } from "react-redux"
import { auth } from "./auth"
import { counter } from "./counter"
import { todos } from "./todos"

export const store = configureStore({
  reducer: { auth, counter, todos }
})

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export const useDispatch = () => baseUseDispatch<Dispatch>()

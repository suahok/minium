import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = 0

export const increment = createAction("INCREMENT")
export const decrement = createAction("DECREMENT")

export const counter = createReducer(initialState, {
  [`${increment}`]: state => state + 1,
  [`${decrement}`]: state => state - 1
})

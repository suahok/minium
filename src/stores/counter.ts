import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type State = { value: number; loading: boolean }

const initialState: State = { value: 0, loading: false }

export const incrementAsyncCount = createAsyncThunk("IncrementAsyncCount", async () => {
  return await new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      return resolve(1)
    }, 2000)
  })
})

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    }
  },
  extraReducers(builder) {
    builder
      .addCase(incrementAsyncCount.pending, (state, action) => {
        state.loading = true
      })
      .addCase(incrementAsyncCount.fulfilled, (state, action) => {
        state.value += action.payload
        state.loading = false
      })
  }
})

export const { increment } = counterSlice.actions
export const counter = counterSlice.reducer

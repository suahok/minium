import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type State = { value: number }

const initialState: State = { value: 0 }

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
        console.log("Loading...")
        console.log(action)
      })
      .addCase(incrementAsyncCount.fulfilled, (state, action) => {
        state.value += action.payload
        console.log("Done!")
        console.log(action)
      })
  }
})

export const { increment } = counterSlice.actions
export const counter = counterSlice.reducer

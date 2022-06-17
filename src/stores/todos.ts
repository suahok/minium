import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

type Todo = { userId: number; id: number; title: string; completed: boolean }
type State = {
  value: Todo[]
  loading: boolean
}

const initialState: State = { value: [], loading: false }

function randomUserId(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const fetchTodos = createAsyncThunk("FetchTodos", async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${randomUserId(1, 10)}`)
    if (res.ok) {
      return await res.json()
    }
    console.error(res.statusText)
  } catch (error) {
    console.error(error)
  }
})

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.value = action.payload
        state.loading = false
      })
  }
})

export const todos = todosSlice.reducer

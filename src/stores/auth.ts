import { storage } from "@/utils/storage"
import { createSlice } from "@reduxjs/toolkit"

type State = { isLogined: boolean }

const initialState: State = { isLogined: storage.get("isLogined") }

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLogined = true
      storage.set("isLogined", state.isLogined)
    },
    logout(state) {
      state.isLogined = false
      storage.clear()
    }
  }
})

export const { login, logout } = authSlice.actions
export const auth = authSlice.reducer

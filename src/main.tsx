import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

import { store } from "./stores"
import App from "./App"

import "dayjs/locale/zh-cn"

const root = createRoot(document.getElementById("root")!)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

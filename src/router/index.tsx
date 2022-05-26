import React from "react"
import { useRoutes } from "react-router-dom"

const Home = React.lazy(() => import("@/views/Home"))
const History = React.lazy(() => import("@/views/History"))

export function GetRoutes() {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/history", element: <History /> }
  ])
}

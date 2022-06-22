import { lazy } from "react"
import { useRoutes } from "react-router-dom"
import RequiredAuth from "./RequiredAuth"

const Home = lazy(() => import("@/views/Home"))
const Login = lazy(() => import("@/views/Login"))
const About = lazy(() => import("@/views/About"))
const Main = lazy(() => import("@/views/Main"))
const MainUsers = lazy(() => import("@/views/MainUsers"))
const MainBooks = lazy(() => import("@/views/MainBooks"))
const MainUsersIndex = lazy(() => import("@/views/MainUsersIndex"))
const TheUser = lazy(() => import("@/views/TheUser"))
const TheBook = lazy(() => import("@/views/TheBook"))
const Outlook = lazy(() => import("@/views/Outlook"))
const NotFound = lazy(() => import("@/views/NotFound"))

export function GetRoutes() {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/about", element: <About /> },
    {
      path: "/main",
      element: (
        <RequiredAuth>
          <Main />
        </RequiredAuth>
      ),
      children: [
        {
          path: "user",
          element: <MainUsers />,
          children: [
            { index: true, element: <MainUsersIndex /> },
            { path: "Leanne-Graham", element: <TheUser name="Leanne Graham" /> },
            { path: "Ervin-Howell", element: <TheUser name="Ervin Howell" /> },
            { path: "*", element: <TheUser /> }
          ]
        },
        {
          path: "book",
          element: <MainBooks />,
          children: [
            { index: true, element: <h2>Book Index</h2> },
            { path: ":id", element: <TheBook /> }
          ]
        }
      ]
    },
    { path: "/outlook", element: <Outlook /> },
    { path: "*", element: <NotFound /> }
  ])
}

import { authSelector } from "@/stores/selectors"
import { Fragment, ReactNode } from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

type Props = { children: ReactNode }

export default function RequiredAuth({ children }: Props) {
  const { isLogined } = useSelector(authSelector)
  const { pathname } = useLocation()
  const redirect = btoa(encodeURIComponent(pathname))

  return <Fragment>{isLogined ? children : <Navigate to={`/login?redirect=${redirect}`} replace />}</Fragment>
}

import { useDispatch } from "@/stores"
import { login } from "@/stores/auth"
import { Button } from "@mantine/core"
import { useLocation, useNavigate } from "react-router-dom"

export default function Landed() {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const { search } = useLocation()

  const onLogin = () => {
    dispatch(login())
    const redirect = search ? decodeURIComponent(atob(search.split("=")[1])) : "/"
    navigator(redirect, { replace: true })
  }

  return <Button onClick={onLogin}>Login</Button>
}

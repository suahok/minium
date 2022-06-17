import { useDispatch } from "@/stores"
import { logout } from "@/stores/auth"
import { Button, Group, Text } from "@mantine/core"
import { Outlet } from "react-router-dom"

export default function MainBook() {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <Group direction="column">
      <Text>Main Book</Text>
      <Button color="orange" onClick={onLogout}>
        Logout
      </Button>

      <Outlet />
    </Group>
  )
}

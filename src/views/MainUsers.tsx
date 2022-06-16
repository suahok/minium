import { Group, Text } from "@mantine/core"
import { Outlet } from "react-router-dom"

export default function MainUser() {
  return (
    <Group direction="column">
      <Text>Main User</Text>

      <Outlet />
    </Group>
  )
}

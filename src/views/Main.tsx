import { Link } from "@chakra-ui/react"
import { Group, Text } from "@mantine/core"
import { Link as ReactLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

export default function Main() {
  return (
    <Group direction="column">
      <Text>Main Page</Text>

      <Group>
        <Link as={ReactLink} color="cyan.600" to="/main/user">
          Users
        </Link>
        <Link as={ReactLink} color="cyan.600" to="/main/book">
          Books
        </Link>
      </Group>

      <Outlet />
    </Group>
  )
}

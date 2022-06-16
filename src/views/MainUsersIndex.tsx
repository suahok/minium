import { Link } from "@chakra-ui/react"
import { Group, Text } from "@mantine/core"
import { Link as ReactLink } from "react-router-dom"

export default function MainUserIndex() {
  return (
    <Group direction="column">
      <Text>Users Index</Text>

      <Group>
        <Link as={ReactLink} color="cyan.600" to="/main/user/Leanne-Graham">
          Leanne Graham
        </Link>
        <Link as={ReactLink} color="cyan.600" to="/main/user/Ervin-Howell">
          Ervin Howell
        </Link>
      </Group>
    </Group>
  )
}

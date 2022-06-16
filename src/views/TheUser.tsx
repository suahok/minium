import { Button, Group, Text } from "@mantine/core"
import { useLocation, useNavigate } from "react-router-dom"

type Props = { name?: string }

export default function TheUser({ name }: Props) {
  const navigator = useNavigate()
  const { state } = useLocation()

  function goToUser(name: string) {
    navigator(`/main/user/${name}`, { replace: true, state: { user: name } })
  }

  const username = name || (state as { user: string })?.user

  return (
    <Group direction="column">
      <Text>{username}</Text>

      <Group>
        <Button color="cyan" onClick={() => void goToUser("Leanne Graham")}>
          Leanne Graham
        </Button>
        <Button color="cyan" onClick={() => void goToUser("Ervin Howell")}>
          Ervin Howell
        </Button>
        <Button color="orange" onClick={() => void navigator(-1)}>
          Back
        </Button>
      </Group>
    </Group>
  )
}

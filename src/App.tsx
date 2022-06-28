import { Button, Container, MantineProvider } from "@mantine/core"
import { fetchApiResource } from "./api"

const resource = fetchApiResource()

export default function App() {
  const data = resource.commits.read()

  return (
    <MantineProvider>
      <Container py={16}>
        <Button color="cyan">onTap</Button>
      </Container>
    </MantineProvider>
  )
}

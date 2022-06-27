import { Button, Container, MantineProvider } from "@mantine/core"
import { fetchApiData } from "./api"

const resource = fetchApiData()

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

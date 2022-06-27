import { Button, Container, MantineProvider } from "@mantine/core"

export default function App() {
  return (
    <MantineProvider>
      <Container>
        <Button color="cyan">onTap</Button>
      </Container>
    </MantineProvider>
  )
}

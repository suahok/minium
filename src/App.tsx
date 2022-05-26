import { Button, Container, Group, Loader, MantineProvider } from "@mantine/core"
import { Home2 } from "tabler-icons-react"
import { Suspense } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import { GetRoutes } from "./router"
import { Box, ChakraProvider } from "@chakra-ui/react"

export default function App() {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Container>
          <Group spacing="xs">
            <Button variant="subtle" color="teal" leftIcon={<Home2 size={16} />} component={Link} to="/">
              Home
            </Button>
            <Button variant="subtle" color="indigo" component={Link} to="/history">
              History
            </Button>
          </Group>
          <ChakraProvider>
            <Box mt={5}>
              <Suspense fallback={<Loader />}>
                <GetRoutes />
              </Suspense>
            </Box>
          </ChakraProvider>
        </Container>
      </MantineProvider>
    </BrowserRouter>
  )
}

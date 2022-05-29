import { Button, Container, Group, Loader, MantineProvider } from "@mantine/core"
import { Box, ChakraProvider, Icon } from "@chakra-ui/react"
import { Suspense } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { GetRoutes } from "./router"

export default function App() {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Container>
          <Group spacing="xs">
            <Button variant="subtle" color="teal" leftIcon={<Icon as={FaHome} />} component={Link} to="/">
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

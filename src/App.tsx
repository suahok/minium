import { Container, Group, Loader, MantineProvider } from "@mantine/core"
import { Box, ChakraProvider, Link } from "@chakra-ui/react"
import { Suspense } from "react"
import { Link as ReactLink, useNavigate } from "react-router-dom"
import { GetRoutes } from "./router"

export default function App() {
  const navigtor = useNavigate()

  window.addEventListener("storage", evt => {
    if (!evt.key || evt.key === "isLoggedIn") {
      navigtor(0)
    }
  })

  return (
    <MantineProvider>
      <ChakraProvider>
        <Container py={18}>
          <Group>
            <Link as={ReactLink} color="cyan.600" to="/">
              Home
            </Link>
            <Link as={ReactLink} color="cyan.600" to="/about">
              About
            </Link>
            <Link as={ReactLink} color="cyan.600" to="/main">
              Mian
            </Link>
          </Group>
          <Box mt={5}>
            <Suspense fallback={<Loader />}>
              <GetRoutes />
            </Suspense>
          </Box>
        </Container>
      </ChakraProvider>
    </MantineProvider>
  )
}

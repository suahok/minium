import { Container, Group, Loader, MantineProvider } from "@mantine/core"
import { Box, ChakraProvider, Link } from "@chakra-ui/react"
import { Suspense } from "react"
import { Link as ReactLink, useNavigate } from "react-router-dom"
import { GetRoutes } from "./router"
import { createPortal } from "react-dom"

function PortalLader() {
  return createPortal(<Loader />, document.getElementById("portal-loader") as HTMLElement)
}

export default function App() {
  const navigtor = useNavigate()

  window.addEventListener("storage", evt => {
    if (!evt.key || evt.key === "isLogined") {
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
            <Link as={ReactLink} color="cyan.600" to="/outlook">
              Outlook
            </Link>
          </Group>
          <Box mt={5}>
            <Suspense fallback={<PortalLader />}>
              <GetRoutes />
            </Suspense>
          </Box>
        </Container>
      </ChakraProvider>
    </MantineProvider>
  )
}

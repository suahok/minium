import { Box, Button, Container, Group, MantineProvider, Transition } from "@mantine/core"
import { useState } from "react"
import { FaHeart } from "react-icons/fa"

export default function App() {
  const [opened, updateOnpened] = useState(false)

  return (
    <MantineProvider>
      <Container py={16}>
        <Group direction="column">
          <Button variant="light" color="cyan" onClick={() => updateOnpened(!opened)}>
            Opened
          </Button>
          <Transition
            mounted={opened}
            transition="rotate-right"
            duration={300}
            timingFunction="cubic-bezier(.68,-0.41,.54,1.36)"
          >
            {styles => (
              <Box style={styles}>
                <FaHeart size={120} />
              </Box>
            )}
          </Transition>
        </Group>
      </Container>
    </MantineProvider>
  )
}

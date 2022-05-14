import { useState } from "react"
import { DatePicker } from "@mantine/dates"
import { RichTextEditor } from "@mantine/rte"
import { ActionIcon, Box, ColorScheme, MantineProvider, Space } from "@mantine/core"
import { Sun, MoonStars } from "tabler-icons-react"
import styled from "styled-components"

const initialValue = `
  <p>Your initial <b>html value</b> or an empty string to init editor without value</p>
  <img src="https://picsum.photos/1920/1080?random=2" alt="Lorem Picsum" />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eligendi maxime, laudantium ipsam quibusdam vitae necessitatibus odit tenetur odio ullam vero mollitia. Sapiente provident ullam tempora repellendus nobis iure minus?</p>
`

function RichDemo() {
  const [value, setValue] = useState(initialValue)
  return <RichTextEditor value={value} onChange={setValue} />
}

const BoxStyled = styled(Box)`
  margin: 20px;
`

export default function App() {
  const [colorScheme, toggleColorScheme] = useState<ColorScheme>("light")
  const dark = colorScheme === "dark" ? "light" : "dark"

  return (
    <MantineProvider theme={{ colorScheme }}>
      <BoxStyled>
        <ActionIcon
          variant="outline"
          color={dark === "light" ? "indigo" : "blue"}
          onClick={() => void toggleColorScheme(dark)}
          title="Toggle color scheme"
        >
          {dark === "light" ? <Sun size={18} /> : <MoonStars size={18} />}
        </ActionIcon>
        <Space h="sm" />
        <DatePicker locale="zh-cn" placeholder="Pick date" label="Event Date" />
        <Space h="sm" />
        <RichDemo />
      </BoxStyled>
    </MantineProvider>
  )
}

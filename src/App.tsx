import { useState } from "react"
import { DatePicker } from "@mantine/dates"
import { RichTextEditor } from "@mantine/rte"
import {
  ActionIcon,
  ColorScheme,
  MantineProvider,
  MediaQuery,
  ScrollArea,
  Space,
  Text,
  TypographyStylesProvider,
  useMantineTheme
} from "@mantine/core"
import { Sun, MoonStars } from "tabler-icons-react"

const initialValue = `
  <p>Your initial <b>html value</b> or an empty string to init editor without value</p>
  <img src="https://picsum.photos/1920/1080?random=2" alt="Lorem Picsum" />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eligendi maxime, laudantium ipsam quibusdam vitae necessitatibus odit tenetur odio ullam vero mollitia. Sapiente provident ullam tempora repellendus nobis iure minus?</p>
`

function RichDemo() {
  const [value, setValue] = useState(initialValue)
  return <RichTextEditor value={value} onChange={setValue} />
}

export default function App() {
  const theme = useMantineTheme()
  const [colorScheme, toggleColorScheme] = useState<ColorScheme>(theme.colorScheme)
  const dark = colorScheme === "dark" ? "light" : "dark"

  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <ScrollArea
        scrollHideDelay={500}
        scrollbarSize={10}
        type="hover"
        style={{ height: "100vh", padding: "20px", boxSizing: "border-box" }}
      >
        <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
          <ActionIcon
            variant="outline"
            color={dark === "light" ? "indigo" : "blue"}
            onClick={() => void toggleColorScheme(dark)}
            title="Toggle color scheme"
          >
            {dark === "light" ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </MediaQuery>
        <Space h="sm" />
        <DatePicker locale="zh-cn" placeholder="Pick date" label="Event Date" />
        <Space h="sm" />
        <RichDemo />
        <Text>
          <TypographyStylesProvider>
            <h3>Line clamp with TypographyStylesProvider</h3>
            <p>
              Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to
              the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like
              structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw
              when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like
              appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through
              the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and
              each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade
              feet. The tip of its long, tapering tail burns with a sizable flame.
            </p>
            <p>
              As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin
              turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and
              back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow
              and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two
              more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided
              into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega
              Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It
              is said that its new power turns it black and creates more intense flames.
            </p>
          </TypographyStylesProvider>
        </Text>
      </ScrollArea>
    </MantineProvider>
  )
}

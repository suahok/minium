import { Text, Group, NumberInput, Portal } from "@mantine/core"
import { Fragment, ReactNode, useCallback, useState } from "react"

function fahrenheitToCelsius(fahrenheit: number) {
  return fahrenheit ? (fahrenheit - 32) / 1.8 : 0
}

function celsiusToFahrenheit(celsius: number) {
  return celsius ? celsius + 32 * 1.8 : 0
}

function Thermometer() {
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(0)

  const onCelsius = useCallback(
    (value: number) => {
      setCelsius(value)
      setFahrenheit(celsiusToFahrenheit(value))
    },
    [celsius]
  )

  const onFahrenheit = useCallback(
    (value: number) => {
      setFahrenheit(value)
      setCelsius(fahrenheitToCelsius(value))
    },
    [fahrenheit]
  )

  return (
    <Group>
      <NumberInput hideControls label="Celsius" placeholder="Input celsius" value={celsius} onChange={onCelsius} />
      <NumberInput
        hideControls
        label="Fahrenheit"
        placeholder="Input fahrenheit"
        value={fahrenheit}
        onChange={onFahrenheit}
      />
    </Group>
  )
}

function ChilrenDemo({ children }: { children(props: { name: string }): ReactNode }) {
  return <div>{children({ name: "Leanne Graham" })}</div>
}

export default function Outlook() {
  return (
    <Group direction="column">
      <Thermometer />
      <ChilrenDemo>
        {({ name }) => (
          <Text color="cyan">
            Hello <strong>{name}</strong>
          </Text>
        )}
      </ChilrenDemo>
    </Group>
  )
}

import { Button, Text } from "@mantine/core"
import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { type Dispatch } from "@/stores"
import { increment } from "@/stores/counter"
import { counterSelector } from "@/stores/selectors"

export default function App() {
  const counter = useSelector(counterSelector)
  const dispatch = useDispatch<Dispatch>()

  return (
    <Fragment>
      <Button variant="light" onClick={() => void dispatch(increment())}>
        Button
      </Button>
      <Text>Count: {counter}</Text>
    </Fragment>
  )
}

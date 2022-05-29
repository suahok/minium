import { Text, ThemeIcon } from "@mantine/core"
import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TiHeartFullOutline } from "react-icons/ti"
import { type Dispatch } from "@/stores"
import { increment } from "@/stores/counter"
import { counterSelector } from "@/stores/selectors"

export default function App() {
  const counter = useSelector(counterSelector)
  const dispatch = useDispatch<Dispatch>()

  return (
    <Fragment>
      <ThemeIcon size="lg" onClick={() => void dispatch(increment())}>
        <TiHeartFullOutline size={24} />
      </ThemeIcon>
      <Text>Count: {counter}</Text>
    </Fragment>
  )
}

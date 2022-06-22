import { Badge, Button, Group } from "@mantine/core"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "@/stores"
import { increment, incrementAsyncCount } from "@/stores/counter"
import { counterSelector } from "@/stores/selectors"

export default function App() {
  const { value: count, loading } = useSelector(counterSelector)
  const dispatch = useDispatch()

  const add = useCallback(() => {
    dispatch(increment())
  }, [count])

  const addAsync = useCallback(() => {
    dispatch(incrementAsyncCount())
  }, [count])

  return (
    <Group direction="column">
      <Group>
        <Button color="ocean-blue" onClick={add}>
          Increment
        </Button>
        <Badge color="red" size="lg" radius="sm">
          {count}
        </Badge>
        <Button loading={loading} onClick={addAsync}>
          {loading ? "Loading" : "IncrementAsync"}
        </Button>
      </Group>
    </Group>
  )
}

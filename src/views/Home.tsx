import { Button, Group, Text } from "@mantine/core"
import { useSelector } from "react-redux"
import { useDispatch } from "@/stores"
import { increment, incrementAsyncCount } from "@/stores/counter"
import { counterSelector } from "@/stores/selectors"
import { useCallback } from "react"

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
    <Group>
      <Button onClick={add}>Increment</Button>
      <Button loading={loading} onClick={addAsync}>
        {loading ? "Loading..." : "IncrementAsync"}
      </Button>
      <Text>Count: {count}</Text>
    </Group>
  )
}

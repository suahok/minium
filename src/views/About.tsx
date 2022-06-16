import { useDispatch } from "@/stores"
import { todosSelector } from "@/stores/selectors"
import { fetchTodos } from "@/stores/todos"
import { Button, Group, Text } from "@mantine/core"
import { useCallback } from "react"
import { useSelector } from "react-redux"

export default function About() {
  const { value: todos, loading } = useSelector(todosSelector)
  const dispatch = useDispatch()

  const getTodos = useCallback(() => {
    dispatch(fetchTodos())
  }, [loading])

  return (
    <Group spacing="xs" direction="column">
      <Button loading={loading} color="cyan" onClick={getTodos}>
        {loading ? "Loading..." : "Fetch Todos"}
      </Button>
      {todos.map(item => (
        <Text key={item.id} color="gray">
          {item.title}
        </Text>
      ))}
    </Group>
  )
}

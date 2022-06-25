import { useDispatch } from "@/stores"
import { todosSelector } from "@/stores/selectors"
import { fetchTodos } from "@/stores/todos"
import { Button, Group, List, ScrollArea } from "@mantine/core"
import { useCallback } from "react"
import { useSelector } from "react-redux"

export default function About() {
  const { value: todos, loading } = useSelector(todosSelector)
  const dispatch = useDispatch()

  const getTodos = useCallback(() => {
    dispatch(fetchTodos())
  }, [loading])

  const items = todos.map(item => <List.Item key={item.id}>{item.title}</List.Item>)

  return (
    <Group spacing="xs" direction="column">
      <Button loading={loading} color="cyan" onClick={getTodos}>
        {loading ? "Loading" : "Fetch Todos"}
      </Button>
      {!loading ? (
        <List withPadding spacing={4}>
          {items}
        </List>
      ) : null}
    </Group>
  )
}

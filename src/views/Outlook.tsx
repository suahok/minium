import { Group, List, Title } from "@mantine/core"
import { Suspense } from "react"

const resource = fetchProfileData()

export default function Outlook() {
  return (
    <Suspense fallback={<Title order={2}>Loading profile...</Title>}>
      <Group direction="column" spacing="sm">
        <ProfileUser />
        <Suspense fallback={<Title order={3}>Loading todos...</Title>}>
          <ProfileTodos />
        </Suspense>
      </Group>
    </Suspense>
  )
}

function ProfileUser() {
  const user = resource.user.read()
  return <Title order={2}>{user.name}</Title>
}

function ProfileTodos() {
  const todos = resource.todos.read()
  return (
    <List withPadding>
      {todos.map((todo: { id: number; title: string }) => (
        <List.Item key={todo.id}>{todo.title}</List.Item>
      ))}
    </List>
  )
}

function fetchProfileData() {
  const userPromise = fetchUser()
  const todosPromise = fetchTodos()
  return {
    user: wrapPromise(userPromise),
    todos: wrapPromise(todosPromise)
  }
}

enum Status {
  PENDING = "pending",
  SUCCESS = "success",
  ERROR = "error"
}

function wrapPromise(promise: Promise<any>) {
  let status = Status.PENDING
  let result: any = null

  const suspender = promise
    .then(data => {
      status = Status.SUCCESS
      result = data
    })
    .catch(err => {
      status = Status.ERROR
      result = err
    })

  return {
    read() {
      if (status === Status.PENDING) {
        throw suspender
      } else if (status === Status.SUCCESS) {
        return result
      } else {
        throw result
      }
    }
  }
}

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Leanne Graham"
      })
    }, 1000)
  })
}

function fetchTodos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "suscipit repellat esse quibusdam voluptatem incidunt"
        },
        {
          id: 2,
          title: "distinctio vitae autem nihil ut molestias quo"
        },
        {
          id: 3,
          title: "et itaque necessitatibus maxime molestiae qui quas velit"
        },
        {
          id: 4,
          title: "adipisci non ad dicta qui amet quaerat doloribus ea"
        },
        {
          id: 5,
          title: "voluptas quo tenetur perspiciatis explicabo natus"
        },
        {
          id: 6,
          title: "aliquam aut quasi"
        }
      ])
    }, 2000)
  })
}

import { Autocomplete, Badge, Button, Group, Text, SelectItemProps, Avatar, MantineColor } from "@mantine/core"
import { useSelector } from "react-redux"
import { useDispatch } from "@/stores"
import { increment, incrementAsyncCount } from "@/stores/counter"
import { counterSelector } from "@/stores/selectors"
import { ForwardedRef, useCallback, useState } from "react"
import { forwardRef } from "@chakra-ui/react"

const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    avatar: "https://picsum.photos/800/600?random=1"
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    avatar: "https://picsum.photos/800/600?random=2"
  },
  {
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    avatar: "https://picsum.photos/800/600?random=3"
  },
  {
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    avatar: "https://picsum.photos/800/600?random=4"
  },
  {
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
    avatar: "https://picsum.photos/800/600?random=5"
  },
  {
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    avatar: "https://picsum.photos/800/600?random=6"
  },
  {
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
    website: "elvis.io",
    avatar: "https://picsum.photos/800/600?random=7"
  },
  {
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    avatar: "https://picsum.photos/800/600?random=8"
  },
  {
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    avatar: "https://picsum.photos/800/600?random=9"
  },
  {
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
    website: "ambrose.net",
    avatar: "https://picsum.photos/800/600?random=10"
  }
]

const userData = users.map(item => ({ ...item, value: item.username }))

type ItemProps = {
  avatar: string
  color: MantineColor
  name: string
  username: string
  email: string
  phone: string
  website: string
} & SelectItemProps

const AutoCompleteItem = forwardRef(
  ({ avatar, email, username, ...rest }: ItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} {...rest}>
        <Group spacing="xs" noWrap>
          <Avatar radius="xl" src={avatar} />
          <div>
            <Text>{username}</Text>
            <Text size="xs" color="dimmed">
              {email}
            </Text>
          </div>
        </Group>
      </div>
    )
  }
)

export default function App() {
  const { value: count, loading } = useSelector(counterSelector)
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const EMAIL_TYPES = ["qq.com", "gmail.com", "outlook.com", "yahoo.com"]
  const data = email.trim() && !email.includes("@") ? EMAIL_TYPES.map(item => `${email}@${item}`) : []

  const add = useCallback(() => {
    dispatch(increment())
  }, [count])

  const addAsync = useCallback(() => {
    dispatch(incrementAsyncCount())
  }, [count])

  return (
    <Group direction="column">
      <Group>
        <Button onClick={add}>Increment</Button>
        <Badge color="red" size="lg" radius="sm">
          {count}
        </Badge>
        <Button loading={loading} onClick={addAsync}>
          {loading ? "Loading..." : "IncrementAsync"}
        </Button>
      </Group>
      <Autocomplete
        style={{ width: 240 }}
        label="Email"
        placeholder="Start typing to see options"
        value={email}
        data={data}
        onChange={setEmail}
      />
      <Autocomplete
        style={{ width: 240 }}
        label="Choose employee of the month"
        placeholder="Pick one"
        itemComponent={AutoCompleteItem}
        value={name}
        data={userData}
        onChange={setName}
      />
    </Group>
  )
}

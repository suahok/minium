import { Fragment } from "react"
import { Button } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"

export default function About() {
  return (
    <Fragment>
      <Button leftIcon={<EmailIcon />} h={10} rounded={4} fontWeight="normal" colorScheme="teal">
        Email
      </Button>
    </Fragment>
  )
}

import React from "react"
import { Stack, StackDivider } from "@chakra-ui/react"
import Information from "./Information"
import Notifications from "./Notifications"

const General: React.FC = () => {
  return (
    <Stack divider={<StackDivider borderColor="grayIron.200" />} spacing={4}>
      <Information />
      <Notifications />
    </Stack>
  )
}

export default General

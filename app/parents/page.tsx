"use client"

import { Box, Container, Center } from "@chakra-ui/react"
import CardFamily from "../../components/pages/parents/card-family"
import CardPayment from "../../components/pages/parents/card-payment"
import HeadSection from "../../components/pages/parents/HeadSection"
import InstallButton from "../../components/pages/parents/InstallButton"
import SWRegister from "../../components/pages/parents/SWRegister"

export default function Page() {
  return (
    <Center flex="1">
      <HeadSection />
      <Box
        as="section"
        w={["md", "xl"]}
        pt={{ base: "4", md: "8" }}
        pb={{ base: "12", md: "24" }}
      >
        <Container>
          <InstallButton />
          <CardFamily />
          <CardPayment />
        </Container>
      </Box>
      <SWRegister />
    </Center>
  )
}

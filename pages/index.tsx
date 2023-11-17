"use client";
import NextLink from "next/link";

import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'

export const App = () => (
  <Box as="section" bg="bg.accent.default" color="fg.accent.default" py={{ base: '16', md: '24' }}>
    <Container>
      <Stack spacing={{ base: '8', md: '10' }} align="center">
        <Stack spacing={{ base: '4', md: '6' }} textAlign="center">
          <Stack spacing="3">
            <Heading size={{ base: 'md', md: 'lg' }} fontWeight="semibold">
              La única solución de cobros que tu colegio necesita
            </Heading>
          </Stack>
          <Text color="fg.accent.muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
            Simplificamos la cobranza, facturación y conciliación de aranceles.
          </Text>
        </Stack>
        <Stack direction={{ base: 'column-reverse', md: 'row' }}>
          <NextLink href="/bills">
                    <Button
                     variant="primary"
                      size={useBreakpointValue({ base: "lg", md: "xl" })}
                    >
                      Ver admin
                    </Button>
                  </NextLink>
                  <NextLink href="/parents">
                    <Button
                      variant="secondary"
                      size={useBreakpointValue({ base: "lg", md: "xl" })}
                    >
                      Link de pago al día
                    </Button>
                  </NextLink>
                  <NextLink href="/parents/due">
                    <Button
                      variant="secondary"
                      size={useBreakpointValue({ base: "lg", md: "xl" })}
                    >
                      Link de pago vencido
                    </Button>
                  </NextLink>
                  <NextLink href="/parents/debit">
                    <Button
                      variant="secondary"
                      size={useBreakpointValue({ base: "lg", md: "xl" })}
                    >
                      Link de pago con débito
                    </Button>
                  </NextLink>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
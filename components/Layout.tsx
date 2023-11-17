"use client"

import { Container, Flex, Stack, useMediaQuery } from '@chakra-ui/react';
import Sidebar from './Sidebar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)", { ssr: true, fallback: true });

  return (
    <Flex>
      {isDesktop && <Sidebar />}

      <Container w="100%" maxW="1272px" mx="auto" px={0}>
        <Stack spacing={0} py={8} px={{ base: 4 }}>
          {children}
        </Stack>
      </Container>
    </Flex>
  )
};

export default Layout;

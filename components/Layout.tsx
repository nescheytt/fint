import { FC, ReactFragment } from 'react';
import { Container, Flex, Stack, useMediaQuery } from '@chakra-ui/react';
import Sidebar from './Sidebar';

type Props = {
  children: ReactFragment;
};

const Layout: FC<Props> = ({ children }) => {
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

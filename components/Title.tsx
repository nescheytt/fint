import { FC } from "react"
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react"
import { Menu, Plus } from "lucide-react"
import Sidebar from "./Sidebar"

interface Props {
  title: string
}

const Title: FC<Props> = ({ title }) => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
    fallback: true,
  })
  const { isOpen, onOpen, onClose } = useDisclosure()

  if (isDesktop) {
    return (
      <Box w="100%">
        <HStack justifyContent="space-between">
          <Text
            fontSize="30px"
            fontWeight={600}
            color="gray.900"
            lineHeight="38px"
          >
            {title}
          </Text>
          <Button colorScheme="fint" leftIcon={<Plus size={20} />}>
            Nuevo
          </Button>
        </HStack>
      </Box>
    )
  }

  return (
    <Box w="100%">
      <HStack justifyContent="space-between" spacing={0}>
        <IconButton
          colorScheme="grayIron"
          aria-label="Menu"
          icon={<Menu size={20} />}
          onClick={onOpen}
        />
        <Text
          fontSize="20px"
          fontWeight={600}
          color="gray.900"
          lineHeight="30px"
        >
          {title}
        </Text>
        <IconButton
          colorScheme="fint"
          aria-label="Search"
          icon={<Plus size={20} />}
        />
      </HStack>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0}>
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Title

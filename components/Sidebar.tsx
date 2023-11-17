import { FC } from "react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import {
  Box,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react"
import {
  Archive,
  ArrowRightCircle,
  Home,
  LifeBuoy,
  LogOut,
  Settings,
  Users,
} from "lucide-react"

const sidebarStyles = {
  as: "section",
  h: "100vh",
  position: "sticky",
  top: "0",
  px: "2",
  py: "5",
  bgColor: "grayIron.50",
  borderRight: "1px solid",
  borderColor: "grayIron.200",
}

const linksTopSidebar = [
  {
    href: "/",
    label: "Inicio",
    icon: (isDesktop: boolean) => <Home size={isDesktop ? 18 : 24} />,
  },
  {
    href: "/payments",
    label: "Pagos",
    icon: (isDesktop: boolean) => (
      <ArrowRightCircle size={isDesktop ? 18 : 24} />
    ),
  },
  {
    href: "/bills",
    label: "Facturas",
    icon: (isDesktop: boolean) => <Archive size={isDesktop ? 18 : 24} />,
  },
  {
    href: "/students",
    label: "Estudiantes",
    icon: (isDesktop: boolean) => <Users size={isDesktop ? 18 : 24} />,
  },
]

const linksBottomSidebar = [
  {
    href: "/",
    label: "Soporte",
    icon: (isDesktop: boolean) => <LifeBuoy size={isDesktop ? 18 : 24} />,
  },
  {
    href: "/settings",
    label: "Ajustes",
    icon: (isDesktop: boolean) => <Settings size={isDesktop ? 18 : 24} />,
  },
  {
    href: "/",
    label: "Salir",
    icon: (isDesktop: boolean) => <LogOut size={isDesktop ? 18 : 24} />,
  },
]

const Sidebar: FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
    fallback: true,
  })
  const pathname = usePathname()

  return (
    <Box sx={sidebarStyles}>
      <Stack justify="space-between" h="100%" spacing={1}>
        <Stack spacing={1}>
          <Flex
            px={2.5}
            mb={5}
            justifyContent={isDesktop ? "center" : "flex-start"}
          >
            <Image
              w="64px"
              h="64px"
              src="https://cldup.com/VPAtm7IdU4.png"
              alt="Profile logo"
              borderRadius="lg"
            />
          </Flex>

          {linksTopSidebar.map((item, index) => {
            const { href } = item
            const selected = pathname === href

            return (
              <LinkBox
                key={index}
                py={isDesktop ? 3 : 3.5}
                px={2.5}
                bgColor={selected ? "grayIron.150" : "transparent"}
                borderRadius="lg"
              >
                <Flex
                  flexDirection={isDesktop ? "column" : "row"}
                  alignItems="center"
                  color={selected ? "fint.600" : "grayIron.600"}
                  _hover={{ color: "fint.600" }}
                >
                  {item.icon(isDesktop)}
                  <LinkOverlay
                    as={NextLink}
                    href={item.href}
                    fontSize={isDesktop ? "xs" : "sm"}
                    fontWeight={600}
                    lineHeight={isDesktop ? "18px" : "20px"}
                    color={selected ? "fint.600" : "grayIron.600"}
                    ml={isDesktop ? 0 : 2}
                    _hover={{ color: "fint.600" }}
                  >
                    {item.label}
                  </LinkOverlay>
                </Flex>
              </LinkBox>
            )
          })}
        </Stack>

        <Stack spacing={1}>
          {linksBottomSidebar.map((item, index) => {
            const { href } = item
            const selected = pathname === href

            return (
              <LinkBox
                key={index}
                py={isDesktop ? 3 : 3.5}
                px={2.5}
                bgColor={selected ? "grayIron.150" : "transparent"}
                borderRadius="lg"
              >
                <Flex
                  flexDirection={isDesktop ? "column" : "row"}
                  alignItems="center"
                  color={selected ? "fint.600" : "grayIron.600"}
                  _hover={{ color: "fint.600" }}
                >
                  {item.icon(isDesktop)}
                  <LinkOverlay
                    as={NextLink}
                    href={item.href}
                    fontSize={isDesktop ? "xs" : "sm"}
                    fontWeight={600}
                    lineHeight={isDesktop ? "18px" : "20px"}
                    color={selected ? "fint.600" : "grayIron.600"}
                    ml={isDesktop ? 0 : 2}
                    _hover={{ color: "fint.600" }}
                  >
                    {item.label}
                  </LinkOverlay>
                </Flex>
              </LinkBox>
            )
          })}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Sidebar

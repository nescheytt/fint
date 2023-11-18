import { FC } from "react"
import {
  Box,
  Button,
  Flex,
  InputGroup,
  InputLeftElement,
  Icon,
  Stack,
  useMediaQuery,
  useBoolean,
} from "@chakra-ui/react"
import { ArrowUpRight, Filter, Search, X } from "lucide-react"
import {
  options,
  optionsGrades,
  optionsLevels,
  optionsPayments,
  optionsStates,
} from "@/data/filters"
import SelectControlTheme from "./ui/SelectControl"
import SelectTheme from "./ui/Select"
import InputTheme from "./ui/Input"

const InputSearch: FC = () => {
  return (
    <InputGroup maxW={{ md: "240px" }}>
      <InputLeftElement pointerEvents="none">
        <Icon as={Search} color="muted" />
      </InputLeftElement>
      <InputTheme placeholder="Buscar" pl={10} />
    </InputGroup>
  )
}

const Filters: FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
    fallback: true,
  })
  const [disclosure, setDisclosure] = useBoolean(true)

  return (
    <Stack
      w="full"
      direction={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={3.5}
    >
      {!isDesktop && (
        <>
          <InputSearch />
          <Button
            onClick={setDisclosure.toggle}
            w="full"
            colorScheme="grayIron"
            leftIcon={<Filter size={20} />}
          >
            Filtrar
          </Button>
        </>
      )}

      <Flex
        hidden={isDesktop ? false : disclosure}
        w="full"
        direction={{ base: "column", md: "row" }}
        flexWrap="wrap"
        gap={3}
      >
        {isDesktop && <InputSearch />}

        <SelectControlTheme options={options} />
        <SelectTheme options={optionsLevels} placeholder="Todos los niveles" />
        <SelectTheme options={optionsGrades} placeholder="Todos los cursos" />
        <SelectTheme options={optionsStates} placeholder="Todos los estados" />
        <SelectTheme options={optionsPayments} placeholder="Todos los pagos" />

        <Box w={{ base: "full", md: "auto" }}>
          <Button
            w={{ base: "full", md: "auto" }}
            colorScheme="blackAlpha"
            variant="link"
            leftIcon={<X />}
            lineHeight="44px"
          >
            Borrar filtros
          </Button>
        </Box>
      </Flex>

      <Button
        w={{ base: "full", md: "auto" }}
        colorScheme="grayIron"
        leftIcon={<ArrowUpRight size={20} />}
      >
        Exportar
      </Button>
    </Stack>
  )
}

export default Filters

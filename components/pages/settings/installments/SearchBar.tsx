import { Button, Flex, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { Search, Plus } from "lucide-react";
import InputTheme from "../../../ui/Input";

interface Props {
  onClick(): void;
};

const SearchBar: React.FC<Props> = ({ onClick }) => {
  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent="space-between">
      <InputGroup maxW={{ base: 'full', md: '240px' }} mb={{ base: 4, md: 0 }}>
        <InputLeftElement pointerEvents="none">
          <Icon as={Search} color="muted" />
        </InputLeftElement>
        <InputTheme placeholder="Buscar" pl={10} />
      </InputGroup>

      <Button colorScheme="fint" leftIcon={<Plus size={20} />} onClick={onClick}>Nuevo</Button>
    </Flex>
  )
};

export default SearchBar;

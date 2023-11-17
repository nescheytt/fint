import { forwardRef } from '@chakra-ui/react';
import { Select, SelectProps } from '@chakra-ui/select';

interface Props extends SelectProps {
  options: {
    value: string;
    label: string;
  }[];
};

const SelectTheme = forwardRef<Props, "select">(( props, ref ) => (
  <Select ref={ref} width={{ base: "full", md: "auto" }} height="44px" fontSize={{ base: 'md', md: 'sm' }} placeholder={props.placeholder} {...props}>
    {props.options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </Select>
));

export default SelectTheme;
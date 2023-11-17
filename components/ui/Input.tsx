import { forwardRef } from '@chakra-ui/react';
import { Input, InputProps } from '@chakra-ui/input';

const InputTheme = forwardRef<InputProps, "input">(( props, ref ) => (
  <Input ref={ref} height="44px" fontSize={{ base: 'md', md: 'sm' }} placeholder={props.placeholder} {...props} />
));

export default InputTheme;
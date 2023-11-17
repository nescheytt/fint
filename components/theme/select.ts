
import { selectAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { inputTheme } from './input';

const { defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

export const selectTheme = defineMultiStyleConfig({
  variants: inputTheme.variants,
  defaultProps: {
    ...inputTheme.defaultProps
  },
});

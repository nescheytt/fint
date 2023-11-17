import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { inputTheme } from './input';

const baseStyle = defineStyle({
  ...inputTheme.baseStyle?.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top",
});

const variants = {
  outline: defineStyle(
    (props) => inputTheme.variants?.outline(props).field ?? {},
  ),
};

const sizes = {
  md: inputTheme.sizes?.md.field ?? {},
};

export const textareaTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});
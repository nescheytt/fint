import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/styled-system";
import { getColor, mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
});

const size = {
  md: defineStyle({
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md",
  })
};

const sizes = {
  md: definePartsStyle({
    field: size.md,
    addon: size.md,
  })
};

function getDefaults(props: Record<string, any>) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props),
  }
};

const variantOutline = definePartsStyle((props) => {
  const { colorScheme: c, theme } = props
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props)

  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props),
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
      },
      _invalid: {
        borderColor: getColor(theme, ec),
        boxShadow: `0 0 0 1px ${getColor(theme, ec)}`,
      },
      _focus: {
        zIndex: 1,
        borderColor: `${c ? `${c}.500` : getColor(theme, fc)}`,
        boxShadow: `${c ? `0 0 0 1px var(--chakra-colors-${c}Alpha-500)` : `0 0 0 1px ${getColor(theme, fc)}`}`,
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: `${c ? `${c}.500` : getColor(theme, fc)}`,
        boxShadow: `${c ? `0 0 0 1px var(--chakra-colors-${c}Alpha-500)` : `0 0 0 1px ${getColor(theme, fc)}`}`,
      },
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props),
    },
  }
});

const variants = {
  outline: variantOutline,
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: 'md',
    variant: 'outline',
    colorScheme: 'fint'
  },
});

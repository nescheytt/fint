import { useTheme } from "@chakra-ui/react"
import { defineStyle, defineStyleConfig } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

// Base Styles
const baseStyle = defineStyle({
  borderRadius: "lg",
  fontWeight: "bold",
})

// Sizes
const sizes = {
  md: defineStyle({
    fontSize: "sm",
    lineHeight: "20px",
    px: 4,
    py: 3,
  }),
}

// Variants
const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props

  if (c === "grayIron") {
    const bg = mode(`grayIron.150`, `whiteAlpha.200`)(props)
    const color = "fint.600"

    return {
      bg,
      color,
      _hover: {
        bg: mode(`grayIron.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg,
        },
      },
      _active: { bg: mode(`grayIron.300`, `whiteAlpha.400`)(props) },
    }
  }

  return { ...useTheme }
})

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props
  const borderColor = mode(`grayIron.200`, `whiteAlpha.300`)(props)
  return {
    border: "1px solid",
    borderColor: c === "grayIron" ? borderColor : c,
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
      { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
      { marginBottom: "-1px" },
    ...useTheme,
  }
})

const variants = {
  solid: variantSolid,
  outline: variantOutline,
}

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "fint",
  },
})

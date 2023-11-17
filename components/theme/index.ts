import { extendTheme } from "@chakra-ui/react";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import { colors } from "./colors";
import { buttonTheme } from "./button";
import { inputTheme } from "./input";
import { selectTheme } from "./select";
import { tabsTheme } from "./tabs";
import { textareaTheme } from "./textarea";

export const theme = extendTheme(
  {
    colors: { 
      ...proTheme.colors,
      ...colors,
    },
    components: {
      Button: buttonTheme,
      Input: inputTheme,
      Select: selectTheme,
      Tabs: tabsTheme,
      Textarea: textareaTheme,
    },
    styles: {
      global: {
        body: {
          bg: 'grayIron.25',
          fontSize: 'sm',
        },
        a: {
          color: "fint.500",
          _hover: {
            textDecoration: "none"
          },
        },
      },
    },
  },
  proTheme,
);

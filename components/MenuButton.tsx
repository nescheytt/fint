"use client"

import { FC } from "react";
import * as Icon from "@chakra-ui/icons";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MoreHorizontal, MoreVertical } from "lucide-react";

interface Props {
  fontSize: string
  size?: string
  orientation?: string
}

const MenuActionsButton: FC<Props> = ({ fontSize, size, orientation }) => {
  const sizeMenu = size ? size + 'px' : '40px';
  const iconOrientation = orientation === 'horizontal' ? <MoreHorizontal size={20} /> : <MoreVertical size={20} />;

  return (
    <Menu>
      <MenuButton minW={sizeMenu} h={sizeMenu} as={IconButton} aria-label='Options' icon={iconOrientation} variant="link" colorScheme="grayIron" />
      <MenuList>
        <MenuItem icon={<Icon.AddIcon />} fontSize={fontSize} command='⌘T'>
          New Tab
        </MenuItem>
        <MenuItem icon={<Icon.ExternalLinkIcon />} fontSize={fontSize} command='⌘N'>
          New Window
        </MenuItem>
        <MenuItem icon={<Icon.RepeatIcon />} fontSize={fontSize} command='⌘⇧N'>
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<Icon.EditIcon />} fontSize={fontSize} command='⌘O'>
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  )
};

export default MenuActionsButton;
import { Box, Button, CardHeader, HStack, Text } from "@chakra-ui/react"
import * as icons from "lucide-react"

interface IconProps {
  color?: string
  name: string
  size?: number
}

const Icon = ({ name, color, size }: IconProps) => {
  // @ts-ignore
  const LucideIcon = icons[name]
  return <LucideIcon color={color} size={size} />
}

interface Args {
  button?: {
    text: string
    onClick?: () => void // TODO: por momentos no es requeried hasta que esten todos los modales
  }
  icon?: {
    color?: string
    name: string
    size?: number
  }
  title: string
}

// variantes que presenta el componente
const Container = ({ button, icon, title }: Args) => {
  if (button && !icon) {
    return (
      <HStack justifyContent='space-between' spacing={0}>
        <Text fontSize='md' fontWeight={600} color='gray.900' lineHeight={8}>{title}</Text>
        <Button colorScheme="fint" variant="link" onClick={button.onClick}>{button.text}</Button>
      </HStack>
    )
  }

  if (button && icon) {
    return (
      <HStack justifyContent='space-between' spacing={0}>
        <HStack spacing={3}>
          <Box color={icon.color || 'fint.600'}>
            <Icon name={icon.name || 'Apple'} size={icon.size || 16} />
          </Box>
          <Text fontSize='md' fontWeight={600} color='gray.900' lineHeight={8}>{title}</Text>
        </HStack>
        <Button colorScheme="fint" variant="link" onClick={button.onClick}>{button.text}</Button>
      </HStack>
    )
  }

  if (!button && icon) {
    return (
      <HStack spacing={3}>
        <Box color={icon.color || 'fint.600'}>
          <Icon name={icon.name || 'Apple'} size={icon.size || 16} />
        </Box>
        <Text fontSize="md" fontWeight={600} color="gray.900" lineHeight={8}>{title}</Text>
      </HStack>  
    )
  }

  return <Text fontSize="md" fontWeight={600} color="gray.900" lineHeight={8}>{title}</Text>
}

export const CardHeaderDrawer = ({ button, icon, title }: Args) => {

  return (
    <CardHeader px={5} py='11.5px' borderBottom='1px solid' borderColor='grayIron.100'>
      <Container button={button} icon={icon} title={title} />
    </CardHeader>
  )
};

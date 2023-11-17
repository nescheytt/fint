"use client"

import { FC, useState } from "react"
import { ButtonGroup, IconButton, SelectProps } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SelectTheme from "./Select"

interface Option {
  label: string
  value: string
}

interface Props extends SelectProps {
  options: Option[]
}

const SelectControlTheme: FC<Props> = ({ options, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handlePrev = () => {
    setSelectedIndex((selectedIndex - 1 + options.length) % options.length)
  }

  const handleNext = () => {
    setSelectedIndex((selectedIndex + 1) % options.length)
  }

  return (
    <ButtonGroup variant="outline" spacing={0}>
      <IconButton
        aria-label="Previous option"
        variant="outline"
        icon={<ChevronLeft />}
        isDisabled={selectedIndex === 0}
        onClick={handlePrev}
        height="44px"
        borderRight={0}
        borderRadius="8px 0px 0px 8px"
        colorScheme="grayIron"
      />
      <SelectTheme
        textAlign="center"
        borderRadius={0}
        options={options}
        value={options[selectedIndex].value}
        onChange={(e) =>
          setSelectedIndex(
            options.findIndex((option) => option.value === e.target.value)
          )
        }
        {...props}
      />
      <IconButton
        aria-label="Next option"
        variant="outline"
        icon={<ChevronRight />}
        isDisabled={selectedIndex === options.length - 1}
        onClick={handleNext}
        height="44px"
        borderLeft={0}
        borderRadius="0px 8px 8px 0px"
        colorScheme="grayIron"
      />
    </ButtonGroup>
  )
}

export default SelectControlTheme

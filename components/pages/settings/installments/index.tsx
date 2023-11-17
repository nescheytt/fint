"use client"

import React from "react"
import { Stack, useDisclosure } from "@chakra-ui/react"
import { MockDataTypes } from "../../../../types/mock-settings-types"
import DrawerSettings from "./drawer"
import ModalNewPlan from "./modal"
import SearchBar from "./SearchBar"
import TablePlans from "./TablePlans"

const listItems = [
  {
    id: 1,
    concept: "Enseñanza Curricular Primaria",
    amount: "13.117,00",
  },
  {
    id: 2,
    concept: "Enseñanza Extracurricular Primaria",
    amount: "13.117,00",
  },
  {
    id: 3,
    concept: "Enseñanza extracurricular optativa",
    amount: "4.500,00",
  },
  {
    id: 4,
    concept: "Atención Médica",
    amount: "155,40",
  },
  {
    id: 5,
    concept: "Seguro",
    amount: "15,30",
  },
  {
    id: 6,
    concept: "Mantenimiento servicio educativo",
    amount: "2.623,40",
  },
  {
    id: 7,
    concept: "Equipamiento didáctico",
    amount: "2.623,40",
  },
  {
    id: 8,
    concept: "Otros costos",
    amount: "1.700,00",
  },
  {
    id: 9,
    concept: "Ex. Final de Lenguas Vivas",
    amount: "1.230,00",
  },
  {
    id: 10,
    concept: "Matrícula Primaria Cuota 4/4",
    amount: "6.250,00",
  },
  {
    id: 11,
    concept: "Bonificación extrac. opcional",
    amount: "600,00",
  },
]

const Installments: React.FC = () => {
  const [planSelected, setPlanSelected] = React.useState<
    MockDataTypes | undefined
  >(undefined)
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure()
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure()

  function handleOnClick(plan: MockDataTypes) {
    onOpenDrawer()
    setPlanSelected(plan)
  }

  return (
    <>
      <Stack spacing={6}>
        <SearchBar onClick={onOpenModal} />
        <TablePlans onClick={handleOnClick} />
      </Stack>

      <DrawerSettings
        isOpen={isOpenDrawer}
        onClose={onCloseDrawer}
        plan={planSelected}
      />
      <ModalNewPlan
        isOpen={isOpenModal}
        onClose={onCloseModal}
        listItems={listItems}
      />
    </>
  )
}

export default Installments

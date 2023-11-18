type Data = {
  id: number
  plan: string
  quantityStudents: number
  concept: {
    id: number
    label: string
  }
  amount: string
}

export const mockData: Array<Data> = [
  {
    id: 1,
    plan: "Maternal completo",
    quantityStudents: 0,
    concept: {
      id: 1,
      label: "Borrador",
    },
    amount: "36.000",
  },
  {
    id: 2,
    plan: "Maternal 2023 turno Mañana",
    quantityStudents: 50,
    concept: {
      id: 2,
      label: "Deshabilitado",
    },
    amount: "40.000",
  },
  {
    id: 3,
    plan: "Maternal 2023 turno tarde",
    quantityStudents: 62,
    concept: {
      id: 3,
      label: "Activo",
    },
    amount: "37.500",
  },
  {
    id: 4,
    plan: "Inicial 2023 Primer grado",
    quantityStudents: 80,
    concept: {
      id: 3,
      label: "Activo",
    },
    amount: "37.500",
  },
  {
    id: 5,
    plan: "Inicial 2023 Segundo grado",
    quantityStudents: 80,
    concept: {
      id: 3,
      label: "Activo",
    },
    amount: "40.000",
  },
  {
    id: 6,
    plan: "Inicial 2023 Tercer y Cuarto grado",
    quantityStudents: 63,
    concept: {
      id: 3,
      label: "Activo",
    },
    amount: "36.000",
  },
  {
    id: 7,
    plan: "Inicial 2023 5to a 7mo.",
    quantityStudents: 248,
    concept: {
      id: 3,
      label: "Activo",
    },
    amount: "36.000",
  },
]

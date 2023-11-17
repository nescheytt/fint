// students status: [
//   { id: 1, status: activo },
//   { id: 2, status: inactivo },
//   { id: 3, status: atrasado 14 días }
// ]

// payments status: [
//   { id: 1, status: exitoso },
//   { id: 2, status: reembolsado },
//   { id: 3, status: pagada parcialmente },
//   { id: 4, status: fallida },
//   { id: 5, status: atrasado x días },
//   { id: 6, status: acreditado },
//   { id: 7, status: con contracargo }
// ]

// bills status: [
//   { id: 1, status: pagada },
//   { id: 2, status: reembolsado },
//   { id: 3, status: pagada parcialmente },
//   { id: 4, status: pago fallido }
//   { id: 5, status: atrasado x días },
//   { id: 6, status: enviada },
//   { id: 7, status: por cobrar },
//   { id: 8, status: nuevo intento en curso },
// ]

export const mockData = [
  {
    id: 1,
    student: {
      grade: "lunitas b",
      level: "maternal",
      name: "santino lopez",
      shift: "mañana",
      status: {
        id: 3,
        label: "atrasado 14 días",
      },
    },
    payment: {
      amount: "36.000",
      code: "54047771582",
      concept: "cuota septiembre",
      date: "16 oct. 18:24",
      status: {
        id: 4,
        label: "fallida",
      },
    },
    bill: {
      amount: "36.000",
      code: "47C69A0A-0009",
      concept: "cuota septiembre",
      date: "16 oct. 18:24",
      status: {
        id: 5,
        label: "atrasada 14 días",
      },
    },
  },
  {
    id: 2,
    student: {
      grade: "estrellitas a",
      level: "inicial",
      name: "olivia Montiuk",
      shift: "mañana",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "40.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 2,
        label: "reembolsado",
      },
    },
    bill: {
      amount: "36.000",
      code: "33728055-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 2,
        label: "reembolsado",
      },
    },
  },
  {
    id: 3,
    student: {
      grade: "lunitas b",
      level: "maternal",
      name: "jazmin Verna",
      shift: "mañana",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "37.500",
      code: "54047771582",
      concept: "cuota octubre",
      date: "14 oct. 18:12",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "37.500",
      code: "9546B989-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 1,
        label: "pagada",
      },
    },
  },
  {
    id: 4,
    student: {
      grade: "estrellitas a",
      level: "inicial",
      name: "valentino flores",
      shift: "mañana",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "37.500",
      code: "54047771582",
      concept: "cuota octubre",
      date: "14 oct. 17:59",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "37.500",
      code: "6B4FB115-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 6,
        label: "enviada",
      },
    },
  },
  {
    id: 5,
    student: {
      grade: "lunitas b",
      level: "primario",
      name: "bella perez",
      shift: "mañana",
      status: {
        id: 2,
        label: "inactivo",
      },
    },
    payment: {
      amount: "40.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "14 oct. 17:59",
      status: {
        id: 6,
        label: "acreditado",
      },
    },
    bill: {
      amount: "40.000",
      code: "6B4FB115-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 7,
        label: "por cobrar",
      },
    },
  },
  {
    id: 6,
    student: {
      grade: "5º 1ª",
      level: "secundario",
      name: "santiago perez",
      shift: "mañana",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "37.500",
      code: "54047771582",
      concept: "cuota octubre",
      date: "14 oct. 17:59",
      status: {
        id: 3,
        label: "pagada parcialmente",
      },
    },
    bill: {
      amount: "37.500",
      code: "BE421AE2-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 3,
        label: "pagada parcialmente",
      },
    },
  },
  {
    id: 7,
    student: {
      grade: "2º 1ª",
      level: "secundario",
      name: "constanza Rodriguez",
      shift: "mañana",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "36.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "13 Oct. 16:45",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "36.000",
      code: "BE421AE2-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 8,
        label: "nuevo intento en curso",
      },
    },
  },
  {
    id: 8,
    student: {
      grade: "lunitas b",
      level: "maternal",
      name: "valentino flores",
      shift: "mañana",
      status: {
        id: 3,
        label: "atrasado 14 días",
      },
    },
    payment: {
      amount: "37.500",
      code: "54047771582",
      concept: "cuota octubre",
      date: "13 Oct. 16:45",
      status: {
        id: 4,
        label: "fallida",
      },
    },
    bill: {
      amount: "37.500",
      code: "F7E8C5CA-0010",
      concept: "cuota octubre",
      date: "13 Oct. 16:45",
      status: {
        id: 1,
        label: "pagada",
      },
    },
  },
  {
    id: 9,
    student: {
      grade: "estrellitas a",
      level: "inicial",
      name: "olivia Montiuk",
      shift: "mañana",
      status: {
        id: 1,
        label: "Al día",
      },
    },
    payment: {
      amount: "40.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "13 Oct. 13:40",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "40.000",
      code: "53D3757C-0010",
      concept: "cuota octubre",
      date: "13 Oct. 13:40",
      status: {
        id: 1,
        label: "pagada",
      },
    },
  },
  {
    id: 10,
    student: {
      grade: "lunitas b",
      level: "maternal",
      name: "jazmin Verna",
      shift: "mañana",
      status: {
        id: 1,
        label: "Al día",
      },
    },
    payment: {
      amount: "40.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "12 Oct. 13:34",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "40.000",
      code: "52D608C2-0010",
      concept: "cuota octubre",
      date: "12 Oct. 13:34",
      status: {
        id: 1,
        label: "pagada",
      },
    },
  },
  {
    id: 11,
    student: {
      grade: "estrellitas a",
      level: "inicial",
      name: "benjamin ruiz",
      shift: "tarde",
      status: {
        id: 1,
        label: "Al día",
      },
    },
    payment: {
      amount: "40.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "11 Oct. 13:15",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "40.000",
      code: "B8676A28-0010",
      concept: "cuota octubre",
      date: "11 Oct. 13:15",
      status: {
        id: 7,
        label: "por cobrar",
      },
    },
  },
  {
    id: 12,
    student: {
      grade: "lunitas b",
      level: "maternal",
      name: "bella perez",
      shift: "tarde",
      status: {
        id: 2,
        label: "inactivo",
      },
    },
    payment: {
      amount: "37.500",
      code: "54047771582",
      concept: "cuota octubre",
      date: "14 Oct. 18:12",
      status: {
        id: 7,
        label: "con contracargo",
      },
    },
    bill: {
      amount: "37.500",
      code: "9CF4EFFD-0010",
      concept: "cuota octubre",
      date: "14 Oct. 18:12",
      status: {
        id: 4,
        label: "pago fallido",
      },
    },
  },
  {
    id: 13,
    student: {
      grade: "solcitos a",
      level: "maternal",
      name: "santiago perez",
      shift: "tarde",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "37.500",
      code: "54047771582",
      concept: "cuota octubre",
      date: "14 Oct. 17:59",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "37.500",
      code: "9044FB81-0010",
      concept: "cuota octubre",
      date: "14 Oct. 17:59",
      status: {
        id: 7,
        label: "por cobrar",
      },
    },
  },
  {
    id: 14,
    student: {
      grade: "lunitas b",
      level: "maternal",
      name: "constanza Rodriguez",
      shift: "tarde",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "40.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "13 Oct. 17:21",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "40.000",
      code: "9488C19A-00010",
      concept: "cuota octubre",
      date: "13 Oct. 17:21",
      status: {
        id: 7,
        label: "por cobrar",
      },
    },
  },
  {
    id: 15,
    student: {
      grade: "lunitas b",
      level: "maternal",
      name: "santino lopez",
      shift: "mañana",
      status: {
        id: 3,
        label: "atrasado 14 días",
      },
    },
    payment: {
      amount: "36.000",
      code: "54047771582",
      concept: "cuota septiembre",
      date: "16 oct. 18:24",
      status: {
        id: 4,
        label: "fallida",
      },
    },
    bill: {
      amount: "36.000",
      code: "47C69A0A-0009",
      concept: "cuota septiembre",
      date: "16 oct. 18:24",
      status: {
        id: 5,
        label: "atrasada 14 días",
      },
    },
  },
  {
    id: 16,
    student: {
      grade: "estrellitas a",
      level: "inicial",
      name: "olivia Montiuk",
      shift: "mañana",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "40.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 2,
        label: "reembolsado",
      },
    },
    bill: {
      amount: "36.000",
      code: "33728055-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 2,
        label: "reembolsado",
      },
    },
  },
  {
    id: 17,
    student: {
      grade: "lunitas b",
      level: "maternal",
      name: "jazmin Verna",
      shift: "mañana",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "37.500",
      code: "54047771582",
      concept: "cuota octubre",
      date: "14 oct. 18:12",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "37.500",
      code: "9546B989-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 1,
        label: "pagada",
      },
    },
  },
  {
    id: 18,
    student: {
      grade: "estrellitas a",
      level: "inicial",
      name: "valentino flores",
      shift: "mañana",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "37.500",
      code: "54047771582",
      concept: "cuota octubre",
      date: "14 oct. 17:59",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "37.500",
      code: "6B4FB115-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 6,
        label: "enviada",
      },
    },
  },
  {
    id: 19,
    student: {
      grade: "lunitas b",
      level: "primario",
      name: "bella perez",
      shift: "mañana",
      status: {
        id: 2,
        label: "inactivo",
      },
    },
    payment: {
      amount: "40.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "14 oct. 17:59",
      status: {
        id: 6,
        label: "acreditado",
      },
    },
    bill: {
      amount: "40.000",
      code: "6B4FB115-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 7,
        label: "por cobrar",
      },
    },
  },
  {
    id: 20,
    student: {
      grade: "5º 1ª",
      level: "secundario",
      name: "santiago perez",
      shift: "mañana",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "37.500",
      code: "54047771582",
      concept: "cuota octubre",
      date: "14 oct. 17:59",
      status: {
        id: 3,
        label: "pagada parcialmente",
      },
    },
    bill: {
      amount: "37.500",
      code: "BE421AE2-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 3,
        label: "pagada parcialmente",
      },
    },
  },
  {
    id: 21,
    student: {
      grade: "2º 1ª",
      level: "secundario",
      name: "constanza Rodriguez",
      shift: "mañana",
      status: {
        id: 1,
        label: "al día",
      },
    },
    payment: {
      amount: "36.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "13 Oct. 16:45",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "36.000",
      code: "BE421AE2-0010",
      concept: "cuota octubre",
      date: "16 oct. 18:24",
      status: {
        id: 8,
        label: "nuevo intento en curso",
      },
    },
  },
  {
    id: 22,
    student: {
      grade: "lunitas b",
      level: "maternal",
      name: "valentino flores",
      shift: "mañana",
      status: {
        id: 3,
        label: "atrasado 14 días",
      },
    },
    payment: {
      amount: "37.500",
      code: "54047771582",
      concept: "cuota octubre",
      date: "13 Oct. 16:45",
      status: {
        id: 4,
        label: "fallida",
      },
    },
    bill: {
      amount: "37.500",
      code: "F7E8C5CA-0010",
      concept: "cuota octubre",
      date: "13 Oct. 16:45",
      status: {
        id: 1,
        label: "pagada",
      },
    },
  },
  {
    id: 23,
    student: {
      grade: "estrellitas a",
      level: "inicial",
      name: "olivia Montiuk",
      shift: "mañana",
      status: {
        id: 1,
        label: "Al día",
      },
    },
    payment: {
      amount: "40.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "13 Oct. 13:40",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "40.000",
      code: "53D3757C-0010",
      concept: "cuota octubre",
      date: "13 Oct. 13:40",
      status: {
        id: 1,
        label: "pagada",
      },
    },
  },
  {
    id: 24,
    student: {
      grade: "lunitas b",
      level: "maternal",
      name: "jazmin Verna",
      shift: "mañana",
      status: {
        id: 1,
        label: "Al día",
      },
    },
    payment: {
      amount: "40.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "12 Oct. 13:34",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "40.000",
      code: "52D608C2-0010",
      concept: "cuota octubre",
      date: "12 Oct. 13:34",
      status: {
        id: 1,
        label: "pagada",
      },
    },
  },
  {
    id: 25,
    student: {
      grade: "estrellitas a",
      level: "inicial",
      name: "benjamin ruiz",
      shift: "tarde",
      status: {
        id: 1,
        label: "Al día",
      },
    },
    payment: {
      amount: "40.000",
      code: "54047771582",
      concept: "cuota octubre",
      date: "11 Oct. 13:15",
      status: {
        id: 1,
        label: "exitoso",
      },
    },
    bill: {
      amount: "40.000",
      code: "B8676A28-0010",
      concept: "cuota octubre",
      date: "11 Oct. 13:15",
      status: {
        id: 7,
        label: "por cobrar",
      },
    },
  },
]

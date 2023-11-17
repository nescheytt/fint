export type NavData = Array<{
  title: string
  due: string
  dueAmount?: boolean
  items: Array<{
    label: string
    value: string
    discount?: boolean
    priceTotal?: boolean
  }>
}>

export const data: NavData = [
  {
    title: "Septiembre",
    due: "Vence hoy",
    items: [
      { label: "Enseñanza curricular", value: "$13.117,00" },
      { label: "Enseñanza extracurricular", value: "$13.117,00" },
      { label: "Enseñanza extracurricular optativa", value: "$4.500,00" },
      { label: "Emergencias", value: "$155,00" },
      { label: "Seguro", value: "$15,30" },
      { label: "Matenimiento servicio educativo", value: "$2.623,40" },
      { label: "Equipamiento Didactico", value: "$2.623,40" },
      {
        label: "Bonificación extrac. opcional",
        value: "-$600,00",
        discount: true,
      },
      {
        label: "Bonificación institucional",
        value: "-$1.500,00",
        discount: true,
      },
      {
        label: "Bonificación 2do. hermano 5%OFF",
        value: "-$1.311,70",
        discount: true,
      },
      { label: "Total a pagar", value: "$32.739,40", priceTotal: true },
    ],
  },
  {
    title: "Agosto",
    due: "Atrasado 32 días",
    dueAmount: true,
    items: [
      { label: "Enseñanza curricular", value: "$13.117,00" },
      { label: "Enseñanza extracurricular", value: "$13.117,00" },
      { label: "Enseñanza extracurricular optativa", value: "$4.500,00" },
      { label: "Emergencias", value: "$155,00" },
      { label: "Seguro", value: "$15,30" },
      { label: "Matenimiento servicio educativo", value: "$2.623,40" },
      { label: "Equipamiento Didactico", value: "$2.623,40" },
      {
        label: "Bonificación extrac. opcional",
        value: "-$600,00",
        discount: true,
      },
      {
        label: "Bonificación institucional",
        value: "-$1.500,00",
        discount: true,
      },
      {
        label: "Bonificación 2do. hermano 5%OFF",
        value: "-$1.311,70",
        discount: true,
      },
      { label: "Total a pagar", value: "$32.739,40", priceTotal: true },
    ],
  },
]

type Options = {
  value: string
  label: string
}

export const options: Array<Options> = [
  { value: "jun2023", label: "Jun 2023" },
  { value: "jul2023", label: "Jul 2023" },
  { value: "ago2023", label: "Ago 2023" },
  { value: "sep2023", label: "Sep 2023" },
]

export const optionsLevels: Array<Options> = [
  { value: "maternal", label: "Maternal" },
  { value: "inicial", label: "Inicial" },
  { value: "primario", label: "Primario" },
  { value: "secundario", label: "Secundario" },
]

export const optionsGrades: Array<Options> = [
  { value: "lunitas-b", label: "Lunitas B" },
  { value: "estrellitas-a", label: "Estrellitas A" },
  { value: "5-1", label: "5° 1°" },
  { value: "2-1", label: "2° 1°" },
]

export const optionsStates: Array<Options> = [
  { value: "uptodate", label: "Al día" },
  { value: "overdue", label: "Atrasado 14 días" },
  { value: "inactive", label: "Inactivo" },
]

export const optionsPayments: Array<Options> = [
  { value: "debit", label: "En débito automático" },
  { value: "card", label: "Tarjeta de crédito" },
  { value: "cash", label: "Efectivo" },
]

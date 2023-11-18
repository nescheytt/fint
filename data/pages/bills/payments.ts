type Payments = {
  method: string
  amount: string
  date: string
  status: string
}

export const mockPayments: Array<Payments> = [
  {
    method: "Tarjeta de crédito",
    amount: "38.533,00",
    date: "10 de Oct. 12:23hs.",
    status: "Pagado",
  },
  {
    method: "Tarjeta de crédito",
    amount: "9.021,65",
    date: "10 de Oct. 12:23hs.",
    status: "Pagado",
  },
]

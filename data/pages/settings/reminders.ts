
type ListBill = {
  type: string
  date: string
}

export const mockListBillDueReminders: Array<ListBill> = [
  {
    type: "whatsapp",
    date: "7",
  },
  {
    type: "whatsapp",
    date: "3",
  },
  {
    type: "whatsapp",
    date: "1",
  },
  {
    type: "whatsapp",
    date: "10",
  },
]

export const mockListBillStartReminders: Array<ListBill> = [
  {
    type: "whatsapp",
    date: "7",
  },
  {
    type: "mail",
    date: "3",
  },
  {
    type: "whatsapp",
    date: "1",
  },
]

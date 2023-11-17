export interface MockDataTypes {
  id: number
  student: {
    grade: string
    level: string
    name: string
    shift: string
    status: {
      id: number
      label: string
    }
  },
  payment: {
    amount: string
    code: string
    concept: string
    date: string
    status: {
      id: number
      label: string
    }
  },
  bill: {
    amount: string
    code: string
    concept: string
    date: string
    status: {
      id: number
      label: string
    }
  },
}

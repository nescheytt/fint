export const setColorSchemeBadge = (id: number) => {
  if (id === 1 || id === 3) return 'green'
  if (id === 2) return 'gray'
  if (id === 4) return 'red'
  if (id === 5) return 'orange'
  if (id === 6) return 'blue'
  if (id === 7 || id === 8) return 'purple'
  return undefined
};
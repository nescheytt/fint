export const setColorSchemeBadge = (id: number) => {
  if (id === 1 || id === 3 || id === 5 || id === 6) return 'green'
  if (id === 4 || id === 7) return 'red'
  if (id === 2) return 'gray'
  return undefined
};
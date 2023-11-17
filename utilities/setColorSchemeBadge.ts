export const setBgColorStatus = (id: number) => {
  if (id === 1) return 'success.50'
  if (id === 2) return 'gray.100'
  if (id === 3) return 'error.50'
  return undefined
};
  
export const setColorTextStatus = (id: number) => {
  if (id === 1) return 'success.700'
  if (id === 2) return 'gray.700'
  if (id === 3) return 'error.700'
  return undefined
};

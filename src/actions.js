export const CREATE_GARBAGE = 'CREATE_GARBAGE'
export const createGarbage = (garbage) => ({
  type: CREATE_GARBAGE,
  garbage
})

export const CLEAR_GARBAGE = 'CLEAR_GARBAGE'
export const clearGarbage = () => ({
  type: CLEAR_GARBAGE
})


export const incrementMickeysToontown = id => {
  return {
    type: 'INCREMENT_MICKEYSTOONTOWN',
    payload: { id }
  }
}

export const decrementMickeysToontown = id => {
  return {
    type: 'DECREMENT_MICKEYSTOONTOWN',
    payload: { id }
  }
}

export const incrementNola= id => {
  return {
    type: 'INCREMENT_NOLA',
    payload: { id }
  }
}

export const decrementNola = id => {
  return {
    type: 'DECREMENT_NOLA',
    payload: { id }
  }
}

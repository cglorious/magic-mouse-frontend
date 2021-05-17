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

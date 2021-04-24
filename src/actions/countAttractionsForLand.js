export const incrementStarWars = id => {
  return {
    type: 'INCREMENT_STARWARS',
    payload: { id }
  }
}

export const decrementStarWars = id => {
  return {
    type: 'DECREMENT_STARWARS',
    payload: { id }
  }
}

export const incrementFantasyland = id => {
  return {
    type: 'INCREMENT_FANTASYLAND',
    payload: { id }
  }
}

export const decrementFantasyland = id => {
  return {
    type: 'DECREMENT_FANTASYLAND',
    payload: { id }
  }
}

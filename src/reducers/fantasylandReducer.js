const fantasylandReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_FANTASYLAND':
      return {...state, list: action.payload }
    case 'INCREMENT_FANTASYLAND':
      const incrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      incrementObj.count += 1
      return state
    case 'DECREMENT_FANTASYLAND':
      const decrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      if (decrementObj.count >= 1){
        decrementObj.count -= 1
      }
      return state
    default:
      return state;
  }
}

export default fantasylandReducer;

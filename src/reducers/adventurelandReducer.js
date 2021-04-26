const adventurelandReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_ADVENTURELAND':
      return {list: action.payload }
    case 'INCREMENT_ADVENTURELAND':
      const incrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      incrementObj.count += 1
      return state
    case 'DECREMENT_ADVENTURELAND':
      const decrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      if (decrementObj.count >= 1){
        decrementObj.count -= 1
      }
      return state
    break;
    default:
      return state;
  }
}

export default adventurelandReducer;

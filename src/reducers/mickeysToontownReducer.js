const mickeysToontownReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_MICKEYSTOONTOWN':
      return {list: action.payload }
    case 'INCREMENT_MICKEYSTOONTOWN':
      const incrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      incrementObj.count += 1
      return state
    case 'DECREMENT_MICKEYSTOONTOWN':
      const decrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      if (decrementObj.count >= 1){
        decrementObj.count -= 1
      }
    break;
    default:
      return state;
  }
}

export default mickeysToontownReducer;

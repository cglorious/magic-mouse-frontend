const mainstreetReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_MAINSTREET':
      return {list: action.payload }
    case 'INCREMENT_MAINSTREET':
      const incrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      incrementObj.count += 1
      return state
    case 'DECREMENT_MAINSTREET':
      const decrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      if (decrementObj.count >= 1){
        decrementObj.count -= 1
      }
    default:
      return state;
  }
}

export default mainstreetReducer;

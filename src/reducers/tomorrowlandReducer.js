const tomorrowlandReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_TOMORROWLAND':
      return {list: action.payload }
    case 'INCREMENT_TOMORROWLAND':
      const incrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      incrementObj.count += 1
      return state
    case 'DECREMENT_TOMORROWLAND':
      const decrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      if (decrementObj.count >= 1){
        decrementObj.count -= 1
      }
      break;
    default:
      return state;
  }
}

export default tomorrowlandReducer;

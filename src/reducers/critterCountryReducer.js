const critterCountryReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_CRITTERCOUNTRY':
      return {list: action.payload }
    case 'INCREMENT_CRITTERCOUNTRY':
      const incrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      incrementObj.count += 1
      return state
    case 'DECREMENT_CRITTERCOUNTRY':
      const decrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      if (decrementObj.count >= 1){
        decrementObj.count -= 1
      }
    default:
      return state;
  }
}

export default critterCountryReducer;

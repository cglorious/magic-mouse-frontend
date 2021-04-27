const starWarsReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_STARWARS':
      return {...state, list: action.payload }
    case 'INCREMENT_STARWARS':
      const incrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      const newCount = incrementObj.count += 1
      const id = incrementObj.id
      return state
      //spread operator
    case 'DECREMENT_STARWARS':
      const decrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      if (decrementObj.count >= 1){
        decrementObj.count -= 1
      }
      return state
    case 'UPDATE_COUNT':
      return state
    default:
      return state;
  }
}

export default starWarsReducer;

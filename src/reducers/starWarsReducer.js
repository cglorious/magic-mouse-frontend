const starWarsReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_STARWARS':
      return {...state, list: action.payload }
    case 'INCREMENT':
      const incrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      incrementObj.count += 1
      return state
    case 'DECREMENT':
      const decrementObj = state.list.find(attraction => (attraction.id === action.payload.id))
      if (decrementObj.count >= 1){
        decrementObj.count -= 1
      }
      return state
    default:
      return state;
  }
}

export default starWarsReducer;

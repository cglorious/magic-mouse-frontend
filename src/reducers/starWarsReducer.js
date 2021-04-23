const starWarsReducer = (state = {list: [], count: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_STARWARS':
      const attractions = action.payload
      const array = state.count
      attractions.map(attraction => {
        array.push(attraction.count)
      })
      return {...state, list: action.payload }
    case 'INCREMENT':
      const incrementList = state.list
      return incrementList.map((attraction, id) => {
        const index = id - 1
        if (action.payload.id === attraction.id) {
          return state.count[index] += 1
        }
      })
    case 'DECREMENT':
        return {...state, count: state.count - 1}
    default:
      return state;
  }
}

export default starWarsReducer;

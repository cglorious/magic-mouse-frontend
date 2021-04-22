const starWarsReducer = (state = {list: [], count: 0}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_STARWARS':
      return {...state, list: action.payload }
    case 'INCREMENT':
      return {...state, count: state.count + 1}
    case 'DECREMENT':
        return {...state, count: state.count - 1}
    default:
      return state;
  }
}

export default starWarsReducer;

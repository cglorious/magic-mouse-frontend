const starWarsReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_STARWARS':
      return {list: action.payload }
    default:
      return state;
  }
}

export default starWarsReducer;

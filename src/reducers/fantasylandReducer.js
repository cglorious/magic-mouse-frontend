const fantasylandReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_FANTASYLAND':
      return {list: action.payload }
    default:
      return state;
  }
}

export default fantasylandReducer;

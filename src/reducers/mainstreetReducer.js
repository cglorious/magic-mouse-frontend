const mainstreetReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_MAINSTREET':
      return {list: action.payload }
    default:
      return state;
  }
}

export default mainstreetReducer;

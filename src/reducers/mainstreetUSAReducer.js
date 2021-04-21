const mainstreetUSAReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_MAINSTREETUSA':
      return {list: action.payload }
    default:
      return state;
  }
}

export default mainstreetUSAReducer;

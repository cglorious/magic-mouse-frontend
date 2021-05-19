const mainstreetReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_MAINSTREET':
      return {...state, list: [...state.list, action.payload] }
    break;
    default:
      return state;
  }
}

export default mainstreetReducer;

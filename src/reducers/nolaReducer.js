const nolaReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_NOLA':
      return {...state, list: action.payload }
    break;
    default:
      return state;
  }
}

export default nolaReducer;

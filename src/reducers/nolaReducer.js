const nolaReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_NOLA':
      return {list: action.payload }
    default:
      return state;
  }
}

export default nolaReducer;

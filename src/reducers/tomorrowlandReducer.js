const tomorrowlandReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_TOMORROWLAND':
      return {...state, list: action.payload }
      break;
    default:
      return state;
  }
}

export default tomorrowlandReducer;

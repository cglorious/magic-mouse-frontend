const tomorrowlandReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_TOMORROWLAND':
      return {list: action.payload }
    default:
      return state;
  }
}

export default tomorrowlandReducer;

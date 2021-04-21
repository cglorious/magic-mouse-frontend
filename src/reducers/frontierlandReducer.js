const frontierlandReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_FRONTIERLAND':
      return {list: action.payload }
    default:
      return state;
  }
}

export default frontierlandReducer;

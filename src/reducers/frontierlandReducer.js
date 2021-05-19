const frontierlandReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_FRONTIERLAND':
      return {...state, list: action.payload }
    break;
    default:
      return state;
  }
}

export default frontierlandReducer;

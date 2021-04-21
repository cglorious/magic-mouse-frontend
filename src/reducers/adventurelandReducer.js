const adventurelandReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_ADVENTURELAND':
      return {list: action.payload }
    default:
      return state;
  }
}

export default adventurelandReducer;

const adventurelandReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_ADVENTURELAND':
      return {...state, list: [...state.list, action.payload] }
    break;
    default:
      return state;
  }
}

export default adventurelandReducer;

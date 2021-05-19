const mickeysToontownReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_MICKEYSTOONTOWN':
      return {...state, list: [...state.list, action.payload] }
    break;
    default:
      return state;
  }
}

export default mickeysToontownReducer;

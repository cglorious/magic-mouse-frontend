const mickeysToontownReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_MICKEYSTOONTOWN':
      return {list: action.payload }
    default:
      return state;
  }
}

export default mickeysToontownReducer;

const addAttractionReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'ADD_ATTRACTION':
      return {...state, list: action.payload}
    default:
      return state;
  }
}

export default addAttractionReducer;

const landsReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'FETCH_LANDS':
      return {...state, list: action.payload }
    default:
      return state;
  }
}

export default landsReducer;

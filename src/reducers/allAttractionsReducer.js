const allAttractionsReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'ADD_ATTRACTION':
      return {...state, list: [...state.list, action.payload]}
    default:
      return state;
  }
}

export default allAttractionsReducer;

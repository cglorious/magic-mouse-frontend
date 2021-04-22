const counterReducer = (state = {count: 0}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      if (state.id === action.id) {
        return {...state, count: state.count + 1}
      } else {
        return state
      }
    case 'DECREMENT':
      if (state.id === action.id) {
        return {...state, count: state.count - 1}
      } else {
        return state
      }
    default:
      return state;
  }
}

export default counterReducer;

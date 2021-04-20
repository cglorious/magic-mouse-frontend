const attractionsReducer = (state = {
  list: [],
  count: 0
}, action) => {
  switch(action.type) {
    case 'FETCH_ATTRACTIONS':
      return { list: action.payload, count: 0 }
    default:
      return state;
  }
}

export default attractionsReducer;

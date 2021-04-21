const attractionsReducer = (state = {
  list: [],
  // {attraction_id: attractions}
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

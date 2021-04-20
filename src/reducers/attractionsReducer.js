const attractionsReducer = (state = { list: [] }, action) => {
  switch(action.type) {
    case 'FETCH_ATTRACTIONS':
      return { list: action.payload }
    default:
      return state;
  }
}

export default attractionsReducer;

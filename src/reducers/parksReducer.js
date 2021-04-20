const parksReducer = (state = { list: [] }, action) => {
  switch(action.type) {
    case 'FETCH_PARKS':
      return { list: action.payload }
    // case 'FIND_PARKS':
    //   return { list: action.payload }
    default:
      return state;
  }
}

export default parksReducer;

const resortsReducer = (state = { list: [] }, action) => {
  switch(action.type) {
    case 'FETCH_RESORTS':
      return { list: action.payload }
    default:
      return state;
  }
}

export default resortsReducer;

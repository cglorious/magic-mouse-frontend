const resortsReducer = (state = { resorts: [] }, action) => {
  switch(action.type) {
    case 'FETCH_RESORTS':
      return { resorts: action.payload }
    default:
      return state;
  }
}

export default resortsReducer;

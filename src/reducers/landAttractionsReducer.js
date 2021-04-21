const landAttractionsReducer = (state = {list: [] }, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_LAND':
      return { list: action.payload }
    default:
      return state;
  }
}

export default landAttractionsReducer;

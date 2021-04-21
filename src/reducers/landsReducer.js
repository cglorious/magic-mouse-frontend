const landsReducer = (state = {
  list: []
  //attractions: []
}, action) => {
  switch(action.type) {
    case 'FETCH_LANDS':
      return {
        list: action.payload
        //attractions: []
      }
    //LOAD ATTRACTIONS FOR LAND
    default:
      return state;
  }
}

export default landsReducer;

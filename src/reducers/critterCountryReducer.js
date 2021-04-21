const critterCountryReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_CRITTERCOUNTRY':
      return {list: action.payload }
    default:
      return state;
  }
}

export default critterCountryReducer;

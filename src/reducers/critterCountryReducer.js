const critterCountryReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_ATTRACTIONS_FOR_CRITTERCOUNTRY':
      return {list: action.payload }
    break;
    default:
      return state;
  }
}

export default critterCountryReducer;

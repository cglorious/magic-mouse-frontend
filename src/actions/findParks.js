export const findParks = resortId => {
  //find parks where resort_id === resortId
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/resorts/${resortId}`)
    .then(resp => resp.json())
    .then(parks => {
      dispatch({
        type: 'FIND_PARKS',
        payload: parks.data.attributes.parks})
    })
  }
}

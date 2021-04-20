export const findAttractions = landId => {
  //find attraction where land_id === landId
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/lands/${landId}`)
    .then(resp => resp.json())
    .then(lands => {
      dispatch({
        type: 'FIND_PARKS',
        payload: lands.data.attributes.attractions})
    })
  }
}

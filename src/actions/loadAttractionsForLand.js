export const loadAttractionsForLand = landId => {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/lands/${landId}`)
    .then(resp => resp.json())
    .then(lands => {
      dispatch({
        type: 'LOAD_ATTRACTIONS_FOR_LAND',
        payload: lands.data.attributes.attractions})
    })
  }
}

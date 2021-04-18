export function fetchParks () {
  return(dispatch) => {
    fetch('http://localhost:3000/api/v1/parks')
    .then(resp => resp.json())
    .then(parks => {
      dispatch({
        type: 'FETCH_PARKS',
        payload: parks.data})
    })
  }
}

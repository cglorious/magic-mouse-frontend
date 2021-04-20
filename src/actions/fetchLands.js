export const fetchLands = () => {
  return(dispatch) => {
    fetch('http://localhost:3000/api/v1/lands')
    .then(resp => resp.json())
    .then(lands => {
      dispatch({
        type: 'FETCH_LANDS',
        payload: lands.data})
    })
  }
}

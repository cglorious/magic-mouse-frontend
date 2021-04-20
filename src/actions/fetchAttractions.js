export const fetchAttractions = () => {
  return(dispatch) => {
    fetch('http://localhost:3000/api/v1/attractions')
    .then(resp => resp.json())
    .then(lands => {
      dispatch({
        type: 'FETCH_ATTRACTIONS',
        payload: lands.data})
    })
  }
}

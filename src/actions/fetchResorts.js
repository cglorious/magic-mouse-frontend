export const fetchResorts = () => {
  return(dispatch) => {
    fetch('http://localhost:3000/api/v1/resorts')
    .then(resp => resp.json())
    .then(resorts => {
      dispatch({
        type: 'FETCH_RESORTS',
        payload: resorts.data})
    })
  }
}

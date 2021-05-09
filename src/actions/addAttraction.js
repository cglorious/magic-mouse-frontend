export const addAttraction = (data) => {
  debugger
  return(dispatch) => {
    fetch('http://localhost:3000/api/v1/attractions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
      })
    .then(resp => resp.json())
    .then(lands => {
      dispatch({
        type: 'FETCH_ATTRACTIONS',
        payload: lands.data})
    })
  }
}

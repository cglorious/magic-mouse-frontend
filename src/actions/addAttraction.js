export const addAttraction = (data) => {
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
    .then(attraction => {
      dispatch({
        type: 'ADD_ATTRACTION',
        payload: attraction})
    })
  }
}

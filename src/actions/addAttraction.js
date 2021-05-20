export const addAttraction = (data) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
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
        console.log('d')
        dispatch({
          type: 'ADD_ATTRACTION',
          payload: attraction
        })
      })
    console.log('e')
  }
  console.log('f')
}

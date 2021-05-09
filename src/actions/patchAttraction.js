export const patchStarWars = (attraction) => {
  debugger
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/attractions/${attraction.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'count': attraction.count
      }),
    })
    // .then(resp => resp.json())
    // .then(json => {
    //   // dispatch({
    //   //   type: 'UPDATE_COUNT',
    //   //   payload: attraction.data
    //   // })
    //   console.log(`${json.data.attributes.name}: ${json.data.attributes.count}`)
    // })
  }
}

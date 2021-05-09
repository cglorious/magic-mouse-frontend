// export const incrementStarWars = id => {
//   return (dispatch) => {
//     dispatch({
//     type: 'INCREMENT_STARWARS',
//     payload: { id }
//     })
//   }
// }

export const patchStarWars = (count, id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/attractions/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'count': count
      }),
    })
    .then(resp => resp.json())
    .then(attraction => {
      dispatch({
        type: 'UPDATE_COUNT',
        payload: attraction.data
      })
    })
  }
}

export const patchStarWars = (count, id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/attractions/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({count: count}),
    })
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type: 'UPDATE_COUNT'
      })
    });
  // .catch((error) => {
  //   console.error('Error:', error);
  // })
  };

//dispatch...{action}
// export const fetchAttractions = () => {
//   return(dispatch) => {
//     fetch('http://localhost:3000/api/v1/attractions')
//     .then(resp => resp.json())
//     .then(lands => {
//       dispatch({
//         type: 'FETCH_ATTRACTIONS',
//         payload: lands.data})
//     })
//   }
// }

//next - dispatch

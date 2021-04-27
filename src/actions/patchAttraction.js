export const patchStarWars = (id) => {
  return ({dispatch}) => {
    fetch(`http://localhost:3000/api/v1/attractions/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({count: count +=1}),
    })
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type: 'UPDATE_COUNT'
      })
    });
  };

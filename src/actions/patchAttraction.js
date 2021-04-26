export const patchStarWars = (count, id) => {
  fetch(`http://localhost:3000/api/v1/attractions/${id}`,
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({count: count}),
  })
  .then(resp => resp.json())
  .then(data => console.log('Success:', data));
  // .catch((error) => {
  //   console.error('Error:', error);
  // })
  };

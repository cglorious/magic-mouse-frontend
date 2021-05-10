export const patchStarWars = (attraction) => {
  // console.log(attraction.count)
  return (dispatch) => {
  fetch(`http://localhost:3000/api/v1/attractions/${attraction.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "count": `${attraction.count}`
    })
  })
  //   .then(resp => resp.json())
  //   .then(json => {
  //     dispatch({
  //       type: 'UPDATE_COUNT',
  //       payload: json.data
  //     })
  //   })
  }
}

// fetch(`http://localhost:3000/api/v1/attractions/${attraction.id}`, {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify({
//     "count": `${attraction.count}`
//   }),
// })

// fetch(`http://localhost:3000/api/v1/attractions/${attraction.id}`, {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json-patch+json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify({
//     "op": "replace", "path": "/count", "value": `${attraction.count}`
//   }),
// })

// fetch(`http://localhost:3000/api/v1/attractions`, {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify({
//     "name": `${attraction.name}`,
//     "image_url": `${attraction.image_url}`,
//     "closure": false,
//     "land_id": `${attraction.land_id}`,
//     "count": `${attraction.count}`
// })
// })

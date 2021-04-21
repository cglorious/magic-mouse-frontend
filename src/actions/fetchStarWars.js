export const fetchStarWars = () => {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/lands/1`)
    .then(resp => resp.json())
    .then(land => {
      dispatch({
        type: 'LOAD_ATTRACTIONS_FOR_STARWARS',
        payload: land.data.attributes.attractions})
    })
  }
}

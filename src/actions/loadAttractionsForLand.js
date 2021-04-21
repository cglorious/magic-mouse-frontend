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

export const fetchFantasyland = () => {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/lands/2`)
    .then(resp => resp.json())
    .then(land => {
      dispatch({
        type: 'LOAD_ATTRACTIONS_FOR_FANTASYLAND',
        payload: land.data.attributes.attractions})
    })
  }
}

export const fetchTomorrowland = () => {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/lands/3`)
    .then(resp => resp.json())
    .then(land => {
      dispatch({
        type: 'LOAD_ATTRACTIONS_FOR_TOMORROWLAND',
        payload: land.data.attributes.attractions})
    })
  }
}

export const fetchAdventureland = () => {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/lands/4`)
    .then(resp => resp.json())
    .then(land => {
      dispatch({
        type: 'LOAD_ATTRACTIONS_FOR_ADVENTURELAND',
        payload: land.data.attributes.attractions})
    })
  }
}

export const fetchCritterCountry = () => {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/lands/5`)
    .then(resp => resp.json())
    .then(land => {
      dispatch({
        type: 'LOAD_ATTRACTIONS_FOR_CRITTERCOUNTRY',
        payload: land.data.attributes.attractions})
    })
  }
}

export const fetchFrontierland = () => {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/lands/6`)
    .then(resp => resp.json())
    .then(land => {
      dispatch({
        type: 'LOAD_ATTRACTIONS_FOR_FRONTIERLAND',
        payload: land.data.attributes.attractions})
    })
  }
}

export const fetchMainstreetUSA= () => {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/lands/7`)
    .then(resp => resp.json())
    .then(land => {
      dispatch({
        type: 'LOAD_ATTRACTIONS_FOR_MAINSTREETUSA',
        payload: land.data.attributes.attractions})
    })
  }
}

export const fetchMickeysToonTown= () => {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/lands/8`)
    .then(resp => resp.json())
    .then(land => {
      dispatch({
        type: 'LOAD_ATTRACTIONS_FOR_MICKEYSTOONTOWN',
        payload: land.data.attributes.attractions})
    })
  }
}

export const fetchNOLA= () => {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/lands/9`)
    .then(resp => resp.json())
    .then(land => {
      dispatch({
        type: 'LOAD_ATTRACTIONS_FOR_NOLA',
        payload: land.data.attributes.attractions})
    })
  }
}

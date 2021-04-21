import { combineReducers } from "redux";
import landsReducer from './landsReducer';
import landAttractionsReducer from './landAttractionsReducer';
import attractionsReducer from './attractionsReducer';
import starWarsReducer from './starWarsReducer';

const rootReducer = combineReducers({
  lands: landsReducer,
  landAttractions: landAttractionsReducer,
  attractions: attractionsReducer,
  starWars: starWarsReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import landsReducer from './landsReducer';
import landAttractionsReducer from './landAttractionsReducer';
import attractionsReducer from './attractionsReducer';

const rootReducer = combineReducers({
  lands: landsReducer,
  landAttractions: landAttractionsReducer,
  attractions: attractionsReducer
});

export default rootReducer;

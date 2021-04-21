import { combineReducers } from "redux";
import landsReducer from './landsReducer';
import attractionsReducer from './attractionsReducer';
import starWarsReducer from './starWarsReducer';

const rootReducer = combineReducers({
  lands: landsReducer,
  attractions: attractionsReducer,
  starWars: starWarsReducer
});

export default rootReducer;

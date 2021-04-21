import { combineReducers } from "redux";
import landsReducer from './landsReducer';
import attractionsReducer from './attractionsReducer';
import starWarsReducer from './starWarsReducer';
import fantasylandReducer from './fantasylandReducer';

const rootReducer = combineReducers({
  lands: landsReducer,
  attractions: attractionsReducer,
  starWars: starWarsReducer,
  fantasyland: fantasylandReducer
});

export default rootReducer;

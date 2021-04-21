import { combineReducers } from "redux";
import landsReducer from './combine/landsReducer';
import attractionsReducer from './combine/attractionsReducer';
import starWarsReducer from './combine/starWarsReducer';
import fantasylandReducer from './combine/fantasylandReducer';

const rootReducer = combineReducers({
  lands: landsReducer,
  attractions: attractionsReducer,
  starWars: starWarsReducer,
  fantasyland: fantasylandReducer
});

export default rootReducer;

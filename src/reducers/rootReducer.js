import { combineReducers } from "redux";
import landsReducer from './landsReducer';
import starWarsReducer from './starWarsReducer';
import fantasylandReducer from './fantasylandReducer';
import tomorrowlandReducer from './tomorrowlandReducer';
import adventurelandReducer from './adventurelandReducer';
import critterCountryReducer from './critterCountryReducer';
import frontierlandReducer from './frontierlandReducer';
import mainstreetReducer from './mainstreetReducer';
import mickeysToontownReducer from './mickeysToontownReducer';
import nolaReducer from './nolaReducer';

const rootReducer = combineReducers({
  lands: landsReducer,
  starWars: starWarsReducer,
  fantasyland: fantasylandReducer,
  tomorrowland: tomorrowlandReducer,
  adventureland: adventurelandReducer,
  critterCountry: critterCountryReducer,
  frontierland: frontierlandReducer,
  mainstreet: mainstreetReducer,
  mickeysToontown: mickeysToontownReducer,
  nola: nolaReducer
});

export default rootReducer;

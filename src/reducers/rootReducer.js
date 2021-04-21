import { combineReducers } from "redux";
import landsReducer from './landsReducer';
import attractionsReducer from './attractionsReducer';
import starWarsReducer from './starWarsReducer';
import fantasylandReducer from './fantasylandReducer';
// import tomorrowlandReducer from './tomorrowlandReducer';
// import adventurelandReducer from './adventurelandReducer';
// import critterCountryReducer from './critterCountryReducer';
// import frontierlandReducer from './frontierlandReducer';
// import mainstreetUSAReducer from './mainstreetUSAReducer';
// import mickeysToontownReducer from './mickeysToontownReducer';
// import nolaReducer from './nolaReducer';

const rootReducer = combineReducers({
  lands: landsReducer,
  attractions: attractionsReducer,
  starWars: starWarsReducer,
  fantasyland: fantasylandReducer
});

export default rootReducer;

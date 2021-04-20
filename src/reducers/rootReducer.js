import { combineReducers } from "redux";
import resortsReducer from './resortsReducer';
import parksReducer from './parksReducer';
import landsReducer from './landsReducer';

const rootReducer = combineReducers({
  resorts: resortsReducer,
  parks: parksReducer,
  lands: landsReducer
});

export default rootReducer;

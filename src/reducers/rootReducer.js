import { combineReducers } from "redux";
import resortsReducer from './resortsReducer';
import parksReducer from './parksReducer';

const rootReducer = combineReducers({
  resorts: resortsReducer,
  parks: parksReducer
});

export default rootReducer;

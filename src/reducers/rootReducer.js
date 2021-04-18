import { combineReducers } from "redux";
import resortsReducer from './resortsReducer';

const rootReducer = combineReducers({
  resorts: resortsReducer
});

export default rootReducer;

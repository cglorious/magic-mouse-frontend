import resortsReducer from './resortsReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  resorts: resortsReducer
});

export default rootReducer;

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';

import App from './App';

//application communicates with Redux DevTools Chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//tell store to use the thunk middleware
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)) )

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

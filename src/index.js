import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import * as ReactRedux from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';
import './index.scss';
import mainReducer from './reducers/main';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  mainReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

const baseComponent = (
  <React.StrictMode>
    <Router>
      <ReactRedux.Provider store={store}>
        <App />
      </ReactRedux.Provider>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(baseComponent, document.getElementById('root'));

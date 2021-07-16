import './index.css';

import { applyMiddleware, createStore } from 'redux';

import Boxcon from './container/box-container.js';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers/index.js';
import thunk from 'redux-thunk';

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return <Boxcon></Boxcon>;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

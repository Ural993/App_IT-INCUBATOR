import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/redux-store';
import { Provider } from 'react-redux';
import { stat } from 'fs';
let rerenderEntierTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </Provider>,
    document.getElementById('root')

  );
}
rerenderEntierTree()
store.subscribe(rerenderEntierTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

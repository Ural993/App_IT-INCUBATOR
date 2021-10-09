import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { name: 'Vovs', id: '1' },
  { name: 'Petr', id: '2' },
  { name: 'Sasha', id: '3' },
  { name: 'Dimich', id: '4' }
]
let messages = [
  { message: 'Hi, how are yoy?' },
  { message: 'Whre are you?' },
  { message: 'I am fine' }
]
let posts = [
  { post: 'Hi, how are yoy?' },
  { post: 'Whre are you?' },
  { post: 'I am fine' }
]
ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import firebase from 'firebase';

// firebase.initializeApp({
//   apiKey: 'AIzaSyDKj-o5N6Tf2T8kPnGh2czV-nTgtHwKhQo',
//   authDomain: 'webjohan-59a0f.firebaseapp.com',
//   databaseURL: 'https://webjohan-59a0f.firebaseio.com',
  // projectId: 'webjohan-59a0f',
  // storageBucket: 'webjohan-59a0f.appspot.com',
  // messagingSenderId: '497271018898',
  // appId: '1:497271018898:web:0ee7d7ab552d099a105d4b',
// });

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

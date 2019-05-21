import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/header.css';
import './css/topBar.css';
import './css/list.css';
import './css/footer.css';
import MyWallet from './containers/MyWallet';


ReactDOM.render(<MyWallet />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

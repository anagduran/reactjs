import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, hashHistory, BrowserRouter} from 'react-router-dom';


// Importamos los componentes

import DetailsContainer from './containers/DetailsContainer';


import * as serviceWorker from './serviceWorker';
import BaseContainer from './containers/BaseContainer/BaseContainer';
import About from './components/About';

ReactDOM.render(
    <BrowserRouter>
      <Route path='/' component = {BaseContainer}/>
      <Route path=':user/:repo' component={DetailsContainer} />
      <Route path='about' component = {About}/>


    </BrowserRouter>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

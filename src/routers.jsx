/**
 * Created by Moudi on 2017/3/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import Homepage from './components/Homepage.jsx';
import Sexdata from './components/Sexdata.jsx';
import Attentiondata from './components/Attentiondata.jsx';
import Fansdata from './components/Fansdata.jsx';
import Friendsdata from './components/Friendsdata.jsx';
import Placedata from './components/Placedata.jsx';
import Birthdaydata from './components/Birthdaydata.jsx';
import Spuserdata from './components/Spuserdata.jsx';
import Vuserdata from './components/Vuserdata.jsx';
import NotFind from './components/NotFind.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage}/>
      <Route path="sex" component={Sexdata}/>
      <Route path="attention" component={Attentiondata}/>
      <Route path="fans" component={Fansdata}/>
      <Route path="friends" component={Friendsdata}/>
      <Route path="place" component={Placedata}/>
      <Route path="birthday" component={Birthdaydata}/>
      <Route path="spuser" component={Spuserdata}/>
      <Route path="vuser" component={Vuserdata}/>
      <Route path="*" component={NotFind} />
    </Route>
  </Router>
  , document.getElementById('app')
);
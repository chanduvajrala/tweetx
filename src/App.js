import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themePalette from './util/theme';
import jwtDecode from 'jwt-decode';

import home from './pages/home.js'
import login from './pages/login.js'
import signup from './pages/signup.js'

import Navbar from './components/Navbar.js';
import AuthRoute from './util/AuthRoute';

import axios from 'axios';
import {Provider} from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

const theme = createMuiTheme(themePalette);
// let authenticated;
// const token = localStorage.FBIdToken;
// if(token){
//   const decodedToken = jwtDecode(token);
//   if(decodedToken.exp * 1000 < Date.now()){
//     window.location.href = '/login';
//     authenticated = false;
//   } else{
//     authenticated=true;
//   }
// }
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path='/' component = {login}/>
              <Route exact path='/home' component = {home}/>
              <AuthRoute exact path='/login' component = {login} /*authenticated={authenticated}*//>
              <AuthRoute exact path='/signup' component = {signup} /*authenticated={authenticated}*//>
            </Switch>
          </div>
        </Router>
      </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;

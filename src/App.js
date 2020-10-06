import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registation from './components/Registation/Registation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotMatch from './components/NotMatch/NotMatch';
import Event from './components/event/Event';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/reg/:id">
              <Registation />
            </PrivateRoute>
            <Route path="/event">
              <Event />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;

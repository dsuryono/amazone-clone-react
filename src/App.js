import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { myFirebase } from './firebase';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = myFirebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

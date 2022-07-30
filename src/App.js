import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
import {auth} from '../src/firebase';
import { useStateValue } from './components/StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51LIscOSBVFKQ9Wh8ziIUz5z1A8SbvjaBwtXJSQEtWlNvVnONIDszajuUBl43xEPDq2EqYHRqiATxkwo7oJQ9NusZ00R2QmzhII');

function App() {

  const[{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>> ', authUser);

      if(authUser){
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  } , []);

  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path='/login' element={
            <Login />
          }/>

          <Route path='/checkout' element={
            <div>
              <Header />
              <Checkout />
            </div>
          }/>

          <Route path='/payment' element={
            <div>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </div>
          }/>

          <Route path='/orders' element={
            <div>
              <Header />
              <Orders />
            </div>
          } />

          <Route path='/' element={
            <div>
              <Header />
              <Home />
            </div>
          }/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;

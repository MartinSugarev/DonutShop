import React, {memo} from 'react'
import {Routes, Route} from 'react-router-dom'
import StartScreen from './components/StartScreen/StartScreen';
import Menu from './components/Menu/Menu';
import Payment from './components/Payment/Payment';
import Preparation from './components/Preparation/Preparation';
import Ready from './components/Ready/Ready'

function App() {
  return (
    <Routes>
         <Route path="/ready" element={<Ready/>} />
        <Route path="/preparation" element={<Preparation/>} />
       <Route path="/payment" element={<Payment/>} />
       <Route path="/menu" element={<Menu/>} />
       <Route path="/" element={<StartScreen />} />
    </Routes>
  );
}

export default memo(App);

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
       <Route path="/" element={<StartScreen />} />
       <Route path="/menu" element={<Menu/>} />
    </Routes>
  );
}

export default memo(App);

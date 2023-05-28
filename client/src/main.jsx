import React from 'react'
import Nav from './Componets/Nav/Nav'
import './style.css'
import ReactDOM from 'react-dom';
import Hero from './Componets/Hero/Hero'
import Frame from './Componets/Frame/Frame'
import CallMe from './Componets/CallMe/CallMe'
import PPL from './Componets/PPL/PPL'
import Photos from './Componets/Photos/Photos'
import Night from './Componets/Night/Night'
import Join from './Componets/Inferno-Join/Join';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Nav/>
    <Hero/>
    <Frame/>
    <CallMe/>
    <PPL/>
    <Photos/>
    <Night/>
    <Join/>
  </div>
)

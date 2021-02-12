import React from 'react'
import './App.scss';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation'
import Submenu from './components/Submenu/Submenu';
import Duyurular from './components/Duyurular/Duyurular'

function App() {
  return (
    <div>
      <Navigation className="navigation"/>
      <Hero/>
      <Submenu/>
      <Duyurular/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Menu from './components/menu/menu'
import RechercheForm from './components/rechercheForm/rechercheForm'

function App() {
  return (
    <div className="App">
      <Menu />

      <RechercheForm />

      <div className="hub-pres">HUB PRES</div>
    </div >
  );
}

export default App;

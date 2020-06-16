import React from 'react';
import './App.css';
import Menu from './components/menu/menu'
import RechercheForm from './components/rechercheForm/rechercheForm'
import Footer from './components/footer/footer'
import Container from './components/container/container'

function App() {
  return (
    <div className="App">
      <Menu />

      <RechercheForm />

      <Container />

      <Footer />
    </div >
  );
}

export default App;

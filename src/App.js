import React from 'react';
import Menu from './components/Menu'
import RechercheForm from './components/RechercheForm'
import Footer from './components/Footer'
import Container from './components/Container'

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

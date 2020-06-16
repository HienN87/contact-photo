import React, { Component } from 'react'
import './menu.css'

class Menu extends Component {

  render() {
    return (
      <div>
        <ul>
          <li><a href="#">Contacter un photographe</a></li>
          <li><a href="#">Je suis photographe</a></li>
        </ul>
        <button>S'inscrire</button>
      </div >
    )
  }

}

export default Menu;

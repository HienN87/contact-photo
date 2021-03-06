import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">
          <NavLink exact to="/" activeClassName="nav-active">
            Contact un photographe
          </NavLink>
        </h5>

        <nav class="my-2 my-md-0 mr-md-3">
          <a class="p-2 text-dark" href="#">
            Je suis photographe
          </a>
          <a class="p-2 text-dark" href="#">
            Me connecter
          </a>
        </nav>

        <a class="btn btn-outline-primary" href="#">
          S'inscrire
        </a>
      </div>
    );
  }
}

export default Menu;

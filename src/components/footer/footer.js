import React, { Component } from 'react'
import './footer.css'
class Footer extends Component {

  render() {
    return (
      <footer>
        <div class="row">
          <div class="col-6 col-md">
            <h5>Nos services</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Carapuce</a></li>
              <li><a class="text-muted" href="#">Carabaffe</a></li>
              <li><a class="text-muted" href="#">Tortank</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>L'entreprise</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">A propos de nous</a></li>
              <li><a class="text-muted" href="#">L'équipe</a></li>
              <li><a class="text-muted" href="#">CGU</a></li>
            </ul>
          </div>
        </div>
        <p className='copyright'>© 2017-2020 Contacte un photographe</p>
      </footer>
    )
  }

}

export default Footer;
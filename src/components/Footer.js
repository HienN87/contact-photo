import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div class="row">
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
      </div>
    )
  }
}

export default Footer;
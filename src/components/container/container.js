import React, { Component } from 'react'

class Menu extends Component {

  render() {
    return (
      <div class="container marketing">
        <h1 class="text-center">Trouver un photographe n'a jamais été aussi easy frère !</h1>
        <br />
        <div class="row">
          <div class="col-lg-4">
            <h2>Je suis venu</h2>
            <p>Tu tapes (non pas taper avec les poings) ta recherche et hop ça va te trouver un gars qui a besoin de tune pour te prendre des photos, en plus c'est lui qui se bouge le cul pour toi !</p>
          </div>
          <div class="col-lg-4"><h2>J'ai vu</h2>
            <p>Bossez pépère sur des projets artisitques de maaldes mental de la mort qui tue sauf que techniquement on peut pas tuer la mort puisqu'il est mort !</p>
          </div>
          <div class="col-lg-4"><h2>J'ai rien foutu</h2>
            <p>Payez et tout le monde est content ouai oiuai sisi après vous êtes contents de ouf parce que c'est magnifaiiiique !</p>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>

        <hr class="featurette-divider" />

      </div>
    )

  }

}

export default Menu;

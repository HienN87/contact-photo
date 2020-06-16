import React, { Component } from 'react'
import './container.css'
import photo from '../../img/jordan-whitfield-qODM8pfwRO4-unsplash.jpg'

class Menu extends Component {

  render() {
    return (
      <div class="position-relative overflow-hidden text-center">

        <h1 class="text-center">Trouver un photographe n'a jamais été aussi easy frère !</h1>

        <div class="row section-1">
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

        <div class="row featurette section-2">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>

          <div class="col-md-5">
            <img src={photo} alt="Girl with camera" width="350" height="500" />
          </div>
        </div>
      </div>
    )

  }

}

export default Menu;

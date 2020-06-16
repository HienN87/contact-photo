import React, { Component } from 'react'
import './rechercheForm.css'

class RechercheForm extends Component {

  render() {
    return (
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <p class="lead font-weight-normal">Des photographes près de ton village oyez !</p>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        <form>
          <div class="row">
            <div class="col"> </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Lieux" />
            </div>
            <div class="col">
              <select id="inputState" class="form-control">
                <option selected>Type</option>
                <option>Mariage</option>
                <option>Portrait</option>
                <option>Voyage</option>
              </select>
            </div>
            <div class="col">
              <button type="button" class="btn btn-primary float-left">Rechercher</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default RechercheForm;

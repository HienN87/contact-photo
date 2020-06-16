import React, { Component } from 'react'
import './rechercheForm.css'

class RechercheForm extends Component {

  render() {
    return (
      <div>
        <form>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Lieux" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Type" />
            </div>
          </div>
        </form>
      </div >
    )
  }
}

export default RechercheForm;

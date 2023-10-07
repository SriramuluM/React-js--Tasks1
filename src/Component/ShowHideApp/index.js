
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  showFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="container2">
          <div className="container3">
            <button type="button" className="btns" onClick={this.showFirstName}>
              Show/Hide FirstName
            </button>
            {showFirstName && <p className="name">Sriram</p>}
          </div>
          <div className="container3">
            <button type="button" className="btns" onClick={this.showLastName}>
              Show/Hide LastName
            </button>
            {showLastName && <p className="name">M</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide;
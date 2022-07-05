// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: false,
    lastCard: false,
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({
      firstCard: !firstCard,
    }))
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState(() => ({
      lastCard: !lastCard,
    }))
  }

  render() {
    const {firstCard, lastCard} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="btn-container">
              <button type="button" className="button" onClick={this.firstName}>
                Show/Hide FirstName
              </button>
              {firstCard ? <p className="paragraph"> Joe</p> : ''}
            </div>
            <div>
              <button type="button" className="button2" onClick={this.lastName}>
                Show/Hide LastName
              </button>
              {lastCard ? <p className="paragraph1">Jonas</p> : ''}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

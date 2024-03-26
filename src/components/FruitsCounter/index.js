import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onEatBanana = () => {
    const {banana} = this.state
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  onEatMango = () => {
    const {mango} = this.state
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="mini-container">
            <div className="eat-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="eat-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisible: false, isLastNameVisible: false}

  isFirstNameVisible = () => {
    this.setState(prevState => ({
      isFirstNameVisible: !prevState.isFirstNameVisible,
    }))
  }

  isLastNameVisible = () => {
    this.setState(prevState => ({
      isLastNameVisible: !prevState.isLastNameVisible,
    }))
  }

  getFirstName = () => (
    <div className="text-card">
      <p className="text">Joe</p>
    </div>
  )

  getLastName = () => (
    <div className="text-card">
      <p className="text">Jonas</p>
    </div>
  )

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state

    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="title">Show/Hide</h1>
          <div className="cards-container">
            <div className="card">
              <button
                type="button"
                className="btn"
                onClick={this.isFirstNameVisible}
              >
                Show/Hide Firstname
              </button>
              {isFirstNameVisible ? this.getFirstName() : null}
            </div>
            <div className="card">
              <button
                type="button"
                className="btn"
                onClick={this.isLastNameVisible}
              >
                Show/Hide Lastname
              </button>
              {isLastNameVisible ? this.getLastName() : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

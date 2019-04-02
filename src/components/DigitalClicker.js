import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timesClicked: 0
    }
  }

  incrementClicks = () => {
    console.log("CLICK", this.state)
    const clicks = this.state.timesClicked
    this.setState({timesClicked: clicks + 1})
  }

  render() {
    return (
      <button onClick={this.incrementClicks}>
        {this.state.timesClicked}
      </button>
    )
  }
}
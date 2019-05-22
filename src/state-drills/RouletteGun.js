import React from 'react';
import './RouletteGun.css';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    }
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true
    })
    this.timeout = setTimeout(() => {
      let newChamber = Math.ceil(Math.random() * 8)
      this.setState({
        chamber: newChamber,
        spinningTheChamber: false
      })
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    let message = `Let's play Russian Roulette`;
    if (this.state.spinningTheChamber) {
      message = 'spinning the chamber and pulling the trigger! ...'
    } else if (this.state.chamber === this.props.bulletInChamber) {
      message = 'BANG!!!!';
    } else if (this.state.chamber) {
      message = `You're safe!`;
    }

    return (
      <div className="RouletteGun">
        <p>{message}</p>
        <button onClick={this.handleClick}>Pull the Trigger!</button>
      </div>
    )
  };
}

RouletteGun.defaultProps = ({
  bulletInChamber: 8
})

export default RouletteGun;
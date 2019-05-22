import React from 'react';
import './Bomb.css';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      display: 'tick'
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
      if (this.state.count > 7) {
        this.setState({
          display: 'BOOM!!!!'
        })
        clearInterval(this.interval);
      }else if (this.state.count % 2 === 0) {
        this.setState({
          display: 'tick'
        })
      } else {
        this.setState({
          display: 'tock'
        })
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div className="Bomb">
      <p>{this.state.display}</p>
    </div>
  }
}

export default Bomb;
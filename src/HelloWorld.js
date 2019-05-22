import React from 'react';

import './HelloWorld.css';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      who: 'world'
    }
  }

  handleButtonClick = (e) => {
    let newWho;
    switch (e.target.innerHTML) {
      case 'World':
        newWho = 'world!'
        break;
      case 'Friend':
        newWho = 'friend!'
        break;
      case 'React':
        newWho = 'React!'
        break;
      default: 
        console.log('Nobody here but us chickens');
    }
    this.setState({
      who: newWho
    });
  }

  render() {
    return <div className="HelloWorld">
      <p>Hello, {this.state.who}</p>
      <button onClick={this.handleButtonClick}>World</button>
      <button onClick={this.handleButtonClick}>Friend</button>
      <button onClick={this.handleButtonClick}>React</button>
    </div>
  }
}

export default HelloWorld;
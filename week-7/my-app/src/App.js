import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';
import EvenCount from './EvenCount';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicks: 0,
    }

    this.updateButtonclickCount = this.updateButtonclickCount.bind(this);

    console.log('component has been constructed');
  };

  updateButtonclickCount() {
    const updatedClicks = this.state.buttonClicks + 1;
    this.setState({
      buttonClicks: updatedClicks,
    })
  }

  componentWillMount() {
    console.log('component is about to mount!');
  }

  componentDidMount() {
    console.log('component has mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
  }

  render() {
    console.log('component is rendering');

    return (
      <div className="App">
        <header className="App-header">
          <h3>Button has been clicked {this.state.buttonClicks} times</h3>
          <Button updateButtonclickCount={this.updateButtonclickCount} />
          <EvenCount
            isEven={this.state.buttonClicks > 0 && this.state.buttonClicks % 2 ===  0}
            buttonClicks={this.state.buttonClicks}
          />
        </header>
      </div>
    );
  }
}

export default App;

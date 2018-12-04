// importing the React runtime & the Component class from React, which we will extend
import React, { Component } from 'react';
// also importing some assets that webpack can load in
import './ClickCounter.css';

// importing some child components
import Button from './components/Button';
import CountIsEven from './components/CountIsEven';

// defining our main application
class ClickCounter extends Component {
  // call the constructor with the props of the parent class
  // the official React docs advocate for this pattern
  // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
  constructor(props) {
    super(props);

    // initializing some internal state for the application that will be updated later
    this.state = {
      buttonClicks: 0,
    }

    // we are binding the updateButtonclickCount method here, because we are passing it down to a
    // child component (Button) for the child to call
    this.updateButtonclickCount = this.updateButtonclickCount.bind(this);

    // this is the first message that will be logged
    console.log('component has been constructed');
  };

  // a method to update the internal state of the App class
  updateButtonclickCount() {
    const updatedClicks = this.state.buttonClicks + 1;

    // use this.setState to update state in a class component. When you use setState,
    // the component lifecycle hooks are triggered & the component re-renders
    // if you directly mutate state, this won't occur
    this.setState({
      buttonClicks: updatedClicks,
    });
  }

  componentWillMount() {
    // this message will be the second message that is logged
    console.log('component is about to mount!');
  }

  componentDidMount() {
    // this message will be the third message that is logged
    console.log('component has mounted!');
  }

  // this method will run every time the state or props of this component change
  componentDidUpdate(prevProps, prevState) {
    console.log('previous props');
    console.log(prevProps);
    console.log('current props');
    console.log(this.props);
    console.log('previous state');
    console.log(prevState);
    console.log('current state');
    console.log(this.state);
  }

  render() {
    // this will be the fourth message to be logged
    console.log('component is rendering');

    return (
      <React.Fragment>
        {/*
          We are using React.Fragment to allow us to render two sibling nodes with no common parent in the DOM
          https://reactjs.org/docs/fragments.html
        */}
        <div className="App">
          <header className="App-header">
            <h3>Button has been clicked {this.state.buttonClicks} times</h3>
            {/* here we are passing down the callback that can update the ClickCounter class's internal state */}
            <Button updateButtonclickCount={this.updateButtonclickCount} />
            {/* here we are simply passing down primitive values for the CountIsEven component to display */}
            <CountIsEven
              // isEven will be a boolean true or false depending on whether the expression below is true or false
              isEven={this.state.buttonClicks > 0 && this.state.buttonClicks % 2 ===  0}
              // this will be a number representing the number of clicks that have been made
              buttonClicks={this.state.buttonClicks}
            />
          </header>
        </div>
        <span>
          I'm a sibling
        </span>
      </React.Fragment>
    );
  }
}

export default ClickCounter;

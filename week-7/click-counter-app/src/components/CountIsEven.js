import React, { Component } from 'react';

// this component will display a message whether the count of how many times the button has been
// clicked is even or odd the component won't update the message until the button has been clicked
// 5 times due to how we are implementing the shouldComponentUpdate method
class CountIsEven extends Component {
  // this will run when the component receives new props, before the component is re-rendered
  componentWillReceiveProps(nextProps) {
    console.log('component is receiving new props');
    console.log('here are the incoming props');
    console.log(nextProps);
    console.log('here are the current props');
    console.log(this.props);
  }

  // if shouldComponentUpdate returns false, the component won't re-render
  shouldComponentUpdate() {
    // don't update the component until the button has been clicked 5 times
    if(this.props.buttonClicks >= 5) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let evenMessage;

    if(this.props.isEven) {
      evenMessage = 'is';
    } else {
      evenMessage = 'is not';
    }

    return (
      // to add an inline style, just use an object with camelCased css properties
      <div
        style={{ marginTop: '25px' }}
      >
        The count {evenMessage} even
      </div>
    );
  }
}

export default CountIsEven;

import React, { Component } from 'react';

class EvenCount extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('component is receiving new props');
    console.log(nextProps);
    console.log(this.props);
  }

  shouldComponentUpdate() {
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
      <div style={{ marginTop: '25px' }}>The count {evenMessage} even</div>
    );
  }
}

export default EvenCount;

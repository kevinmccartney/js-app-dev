import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        {/* here, we are calling the updateButtonclickCount method passed down from the App component */}
        <button onClick={() => this.props.updateButtonclickCount()}>Click me</button>
      </div>
    );
  }
}

export default Button;

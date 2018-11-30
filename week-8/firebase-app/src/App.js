import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      db: {},
    }
  }

  render() {
    return (
      <div className="App">
        <div className="db">
          <code>
            {JSON.stringify(this.state.db, null, 2)}
          </code>
        </div>
      </div>
    );
  }
}

export default App;

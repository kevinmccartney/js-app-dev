import React from 'react';

class AddNote extends React.Component {
  render() {
    return (
      <div>
        Hey, I'm your add component
        <button
          className="btn btn-success add-button"
          onClick={() => this.props.addNote()}
        >
          Add
        </button>
      </div>
    )
  }
}

export default AddNote;

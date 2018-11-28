import React from 'react';

class EditNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: this.props.getNote(this.props.match.params.id)
    }
  }
  render() {
    return (
      <div>Hey, I'm your edit component</div>
    )
  }
}

export default EditNote;

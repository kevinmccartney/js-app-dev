import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      newMessageValue: '',
      editingMessage: {
        id: null,
        message: null,
      },
    };
  }

  handleNewMessageChange = message => {
    this.setState({
      ...this.state,
      newMessageValue: message,
    });
  }

  handleEditMessageChange = message => {
    this.setState({
      ...this.state,
      editingMessage: {
        id: this.state.editingMessage.id,
        message: message,
      }
    })
  }

  handleNewMessageSubmit = () => {
    if(this.state.newMessageValue) {
        this.setState({
          ...this.state,
          messages: [
            ...this.state.messages,
            {
              id: Date.now(),
              message: this.state.newMessageValue,
            },
          ],
          newMessageValue: '',
        })
    }
  }

  handleEditMessageSubmit = () => {
    if(this.state.editingMessage.message) {
      const messagesNoEditingMessage = this.state.messages.filter((message) => message.id !== this.state.editingMessage.id);

        this.setState({
          ...this.state,
          messages: [
            ...messagesNoEditingMessage,
            this.state.editingMessage,
          ],
          editingMessage: {
            id: null,
            message: null,
          }
        })
    }
  }

  toggleEditMode = message => {
    this.setState({
      ...this.state,
      editingMessage: {
        ...message
      },
    });
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.newMessageValue}
          onChange={e => this.handleNewMessageChange(e.target.value)}
        />
        <button
          onClick={() => this.handleNewMessageSubmit()}
        >
          Submit Message
        </button>
        <section>
          <ul>
            {this.state.messages.map(message => {
                if(this.state.editingMessage.id === message.id) {
                  return (
                    <li>
                      <input
                        type="text"
                        value={this.state.editingMessage.message}
                        onChange={e => this.handleEditMessageChange(e.target.value)}
                      />
                      <button
                        onClick={() => this.handleEditMessageSubmit()}
                      >
                        Submit
                      </button>
                    </li>
                  )
                } else {
                  return (
                    <li>
                      {message.message}
                      <button
                        onClick={() => this.toggleEditMode(message)}
                      >Edit</button>
                    </li>
                  )
                }
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;

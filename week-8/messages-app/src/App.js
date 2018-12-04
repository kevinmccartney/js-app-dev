// importing React runtime & the Component class
import React, { Component } from 'react';

// this is the single-component app that will allow you to manage messages
class App extends Component {
  constructor(props) {
    // don't forget to call super with the props of the parent class so that you will have access
    // to the props property on the React Component class
    super(props);

    this.state = {
      // we need an array to hold a list of messages
      messages: [],
      // this value will be used with the input used to create a new message
      newMessageValue: '',
      // this object will be used when we are editing a message
      editingMessage: {
        id: null,
        message: null,
      },
    };
  }

  // all of the following methods are arrow functions, which means the value of 'this' will be
  // block-scoped to the App class

  // this method handles changes on the input element that's used to create new messages
  handleNewMessageChange = message => {
    this.setState({
      // make sure that we are copying the current state into the object that will become
      // the new state
      ...this.state,
      newMessageValue: message,
    });
  }

  // this method handles updates to the input element on a message that is being edited
  handleEditMessageChange = message => {
    this.setState({
      ...this.state,
      editingMessage: {
        ...this.state.editingMessage,
        message: message,
      }
    })
  }

  // this method handles a submitting a new message
  handleNewMessageSubmit = () => {
    // if there's no value in the new message input, don't create a new message
    if(this.state.newMessageValue) {
        this.setState({
          ...this.state,
          messages: [
            ...this.state.messages,
            // we are creating an object to represent a new message. This is because we will need
            // to use the id when we are editing the message in the future
            {
              id: Date.now(),
              message: this.state.newMessageValue,
            },
          ],
          // reset the value of the new message input
          newMessageValue: '',
        })
    }
  }

  // this method handles the submission of a message that is being edited
  handleEditMessageSubmit = () => {
    // don't submit the edited message if there's no value in the editing message input
    if(this.state.editingMessage.message) {
      // remove the previous message with the id of the message we are currently editing
      const messagesNoEditingMessage = this.state.messages.filter((message) => message.id !== this.state.editingMessage.id);

        this.setState({
          ...this.state,
          // destructure the previous messages without the message we are editing & add the edited message
          messages: [
            ...messagesNoEditingMessage,
            this.state.editingMessage,
          ],
          // reset the editing message object
          editingMessage: {
            id: null,
            message: null,
          }
        })
    }
  }

  // set the message to edit
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
        {/*
          Here we are using a controlled component, which means that we need to give it a value
          explicitly & provide an onChange callback to update that value
          https://reactjs.org/docs/forms.html#controlled-components
        */}
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
            {/* mapping over the messages in state */}
            {this.state.messages.map(message => {
                // if the editingMessage id is the same as the id of the message we are currently
                // mapping over, render the editing interface
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
                }
                // otherwise render the display interface for the message
                else {
                  return (
                    <li>
                      {message.message}
                      <button
                        // here we are passing the message object into the method call
                        // because the method requires the entire object
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

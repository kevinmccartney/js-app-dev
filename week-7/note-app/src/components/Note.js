import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Note.css';

class Note extends Component {
  constructor(props) {
    // it's important that we call super here with the props
    // this is so we can access the props property on the React.Component class
    super(props);
    
    // initializing state
    this.state = {
      body: this.props.body,
      isRead: this.props.isRead,
      title: this.props.title,
      editMode: false
    }
  }

  // a method that calls the deleteNote method passed down from the Board component
  // also important to note that we are using an arrow function method here, which means that
  // it will always be called with a block-scoped 'this', which will be the Note component
  handleDelete = () => {
    // we have to call deleteNote with a number, because in deleteNote, we are strictly comparing
    // the id passed in with the id of the note in state, which is a number. When the id is passed
    // down to the Note component, it is coerced to a string. This is why we need to use parseFloat 
    this.props.deleteNote(parseFloat(this.props.id));
  }

  // update the editing state of the Note component
  handleEdit = () => {
    this.setState({
      // make sure that we're passing the existing state of the component to the setState call
      // because setState is declarative. This means that whatever object we pass to setState will
      // become the new state of the component.
      ...this.state,
      editMode: true
    });
  }

  handleSave = () => {
    this.setState({
      ...this.state,
      // we are grabbing the value property from the DOM nodes that are referenced from
      // titleContent & bodyContent refs
      // this means that we are using uncontrolled components
      // https://reactjs.org/docs/uncontrolled-components.html
      title: this.refs.titleContent.value,
      body: this.refs.bodyContent.value,
      editMode: false
    });
  }

  // update the isRead property of the component
  toggleRead = () => {
    // this is using the callback version of this.setState
    // when using this method of updating state, you use a callback that receives the current
    // state of the component as an argument. You must return an object that will be the new
    // component state.
    this.setState(state => {
      return {
        ...state,
        isRead: !this.state.isRead,
      };
    });
  }

  render() {
    // setting up a variable we will assign a JSX block below
    let componentToRender;

    if(this.state.editMode) {
      componentToRender = (
        // using a fragment to return multiple JSX elements with no common parent
        <React.Fragment>
          <textarea
            className="title-textarea"
            // we use defaultValues when using an uncontrolled component
            defaultValue={this.state.title}
            // this is where we are defining the ref that will be used to update the component
            // state. A ref is a reference to the DOM node represented by the JSX tag
            // https://reactjs.org/docs/refs-and-the-dom.html
            ref="titleContent"
          />
          <textarea
            className="body-textarea"
            defaultValue={this.state.body}
            ref="bodyContent"
          />
          <div>
            <button
              className="btn btn-primary"
              onClick={() => this.handleSave()}
            
            >
              Save
            </button>
          </div>
        </React.Fragment>
      );
    } else {
      componentToRender = (
        <React.Fragment>
          <h5>{this.state.title}</h5>
          <p>{this.state.body}</p>
          <div>
            <button
              // here we are conditionally assigning the className with a ternary statement
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
              className={this.state.isRead ? 'btn btn-success mr-2' : 'btn btn-outline-success mr-2'}
              onClick={() => this.toggleRead()}
            >
              {this.state.isRead ? 'Read' : 'Unread'}
            </button>
            <button
              className="btn btn-primary mr-2"
              onClick={() => this.handleEdit()}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete()}
            >
              Delete
            </button>
            {/*
              this block will only render if the prop hasSecret is true
              this is an example of short-circuit evaluation
              https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation
            */}
            {this.props.hasSecret && (
              <div
                className="mt-2"
              >
                <button
                  className="btn btn-info"
                  onClick={() => alert('Congratulations, you found the easter egg!')}
                >
                  Click for a secret!
                </button>
              </div>
            )}
          </div>
        </React.Fragment>
      );
    }
    
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            {/* here we are rendering out the JSX block that we assigned above */}
            {componentToRender}
          </div>
        </div>
      </div>
    );
  }
}

// these are the props that will be assigned as defaults if no props are passed for these values
Note.defaultProps = {
  body: "A cool body",
  isRead: false,
  title: "A cool title",
};

// setting up the type-checking using prop-types
// this will give you runtime errors or warnings
// https://www.npmjs.com/package/prop-types
Note.propTypes = {
  // this is defining a type that the given prop should be
  body: PropTypes.string,
  // this .isRequired property says that this prop MUST have a value - it can't be undefined
  hasSecret: PropTypes.bool.isRequired,
  isRead: PropTypes.bool,
  title: PropTypes.string,
};

export default Note;
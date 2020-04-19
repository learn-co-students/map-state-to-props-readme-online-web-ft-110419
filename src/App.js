import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick() {
    //dispatch is automatically provided by connect 
    //if it is missing a second argument
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  } 

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { itmes: state.item };
};

//connect: a function that listens to every change in the store
export default connect(mapStateToProps)(App);

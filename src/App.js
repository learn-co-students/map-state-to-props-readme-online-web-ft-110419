import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import './App.css';
 
class App extends Component {
 
  handleOnClick() {
    this.props.dispatch({ //  dispatch is automatically provided by connect if it is missing a second argument
      type: 'INCREASE_COUNT',
    });
  }
 
  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleOnClick()}>
          Click
        </button>
        <h1>{this.props.items.length}</h1>
      </div>
    );
  }
};
 
const mapStateToProps = (state) => { // In mapStateToProps() we specify exactly which slice of the state we want to provide to our component
  return { items: state.items };
};
 
export default connect(mapStateToProps)(App);

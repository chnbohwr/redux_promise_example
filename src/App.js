import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { actionAddCount } from './CountStore';

const mapStateToProps = (state) => ({
  countReducer: state.countReducer
});

const mapActionsToProps = {
  actionAddCount
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.props.countReducer.count}</p>
        <button onClick={this.props.actionAddCount}>clickme</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);

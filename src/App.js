import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';
import {connect} from 'react-redux';

class App extends Component {
  render(){
    // this.props.dulieu
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.dulieu}
          <News />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}

export default connect(mapStateToProps)(App);

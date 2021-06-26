import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <Main />
          </div>

        </Navbar>
        <Directory campsites={this.state.campsites} />
      </div>
    );

  }

}

export default App;

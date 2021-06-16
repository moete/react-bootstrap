import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';

class App extends Component {
  render() {
    const directory = this.state.campsites.map(campsite => {
      return (
        <div key={campsite.id} className="col">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">NuCamp</NavbarBrand>
            </div>
            );
          </Navbar>
          <Directory />
        </div>
      );
    });
  }

}

export default App;

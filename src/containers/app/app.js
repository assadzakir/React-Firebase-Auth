import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import Main from '../main/Main'

class App extends Component {

 
  render() {
    return (
        <MuiThemeProvider>
         <Main/>
        </MuiThemeProvider>
    );
  }
}

export default App;

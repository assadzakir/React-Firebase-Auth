import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Root from './config/routes/routes';

// import App from './App';
// import './index.css';

ReactDOM.render(
    <MuiThemeProvider>
        <Root/>
    </MuiThemeProvider>,
  document.getElementById('root')
);

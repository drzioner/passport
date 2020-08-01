import React from 'react';
import ReactDOM from 'react-dom';
import WebFontConfig from 'webfontloader'
import App from './Components/App';

WebFontConfig.load({
  google: {
    families: ['Open Sans', 'Poppins', 'Poppins:700'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
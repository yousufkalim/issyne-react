import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//  COMPONENTS
import App from './App';
import './custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";

// FONTS
import './fonts/Montserrat.ttf'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();

ReactDOM.render(
  <React.StrictMode>
   <Router>
   <App />
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

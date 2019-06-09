import React from 'react';
import 'reset-css';
import './App.css';
import {HashRouter as Router} from 'react-router-dom';
import router from './utils/router';

function App() {
  return (
    <Router>
      {router}
    </Router>
  );
}

export default App;

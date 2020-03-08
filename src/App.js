import React from 'react';
import { HashRouter } from 'react-router-dom';

import './style.css'

import Header from './components/header';
import Sidebar from './components/sidebar';
import Routes from './routes';

const App = () => (
  <div className="App">
    <HashRouter>
      <Header />
      <div className="middle">
        <Sidebar />
        <Routes />
      </div>
    </HashRouter>
  </div>
);


export default App;
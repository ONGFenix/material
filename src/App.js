import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './style.css'

import Header from './components/header';
import Sidebar from './components/sidebar';
import Routes from './routes';

const App = () => (
  <div className="App">
    <BrowserRouter basename="/material">
      <Header />
      <div className="middle">
        <Sidebar />
        <Routes />
      </div>
    </BrowserRouter>
  </div>
);


export default App;
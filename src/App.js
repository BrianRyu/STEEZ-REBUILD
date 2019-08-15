import React from 'react';
import './App.css';

import NavBar from './components/NavBar'
import Home from './containers/Home'

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}


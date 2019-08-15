import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'


import NavBar from './components/NavBar'
import Home from './containers/Home'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route path="/" component={Home}/>
      </BrowserRouter>
    </div>
  );
}


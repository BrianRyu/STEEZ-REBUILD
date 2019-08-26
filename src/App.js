import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import NavBar from './components/NavBar';
import Home from './containers/Home';
import MySteez from './containers/MySteez';
import SteezHub from './containers/SteezHub';
import ProductShow from './components/ProductShow';
import AllProducts from './components/AllProducts';
import AllFits from './components/AllFits';
import SteezShow from './components/SteezShow'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/mysteez" component={MySteez}/>
          <Route path="/steezhub" component={SteezHub}/> 
          <Route path="/products/:id" component={ProductShow}/>
          <Route path="/all-products" component={AllProducts}/>
          <Route path="/all-fits" component={AllFits}/>
          <Route path="/posts/:id" component={SteezShow} />
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


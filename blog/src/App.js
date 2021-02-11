import React from 'react';
import Navbar from './Component/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Post from "./Component/Post";
import './index.css'

function App() {
  return (

    <BrowserRouter>
      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/:post_id" component={Post} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;

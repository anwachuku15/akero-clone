import React from "react";
import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Navbar from "./components/Navbar";

function App() {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("navbar").style.height = "75px";
    } else {
      document.getElementById("navbar").style.height = "150px";
    }
  };
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

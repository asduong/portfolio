import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Dispatcher from "./Dispatcher";
import Navbar from "./CustomNavbar";
import Footer from "./Footer";
import "../fonts/inter.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/dispatcher" component={Dispatcher}></Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;

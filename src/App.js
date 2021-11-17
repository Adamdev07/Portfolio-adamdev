import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;

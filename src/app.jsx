import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/service" component={Service} />
        <Route component={Error} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;

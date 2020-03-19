import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "../src/css/css.css";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
        </React.Fragment>
    </BrowserRouter>
  );

}

export default App;
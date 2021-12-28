import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe.js";
import Services from "./components/Services.js";
import { Switch, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route component={Header} exact path="/" />
        <Route component={AboutMe} path="/about" />
        <Route component={Services} path="/services" />
        <Route component={Portfolio} path="/portfolio" />
        <Route component={Contact} path="/contact" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe.js";
import Services from "./components/Services.js"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
    </>
  );
}

export default App;

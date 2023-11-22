import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Navibar from "./components/Navbar/Navibar";
import MainPage from "./components/Main/MainPage";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navibar />
      <div className="my-10">
        <MainPage />
      </div>
      <div className="my-10">
        <About />
      </div>
      <div className="my-10">
        <Service />
      </div>
      <div className="my-10">
        <Contact />
      </div>
      <div className="my-10">
        <Footer />
      </div>
      {/* <header className="App-header"> */}
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Homepage />
      {/* </header> */}
    </div>
  );
}

export default App;

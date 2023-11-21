import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Navibar from './components/Navbar/Navibar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navibar />
      <About />
      <Contact />
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

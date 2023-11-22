import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Navibar from "./components/Navbar/Navibar";
import MainPage from "./components/Main/MainPage";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;

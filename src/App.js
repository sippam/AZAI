import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Blog from "./components/Blog/Blog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <div className="content-container"> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;

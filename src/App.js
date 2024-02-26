import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Blog from "./components/Blog/Blog";
import { Routes, Route } from "react-router-dom";
import ReaderBlog from "./components/Blog/ReaderBlog";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<ReaderBlog />} />
        </Routes>
      </div>
  );
}

export default App;

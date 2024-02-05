import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Blog from "./components/Blog/Blog";
// import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import { Auth } from "@supabase/auth-ui-react";
// import {
//   // Import predefined theme
//   ThemeSupa,
// } from "@supabase/auth-ui-shared";
// import { supabase } from "./lib/supabase/supabaseClient";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
  );
}

export default App;

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ApiRender from "./pages/ApiRender";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Users</Link>
          </li>

          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contack</Link>
          </li>
          {/* <ApiRender /> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ApiRender></ApiRender>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;

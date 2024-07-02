import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Users from "./pages/Users";
import UsersDetail from "./pages/UsersDetail";
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Users />} />
          <Route path="Users/:id" element={<UsersDetail />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

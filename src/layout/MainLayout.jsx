import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <Header />
      </header>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;

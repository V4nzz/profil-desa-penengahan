import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import routes from "./routes.jsx";

export default function App() {
  return (
    <div className="appShell">
      <Navbar />
      <main className="main">
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

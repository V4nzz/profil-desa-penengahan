import React from "react";
import Home from "../pages/Home.jsx";
import Profil from "../pages/Profil.jsx";
import Potensi from "../pages/Potensi.jsx";
import Pemerintahan from "../pages/Pemerintahan.jsx";
import Galeri from "../pages/Galeri.jsx";
import Kontak from "../pages/Kontak.jsx";
import NotFound from "../pages/NotFound.jsx";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/profil", element: <Profil /> },
  { path: "/potensi", element: <Potensi /> },
  { path: "/pemerintahan", element: <Pemerintahan /> },
  { path: "/galeri", element: <Galeri /> },
  { path: "/kontak", element: <Kontak /> },
  { path: "*", element: <NotFound /> },
];

export default routes;

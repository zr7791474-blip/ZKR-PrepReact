import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ItemPage from "./components/ItemPage";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="site-header__brand" to="/">
          <span className="site-header__mark">R</span>
          <span>
            <strong>OFPPT React</strong>
            <small>Exercices M204 · pages 4 à 322</small>
          </span>
        </Link>
        <Link className="site-header__home" to="/">
          Accueil
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/fiche/:id/*" element={<ItemPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="site-footer">
        <p>
          Projet d'étude React — contenu issu du cours OFPPT M204 « Développer en Front
          end », pages 4 à 322. Chaque fiche indique ses pages d'origine.
        </p>
        <p className="site-footer__meta">
          React 18 · React Router · Redux · Redux Toolkit · Axios
        </p>
      </footer>
    </div>
  );
}

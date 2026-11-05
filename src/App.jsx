import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ItemPage from "./components/ItemPage";
import NotFound from "./components/NotFound";
import Sidebar from "./components/Sidebar";
import PdfReader from "./components/PdfReader";
import { ThemeProvider, useTheme } from "./state/ThemeContext";

function SiteHeader({ navOpen, onToggleNav }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <button
        type="button"
        className="site-header__menu-btn"
        onClick={onToggleNav}
        aria-expanded={navOpen}
        aria-controls="sidebar"
        aria-label="Ouvrir le menu de navigation"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
        </svg>
      </button>

      <Link className="site-header__brand" to="/" aria-label="PrepReact, accueil">
        <span className="site-header__mark" aria-hidden="true">
          P<span>r</span>
        </span>
        <span className="site-header__name">
          <strong>PrepReact</strong>
          <small>OFPPT · M204 · pages 4 à 322</small>
        </span>
      </Link>

      <nav aria-label="Navigation principale">
        <NavLink className="site-header__home" to="/" end>
          Accueil
        </NavLink>
        <button
          type="button"
          className="site-header__theme"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
        >
          <span className="site-header__theme-icon" aria-hidden="true">
            {theme === "dark" ? "☀" : "☾"}
          </span>
          <span className="site-header__theme-label">{theme === "dark" ? "Clair" : "Sombre"}</span>
        </button>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        Projet d'étude React — contenu issu du cours OFPPT M204 « Développer en Front
        end », pages 4 à 322. Chaque fiche indique ses pages d'origine.
      </p>
      <p className="site-footer__meta">
        React 18 · React Router · Redux · Redux Toolkit · Axios
      </p>
    </footer>
  );
}

function Shell() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  return (
    <div
      className={`app-shell ${collapsed ? "app-shell--collapsed" : ""} ${navOpen ? "app-shell--nav-open" : ""}`}
    >
      <Sidebar
        open={navOpen}
        onClose={() => setNavOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((current) => !current)}
      />

      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <div className="app-shell__content">
        <SiteHeader navOpen={navOpen} onToggleNav={() => setNavOpen((current) => !current)} />

        <div id="contenu" className="app-main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/exercices" element={<Dashboard key="exercices" typeFilter="exercise" />} />
            <Route path="/atelier" element={<Dashboard key="atelier" typeFilter="atelier" />} />
            <Route path="/quiz" element={<Dashboard key="quiz" typeFilter="quiz" />} />
            <Route path="/exemples" element={<Dashboard key="exemples" typeFilter="example" />} />
            <Route path="/lecons" element={<Dashboard key="lecons" typeFilter="lesson" />} />
            <Route path="/cours-pdf" element={<PdfReader />} />
            <Route path="/fiche/:id/*" element={<ItemPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <SiteFooter />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

function DemoHome() {
  return <div><h2>Home</h2><p>Bienvenue sur la page d'accueil.</p></div>;
}

function DemoAbout() {
  return <div><h2>About</h2><p>Cette page est affichée par la route /about.</p></div>;
}

function DemoBlog() {
  return <div><h2>Blog</h2><p>Cette page est affichée par la route /blog.</p></div>;
}

/**
 * Exemple - PDF pages 262 et 263
 * Mini application de routage avec Link, Routes et Route.
 * Les chemins sont prefixes par /fiche/exemple-routing pour rester
 * a l'interieur du projet d'etude.
 */
export default function ExempleRouting() {
  return (
    <div className="exercise">
      <DemoWorkspace
        title="Navigation avec React Router"
        code={<CodeBlock code={snippets.routingExample} title="App.js - PDF page 262" />}
        result={
          <div className="demo-card">
            <nav className="demo-nav">
              <Link to="/fiche/exemple-routing">Home</Link>
              <Link to="/fiche/exemple-routing/about">About</Link>
              <Link to="/fiche/exemple-routing/blog">Blog</Link>
            </nav>

            <div className="main-route-place">
              <Routes>
                <Route index element={<DemoHome />} />
                <Route path="about" element={<DemoAbout />} />
                <Route path="blog" element={<DemoBlog />} />
                <Route path="*" element={<p>Page inconnue (route non définie).</p>} />
              </Routes>
            </div>
            <p className="demo-card__hint">
              Cliquez sur les liens : seul le contenu de la zone de route change, la page
              de la fiche reste affichée.
            </p>
          </div>
        }
        adaptation={
          <>
            dans l'exemple original, les liens pointent vers <code>/</code>,{" "}
            <code>/about</code> et <code>/blog</code>. Ici, ils sont préfixés par{" "}
            <code>/fiche/exemple-routing</code> pour rester dans la fiche.
          </>
        }
        resultHint="Cliquez sur Home, About ou Blog pour changer de route."
        notes={
          <div className="callout">
            <strong>Installation :</strong> <code>npm install react-router-dom</code>. Dans{" "}
            <code>index.js</code>, l'application est enveloppée par{" "}
            <code>&lt;BrowserRouter&gt;</code> (PDF page 263).
          </div>
        }
      />
    </div>
  );
}

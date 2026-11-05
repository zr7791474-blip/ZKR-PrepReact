import React from "react";
import { Link } from "react-router-dom";

const PDF_URL = "/pdf/Développer en Front end M204.pdf";

export default function PdfReader() {
  return (
    <main className="page pdf-page">
      <header className="page-head">
        <nav className="page-head__crumbs" aria-label="Fil d'Ariane">
          <Link className="btn--back" to="/">
            <span aria-hidden="true">←</span> Retour à l'accueil
          </Link>
          <span className="page-head__position">Cours PDF</span>
        </nav>

        <div className="page-head__meta">
          <span className="page-head__chapter">Manuel complet</span>
          <span className="page-head__pages">322 pages</span>
        </div>

        <h1 className="page-head__title">Cours PDF — Développer en Front end</h1>
        <p className="page-head__desc">
          Le manuel source de l'OFPPT M204, pages 4 à 322. Lecture verticale, comme dans un
          vrai cahier : faites défiler le document, puis ouvrez une fiche pour le code associé.
        </p>
      </header>

      <div className="pdf-frame-wrap">
        <iframe
          className="pdf-frame"
          src={PDF_URL}
          title="Manuel du cours OFPPT M204 - Développer en Front end"
        />
      </div>

      <p className="muted">
        Le lecteur embarqué utilise le visualiseur natif du navigateur. Si le rendu est lent ou
        indisponible, utilisez les liens ci-dessous.
      </p>

      <div className="pdf-actions">
        <a className="btn btn--secondary" href={PDF_URL} target="_blank" rel="noreferrer">
          Ouvrir dans un nouvel onglet
        </a>
        <a className="btn btn--ghost" href={PDF_URL} download>
          Télécharger le PDF
        </a>
      </div>
    </main>
  );
}

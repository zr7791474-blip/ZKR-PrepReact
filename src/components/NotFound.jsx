import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page">
      <div className="not-found">
        <p className="not-found__code">404</p>
        <h1>Fiche introuvable</h1>
        <p>
          Cette adresse ne correspond à aucune fiche du catalogue. Utilisez la recherche du
          tableau de bord pour retrouver un exercice, un exemple ou une leçon.
        </p>
        <Link className="btn btn--primary" to="/">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}

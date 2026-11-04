import React from "react";
import { Link } from "react-router-dom";
import { allItems } from "../data/catalog";

/**
 * Vue generique pour les fiches de cours (type "lesson") qui n'ont pas
 * de composant de demonstration dedie.
 */
export default function LessonView({ item }) {
  const autresFiches = allItems.filter(
    (autre) => autre.chapterId === item.chapterId && autre.id !== item.id
  );

  return (
    <div className="exercise">
      <div className="objectives">
        <h2>Objectifs du cours</h2>
        <ul>
          {item.objectives.map((objectif) => (
            <li key={objectif}>{objectif}</li>
          ))}
        </ul>
      </div>

      <div className="callout callout--info">
        <strong>Pages du PDF :</strong> {item.pages}. Cette fiche est une leçon du cours :
        le code correspondant est affiché ci-dessous lorsqu'il est fourni par le PDF.
      </div>

      {autresFiches.length > 0 && (
        <div className="related-panel">
          <h2>Dans le même chapitre</h2>
          <div className="chip-row">
            {autresFiches.map((autre) => (
              <Link key={autre.id} className="chip chip--link" to={`/fiche/${autre.id}`}>
                {autre.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

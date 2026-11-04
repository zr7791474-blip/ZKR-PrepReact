import React, { useId, useState } from "react";

const VIEWS = [
  { id: "code", label: "Voir le code" },
  { id: "result", label: "Voir le résultat" },
  { id: "split", label: "Côte à côte" },
];

/**
 * Espace de travail commun a toutes les demonstrations.
 *
 * - Le code source du PDF et la demonstration executable restent montes en
 *   permanence : changer d'onglet ne perd donc pas l'etat du composant.
 * - Sur ordinateur, la vue "Cote a cote" affiche le code et le resultat.
 * - Sur mobile, les deux panneaux sont empiles.
 * - Les boutons "Voir le resultat" / "Voir le code" permettent de passer d'un
 *   panneau a l'autre sans quitter la fiche.
 */
export default function DemoWorkspace({
  title = "Code source et résultat interactif",
  code,
  result,
  adaptation = null,
  notes = null,
  codeHint = "Code du PDF reproduit tel quel.",
  resultHint = "Démonstration exécutable, liée au code affiché à gauche.",
  defaultView = "split",
}) {
  const [view, setView] = useState(defaultView);
  const baseId = useId();
  const codeId = `${baseId}-code`;
  const resultId = `${baseId}-result`;

  function showCode() {
    setView("code");
  }

  function showResult() {
    setView("result");
  }

  return (
    <section className="demo-workspace" data-view={view} aria-label={title}>
      <div className="demo-workspace__toolbar">
        <div className="demo-workspace__intro">
          <p className="demo-workspace__eyebrow">Code source ↔ Résultat</p>
          <h2 className="demo-workspace__title">{title}</h2>
        </div>

        <div className="demo-tabs" role="tablist" aria-label="Affichage du code et du résultat">
          {VIEWS.map((entry) => (
            <button
              key={entry.id}
              type="button"
              role="tab"
              className="demo-tab"
              aria-selected={view === entry.id}
              aria-controls={
                entry.id === "code"
                  ? codeId
                  : entry.id === "result"
                    ? resultId
                    : `${codeId} ${resultId}`
              }
              onClick={() => setView(entry.id)}
            >
              {entry.label}
            </button>
          ))}
        </div>
      </div>

      {adaptation && (
        <div className="demo-workspace__adaptation">
          <strong>Adaptation pour la démonstration :</strong> {adaptation}
        </div>
      )}

      <div className="demo-workspace__grid">
        <section
          className="demo-pane demo-pane--code"
          id={codeId}
          role="tabpanel"
          aria-label="Code source"
          hidden={view === "result"}
        >
          <div className="demo-pane__head">
            <div>
              <span className="demo-pane__label">Code source</span>
              <span className="demo-pane__hint">{codeHint}</span>
            </div>
            <button type="button" className="btn btn--primary btn--small" onClick={showResult}>
              Voir le résultat →
            </button>
          </div>
          <div className="demo-pane__body">{code}</div>
        </section>

        <section
          className="demo-pane demo-pane--result"
          id={resultId}
          role="tabpanel"
          aria-label="Résultat interactif"
          hidden={view === "code"}
        >
          <div className="demo-pane__head">
            <div>
              <span className="demo-pane__label">Résultat interactif</span>
              <span className="demo-pane__hint">{resultHint}</span>
            </div>
            <button type="button" className="btn btn--ghost btn--small" onClick={showCode}>
              ← Voir le code
            </button>
          </div>
          <div className="demo-pane__body demo-pane__body--result">{result}</div>
        </section>
      </div>

      {notes && <div className="demo-workspace__notes">{notes}</div>}
    </section>
  );
}

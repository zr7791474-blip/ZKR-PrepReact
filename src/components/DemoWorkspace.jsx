import React, { useId, useRef, useState } from "react";

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
 * - Le controle segmente (fleches gauche / droite) est l'unique moyen de
 *   changer de vue : pas de boutons redondants dans les panneaux.
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

  const tabRefs = useRef({});

  function onTabKeyDown(event, index) {
    const last = VIEWS.length - 1;
    let target = null;
    if (event.key === "ArrowRight") target = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft") target = index === 0 ? last : index - 1;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = last;
    if (target === null) return;
    event.preventDefault();
    const next = VIEWS[target];
    setView(next.id);
    if (tabRefs.current[next.id]) tabRefs.current[next.id].focus();
  }

  return (
    <section className="demo-workspace" data-view={view} aria-label={title}>
      <div className="demo-workspace__toolbar">
        <div className="demo-workspace__intro">
          <p className="demo-workspace__eyebrow">Code source · Résultat</p>
          <h2 className="demo-workspace__title">{title}</h2>
        </div>

        <div className="demo-tabs" role="tablist" aria-label="Affichage du code et du résultat">
          {VIEWS.map((entry, index) => (
            <button
              key={entry.id}
              ref={(node) => {
                tabRefs.current[entry.id] = node;
              }}
              tabIndex={view === entry.id ? 0 : -1}
              onKeyDown={(event) => onTabKeyDown(event, index)}
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
          </div>
          <div className="demo-pane__body demo-pane__body--result">{result}</div>
        </section>
      </div>

      {notes && <div className="demo-workspace__notes">{notes}</div>}
    </section>
  );
}

import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

/**
 * Exercice 2 - PDF pages 235 a 237
 * Compteur avec deux boutons : incrementer / decrementer.
 */
export default function Ex02Compteur() {
  const [valeur, setValeur] = useState(0);

  function incrementer() {
    setValeur(valeur + 1);
  }

  function decrementer() {
    setValeur(valeur - 1);
  }

  return (
    <div className="exercise">
      <div className="objectives">
        <h2>Objectifs de l'exercice</h2>
        <ul>
          <li>Créer une propriété d'état <code>valeur</code> initialisée à 0.</li>
          <li>Incrémenter la valeur au clic sur « incrementer ».</li>
          <li>Décrémenter la valeur au clic sur « decrementer ».</li>
          <li>Afficher la valeur du compteur.</li>
        </ul>
      </div>

      <DemoWorkspace
        title="Compteur avec useState"
        code={
          <>
            <CodeBlock
              code={snippets.compteur}
              title="Solution - fonctions classiques (PDF page 236)"
            />
            <CodeBlock
              code={snippets.compteurArrow}
              title="Variante - arrow functions dans onClick (PDF page 237)"
            />
          </>
        }
        result={
          <div className="demo-card demo-card--center">
            <h2 className="counter-value">compteur : {valeur}</h2>
            <div className="button-row">
              <button type="button" className="btn btn--primary" onClick={incrementer}>
                incrementer
              </button>
              <button type="button" className="btn btn--danger" onClick={decrementer}>
                decrementer
              </button>
            </div>
            <p className="demo-card__hint">
              Chaque clic appelle <code>setValeur</code>, ce qui déclenche un nouveau rendu.
            </p>
          </div>
        }
        resultHint="Cliquez sur incrementer puis decrementer : la valeur se met à jour immédiatement."
        notes={
          <div className="callout callout--info">
            <strong>Lien avec le code :</strong> les deux boutons appellent{" "}
            <code>incrementer</code> et <code>decrementer</code>, qui exécutent{" "}
            <code>setValeur(valeur ± 1)</code>. React réexécute le composant et affiche la
            nouvelle valeur.
          </div>
        }
      />
    </div>
  );
}

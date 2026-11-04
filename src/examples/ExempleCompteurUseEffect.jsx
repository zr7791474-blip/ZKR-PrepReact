import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

/**
 * Exemple 1 - PDF page 239
 * On affiche dans la console la valeur du compteur apres chaque rendu.
 */
export default function ExempleCompteurUseEffect() {
  const [valeur, setValeur] = useState(0);
  const [derniereValeur, setDerniereValeur] = useState(0);

  function incrementer() {
    setValeur(valeur + 1);
  }

  function decrementer() {
    setValeur(valeur - 1);
  }

  useEffect(() => {
    console.log(valeur);
    setDerniereValeur(valeur);
  }, [valeur]);

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Compteur et console.log dans useEffect"
        code={
          <CodeBlock
            code={snippets.useeffectCompteur}
            title="Compteur avec useEffect - PDF page 239"
          />
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
              Dernière valeur envoyée à <code>console.log</code> :{" "}
              <strong>{derniereValeur}</strong>. Ouvrez la console du navigateur (F12) pour
              voir les messages.
            </p>
          </div>
        }
        resultHint="Chaque changement de valeur réexécute l'effet et met à jour le compteur."
        notes={
          <div className="callout callout--info">
            Sans deuxième argument, l'effet s'exécute après chaque rendu. Avec{" "}
            <code>[valeur]</code>, il s'exécute au premier rendu puis seulement quand{" "}
            <code>valeur</code> change.
          </div>
        }
      />
    </div>
  );
}

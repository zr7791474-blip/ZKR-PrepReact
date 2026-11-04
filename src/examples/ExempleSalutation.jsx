import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

/**
 * Exemple 2 - PDF pages 240 et 241
 * Le titre du document prend la valeur du nom apres chaque modification.
 */
export default function ExempleSalutation() {
  const [nom, setNom] = useState("Rami");

  function changeNom(e) {
    setNom(e.target.value);
  }

  useEffect(() => {
    document.title = nom;
    return () => {
      document.title = "OFPPT React - Exercices M204";
    };
  }, [nom]);

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Salutation : le titre du document suit la saisie"
        code={
          <CodeBlock
            code={snippets.useeffectSalutation}
            title="Salutation.js - PDF page 240"
          />
        }
        result={
          <div className="demo-card">
            <div className="field">
              <label htmlFor="exemple-nom">nom :</label>
              <input id="exemple-nom" type="text" value={nom} onChange={changeNom} />
            </div>
            <h2>Salutation</h2>
            <p>salut {nom}</p>
            <p className="title-preview">
              Titre du document : <strong>{nom}</strong>
            </p>
            <p className="demo-card__hint">
              Regardez l'onglet du navigateur : son titre change à chaque frappe.
            </p>
          </div>
        }
        resultHint="Tapez un autre nom et observez le titre de l'onglet du navigateur."
        notes={
          <div className="callout callout--info">
            <strong>Quand l'effet s'exécute-t-il ?</strong> Le tableau{" "}
            <code>[nom]</code> déclare une dépendance : l'effet se lance après le premier
            rendu, puis à chaque fois que <code>nom</code> change. La fonction retournée
            par l'effet (nettoyage) restaure le titre lorsque le composant est démonté.
          </div>
        }
      />
    </div>
  );
}

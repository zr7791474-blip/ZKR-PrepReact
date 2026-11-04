import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

/**
 * Exemple - PDF pages 229 et 230
 */
export default function ExempleAutreMessage() {
  const [message, setMessage] = useState("Bien venu visiteur");
  const [btnMessage, setBtnMessage] = useState("inscription");

  function inscription() {
    setMessage("votre inscription est effectuée");
    setBtnMessage("merci");
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="AutreMessage : deux états indépendants"
        code={<CodeBlock code={snippets.autreMessage} title="AutreMessage.js - PDF page 229" />}
        result={
          <div className="demo-card demo-card--center">
            <h2>{message}</h2>
            <button type="button" className="btn btn--primary" onClick={() => inscription()}>
              {btnMessage}
            </button>
            <p className="demo-card__hint">
              Deux états indépendants : le message et le libellé du bouton.
            </p>
          </div>
        }
        resultHint="Cliquez sur « inscription » pour déclencher les deux setState."
        notes={
          <div className="callout callout--info">
            <strong>Attention :</strong> écrivez <code>onClick=&#123;inscription&#125;</code> ou{" "}
            <code>onClick=&#123;() =&gt; inscription()&#125;</code>, jamais{" "}
            <code>onClick=&#123;inscription()&#125;</code> : la fonction serait appelée pendant
            le rendu et provoquerait une boucle infinie (PDF pages 233 et 234).
          </div>
        }
      />
    </div>
  );
}

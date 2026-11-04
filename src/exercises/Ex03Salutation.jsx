import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

const MODES = [
  { id: "nom-prenom", label: "[nom, prenom]", help: "Solution du PDF : le titre change si nom ou prénom change." },
  { id: "nom", label: "[nom]", help: "Le titre change seulement quand le nom change." },
  { id: "vide", label: "[]", help: "Le titre est fixé au premier rendu, puis ne change plus." },
  { id: "aucun", label: "sans tableau", help: "L'effet s'exécute après chaque rendu (nom, prénom ou âge)." },
];

/**
 * Applique le titre du document selon la variante choisie.
 * Le composant est remonte (via key={mode}) quand la variante change, afin de
 * ne jamais modifier la taille du tableau de dependances d'une meme instance.
 */
function TitreSync({ mode, nom, prenom, onTitre }) {
  let dependances;
  if (mode === "nom-prenom") dependances = [nom, prenom];
  if (mode === "nom") dependances = [nom];
  if (mode === "vide") dependances = [];
  if (mode === "aucun") dependances = undefined;

  useEffect(() => {
    const titre = nom + " " + prenom;
    document.title = titre;
    onTitre(titre);

    return () => {
      document.title = "OFPPT React - Exercices M204";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependances);

  return null;
}

/**
 * Exercice 3 - PDF pages 242 a 245
 * Salutation avec nom, prénom, âge et mise à jour du titre du document.
 */
export default function Ex03Salutation() {
  const [nom, setNom] = useState("---");
  const [prenom, setPrenom] = useState("---");
  const [age, setAge] = useState(0);
  const [mode, setMode] = useState("nom-prenom");
  const [titreDocument, setTitreDocument] = useState("");

  function changeNom(e) {
    setNom(e.target.value);
  }

  function changePrenom(e) {
    setPrenom(e.target.value);
  }

  function changeAge(e) {
    setAge(e.target.value);
  }

  const modeCourant = MODES.find((m) => m.id === mode);

  return (
    <div className="exercise">
      <TitreSync
        key={mode}
        mode={mode}
        nom={nom}
        prenom={prenom}
        onTitre={setTitreDocument}
      />
      <div className="objectives">
        <h2>Objectifs de l'exercice</h2>
        <ul>
          <li>Déclarer trois états : <code>nom</code>, <code>prenom</code> et <code>age</code>.</li>
          <li>Créer un champ de saisie contrôlé pour chaque état.</li>
          <li>Mettre à jour le titre du document avec <code>nom + " " + prenom</code>.</li>
          <li>Observer le comportement de useEffect selon le tableau de dépendances.</li>
        </ul>
      </div>

      <DemoWorkspace
        title="Salutation et dépendances de useEffect"
        code={
          <CodeBlock
            code={snippets.ex03Solution}
            title="Code du composant Salutation - PDF page 243"
          />
        }
        result={
          <div className="demo-card">
            <div className="demo-card__head">
              <h2>Démonstration</h2>
              <span className="demo-card__hint">
                Le titre de l'onglet du navigateur est aussi mis à jour.
              </span>
            </div>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="salutation-nom">nom :</label>
                <input id="salutation-nom" type="text" value={nom} onChange={changeNom} />
              </div>
              <div className="field">
                <label htmlFor="salutation-prenom">prénom :</label>
                <input id="salutation-prenom" type="text" value={prenom} onChange={changePrenom} />
              </div>
              <div className="field">
                <label htmlFor="salutation-age">âge :</label>
                <input id="salutation-age" type="text" value={age} onChange={changeAge} />
              </div>
            </div>

            <div className="salutation-preview">
              <h2>Salutation</h2>
              <p>salut {nom} {prenom}, votre âge est : {age}</p>
              <p className="title-preview">
                Titre du document : <strong>{titreDocument || "(non modifié)"}</strong>
              </p>
            </div>

            <div className="variant-panel">
              <h3>Variantes du deuxième argument de useEffect</h3>
              <div className="chip-row">
                {MODES.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    className={`chip ${mode === m.id ? "chip--active" : ""}`}
                    onClick={() => setMode(m.id)}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              <p className="variant-help">{modeCourant.help}</p>
            </div>
          </div>
        }
        adaptation={
          <>
            le sélecteur de variantes <code>[nom, prenom]</code>, <code>[nom]</code>,{" "}
            <code>[]</code> et « sans tableau » a été ajouté à la démonstration pour
            comparer les comportements de <code>useEffect</code>. Le code source du PDF
            reste affiché tel quel.
          </>
        }
        resultHint="Modifiez nom, prénom ou âge, puis changez le tableau de dépendances."
        notes={
          <div className="callout callout--info">
            <strong>À observer :</strong> avec <code>[nom, prenom]</code>, modifier l'âge ne
            relance pas l'effet. Avec <code>[]</code>, le titre reste celui du premier
            rendu. Sans tableau, chaque rendu relance l'effet.
          </div>
        }
      />
    </div>
  );
}

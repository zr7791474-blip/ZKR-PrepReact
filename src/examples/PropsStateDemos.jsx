import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

/* ---------- Props dans un composant fonction ---------- */

function PresentationFonction(props) {
  const { nom, prenom } = props.personne;
  return (
    <div>
      <h2>
        Salut {nom} {prenom}
      </h2>
      {props.diplomes && (
        <ul className="simple-list">
          {props.diplomes.map((diplome) => (
            <li key={diplome}>{diplome}</li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
}

export function DemoPropsPresentation() {
  const [personnes, setPersonnes] = useState([
    { nom: "Rami", prenom: "Ahmed" },
    { nom: "Kamali", prenom: "Ali" },
    { nom: "Fahmi", prenom: "Khalid" },
  ]);
  const diplomes = ["Bac", "DUT", "Licence"];

  function changerNom(index, nom) {
    setPersonnes(
      personnes.map((personne, position) =>
        position === index ? { ...personne, nom } : personne
      )
    );
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Props dans un composant fonction"
        code={<CodeBlock code={snippets.propsFonction} title="Presentation.js - PDF pages 124 à 133" />}
        result={
          <div className="demo-card">
            <div className="form-grid">
              {personnes.map((personne, index) => (
                <div className="field" key={personne.prenom}>
                  <label htmlFor={`props-nom-${index}`}>nom de {personne.prenom}</label>
                  <input
                    id={`props-nom-${index}`}
                    type="text"
                    value={personne.nom}
                    onChange={(event) => changerNom(index, event.target.value)}
                  />
                </div>
              ))}
            </div>

            {personnes.map((personne) => (
              <PresentationFonction
                key={personne.prenom}
                personne={personne}
                diplomes={diplomes}
              />
            ))}

            <p className="demo-card__hint">
              Le même composant <code>Presentation</code> est réutilisé trois fois avec des props
              différentes. Un tableau <code>diplomes</code> est également transmis puis affiché.
            </p>
          </div>
        }
        resultHint="Chaque salutation est le rendu réel du composant Presentation à partir de props.personne."
      />
    </div>
  );
}

/* ---------- Props dans un composant classe ---------- */

class SalutationClasse extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Salut {this.props.nom} {this.props.prenom}
        </h2>
        {this.props.diplomes && (
          <ul className="simple-list">
            {this.props.diplomes.map((diplome) => (
              <li key={diplome}>{diplome}</li>
            ))}
          </ul>
        )}
        <hr />
      </div>
    );
  }
}

export function DemoPropsClasse() {
  const [nom, setNom] = useState("Rami");
  const diplomes = ["Bac", "DUT", "Licence"];

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Props dans un composant classe"
        code={<CodeBlock code={snippets.propsClasse} title="Salutation.js - PDF pages 135 à 138" />}
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="classe-props-nom">nom du premier objet</label>
              <input
                id="classe-props-nom"
                type="text"
                value={nom}
                onChange={(event) => setNom(event.target.value)}
              />
            </div>

            <SalutationClasse nom={nom} prenom="Ahmed" />
            <SalutationClasse nom="Kamali" prenom="Ali" />
            <SalutationClasse nom="Fahmi" prenom="Khalid" />

            <h3>Passage d'un objet et d'un Array</h3>
            <SalutationClasse
              nom={nom}
              prenom="Ahmed"
              diplomes={diplomes}
            />

            <p className="demo-card__hint">
              Dans une classe, les props sont lues avec <code>this.props.nom</code> et{" "}
              <code>this.props.prenom</code>.
            </p>
          </div>
        }
        adaptation="les composants classe sont identiques au PDF ; le nom du premier objet est simplement rendu modifiable pour vérifier que this.props suit la valeur passée."
      />
    </div>
  );
}

/* ---------- props.children ---------- */

function PresentationChildren(props) {
  return (
    <div>
      <h2>
        Salut {props.nom} {props.prenom}
      </h2>
      {props.children}
      <hr />
    </div>
  );
}

export function DemoChildren() {
  return (
    <div className="exercise">
      <DemoWorkspace
        title="Passer un contenu dynamique avec props.children"
        code={<CodeBlock code={snippets.children} title="props.children - PDF pages 140 et 141" />}
        result={
          <div className="demo-card">
            <PresentationChildren nom="Rami" prenom="Ahmed">
              <p>ce ci est un children props</p>
            </PresentationChildren>

            <PresentationChildren nom="Kamali" prenom="Ali">
              <button type="button" className="btn btn--ghost btn--small">
                quitter
              </button>
            </PresentationChildren>

            <p className="demo-card__hint">
              Le paragraphe et le bouton sont écrits entre les balises de{" "}
              <code>Presentation</code> : ils arrivent dans <code>props.children</code>.
            </p>
          </div>
        }
        resultHint="Le bouton « quitter » est un vrai élément enfant transmis puis rendu par le composant."
      />
    </div>
  );
}

/* ---------- State dans un composant classe ---------- */

class MessageClasse extends React.Component {
  constructor() {
    super();
    this.state = { message: "Bien venu visiteur", btnMessage: "inscription" };
  }

  inscription() {
    this.setState({
      message: "votre inscription est effectuée",
      btnMessage: "merci",
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => this.inscription()}
        >
          {this.state.btnMessage}
        </button>
      </div>
    );
  }
}

export function DemoStateClasse() {
  return (
    <div className="exercise">
      <DemoWorkspace
        title="State et setState dans un composant classe"
        code={<CodeBlock code={snippets.stateClasse} title="Message.js - PDF pages 143 à 148" />}
        result={
          <div className="demo-card demo-card--center">
            <MessageClasse />
            <p className="demo-card__hint">
              Le clic appelle <code>this.setState()</code> : le message et le libellé du bouton
              changent, ce qui déclenche un nouveau <code>render()</code>.
            </p>
          </div>
        }
        resultHint="L'état est stocké dans this.state et modifié uniquement par this.setState()."
      />
    </div>
  );
}

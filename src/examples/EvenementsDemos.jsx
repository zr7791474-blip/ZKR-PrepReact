import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

/* ---------- Exercice d'application 1 : inscription ---------- */

export function ExerciceInscription() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [information, setInformation] = useState("");

  function envoyer() {
    setInformation(`nom:${nom} prenom:${prenom}`);
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Exercice d'application 1 : afficher nom et prénom"
        code={
          <CodeBlock
            code={snippets.inscriptionSolution}
            title="Solution officielle - PDF pages 154 et 155"
          />
        }
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="inscription-nom">Nom:</label>
              <input
                id="inscription-nom"
                type="text"
                value={nom}
                onChange={(event) => setNom(event.target.value.toUpperCase())}
              />
            </div>
            <div className="field-row">
              <label htmlFor="inscription-prenom">Prenom:</label>
              <input
                id="inscription-prenom"
                type="text"
                value={prenom}
                onChange={(event) => setPrenom(event.target.value.toUpperCase())}
              />
            </div>
            <button type="button" className="btn btn--primary" onClick={envoyer}>
              Afficher
            </button>
            <p>{information}</p>
            <p className="demo-card__hint">
              Les deux champs convertissent la saisie avec <code>toUpperCase()</code>. Le bouton
              appelle <code>envoyer</code> sans parenthèses dans le <code>onClick</code>.
            </p>
          </div>
        }
        resultHint="La valeur affichée est exactement le message construit par la fonction envoyer()."
      />
    </div>
  );
}

/* ---------- Exercice d'application 2 : validateur de mot de passe ---------- */

function ValidatorFonction() {
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <label htmlFor="validator-fonction">Entrer votre password:</label>
        <input
          id="validator-fonction"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {password.length < 4 ? "Password doit avoir au moins t 4 caractères" : ""}
    </div>
  );
}

class ValidatorClasse extends React.Component {
  constructor() {
    super();
    this.state = { password: "" };
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="validator-classe">Entrer votre password:</label>
          <input
            id="validator-classe"
            type="password"
            value={this.state.password}
            onChange={(event) => this.setState({ password: event.target.value })}
          />
        </div>
        {this.state.password.length < 4
          ? "Password doit avoir au moins t 4 caractères"
          : ""}
      </div>
    );
  }
}

export function ExerciceValidator() {
  return (
    <div className="exercise">
      <DemoWorkspace
        title="Exercice d'application 2 : validateur de mot de passe"
        code={
          <>
            <CodeBlock
              code={snippets.validatorFonction}
              title="Solution fonctionnelle - PDF pages 156 et 157"
            />
            <CodeBlock
              code={snippets.validatorClasse}
              title="Solution classe - PDF page 157"
            />
          </>
        }
        result={
          <div className="demo-card">
            <div className="salutation-preview">
              <h3>Version fonction</h3>
              <ValidatorFonction />
            </div>

            <div className="salutation-preview">
              <h3>Version classe</h3>
              <ValidatorClasse />
            </div>

            <p className="demo-card__hint">
              Le message apparaît tant que le mot de passe contient moins de 4 caractères.
            </p>
          </div>
        }
        resultHint="Les deux versions sont réellement contrôlées : la valeur de l'input est liée au state."
      />
    </div>
  );
}

/* ---------- Communication inter-composant ---------- */

const listeCourses = [
  { nom: "banane", type: "fruit" },
  { nom: "orange", type: "fruit" },
  { nom: "pomme", type: "fruit" },
  { nom: "raisins", type: "fruit" },
  { nom: "kiwi", type: "fruit" },
  { nom: "tomate", type: "legume" },
  { nom: "carotte", type: "legume" },
  { nom: "pomme de terre", type: "legume" },
  { nom: "navet", type: "legume" },
  { nom: "poivron", type: "legume" },
];

function ChercheBar(props) {
  const [term, setTerm] = useState("");

  function onChercheSubmitBar(event) {
    event.preventDefault();
    props.onChercheSubmit(term);
  }

  return (
    <div className="demo-card">
      <h2>composant ChercheBar</h2>
      <form onSubmit={(event) => onChercheSubmitBar(event)}>
        <div className="field-row">
          <label htmlFor="cherche-term">Entrer le mot clé de recherche:</label>
          <input
            id="cherche-term"
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value.toUpperCase())}
          />
        </div>
        <button type="submit" className="btn btn--primary">
          chercher
        </button>
      </form>
    </div>
  );
}

function ResultatList(props) {
  return (
    <div className="demo-card">
      <h2>composant ResultatList</h2>
      {props.resultats.length === 0 ? (
        <p>pas de resultats</p>
      ) : (
        <div className="list">
          <ul className="simple-list">
            {props.resultats.map((item) => {
              return <li key={item.nom}>{item.nom}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export function DemoCommunication() {
  const [type, setType] = useState("");
  const [resultas, setResultas] = useState([]);

  function onChercheSubmitApp(valeur) {
    setType(valeur);
    setResultas(listeCourses.filter((item) => item.type.toUpperCase() === valeur));
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Communication inter-composant : App, ChercheBar et ResultatList"
        code={
          <>
            <CodeBlock code={snippets.communicationApp} title="App.js - PDF pages 159 à 164" />
            <CodeBlock
              code={snippets.communicationChercheBar}
              title="ChercheBar.js - PDF pages 161 et 162"
            />
            <CodeBlock
              code={snippets.communicationResultatList}
              title="ResultatList.js - PDF pages 163 et 164"
            />
          </>
        }
        result={
          <div className="demo-card">
            <h2>Composant App</h2>
            <ChercheBar onChercheSubmit={onChercheSubmitApp} />
            <p>
              le type:
              <span style={{ color: "rgb(36, 44, 33)", fontWeight: "bold" }}>{type}</span>
            </p>
            <ResultatList resultats={resultas} />
            <p className="demo-card__hint">
              Saisir FRUIT ou LEGUME puis cliquer sur « chercher » : l'enfant remonte la valeur au
              parent, qui filtre la liste et la transmet à ResultatList.
            </p>
          </div>
        }
        resultHint="La saisie est convertie en majuscules dans ChercheBar, puis filtrée dans App."
      />
    </div>
  );
}

/* ---------- Cycle de vie des composants ---------- */

class CompteurCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { compteur: 0 };
    this.incrementer = () => {
      this.setState({ compteur: this.state.compteur + 1 });
    };
    this.decrementer = () => {
      this.setState({ compteur: this.state.compteur - 1 });
    };
  }

  journaliser(message) {
    if (this.props.onLog) {
      this.props.onLog(message);
    }
  }

  componentDidMount() {
    // Le constructeur du PDF journalise deja ; on regroupe ici pour ne pas
    // mettre a jour le parent pendant la phase de rendu.
    this.journaliser("constructeur");
    this.journaliser("Component Did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    // Ne journalise que les mises a jour du compteur, pas celles du journal
    // du parent, afin d'eviter une boucle de rendu.
    if (prevState.compteur !== this.state.compteur) {
      this.journaliser("Component Did update");
    }
  }

  componentWillUnmount() {
    this.journaliser("Component est demonté");
  }

  render() {
    return (
      <div className="demo-card" style={{ background: "yellow" }}>
        <h3>composant Compteur</h3>
        <p>compteur:{this.state.compteur}</p>
        <div className="button-row">
          <button type="button" className="btn btn--primary btn--small" onClick={this.incrementer}>
            Incrementer
          </button>
          <button type="button" className="btn btn--ghost btn--small" onClick={this.decrementer}>
            Decrementer
          </button>
        </div>
      </div>
    );
  }
}

class AppCompteurCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMonter: true };
    this.monter = () => {
      this.setState({ isMonter: true });
    };
    this.demonter = () => {
      this.setState({ isMonter: false });
    };
  }

  render() {
    return (
      <div>
        <div className="button-row button-row--start">
          <button
            type="button"
            className="btn btn--primary btn--small"
            onClick={this.monter}
            disabled={this.state.isMonter}
          >
            Monter
          </button>
          <button
            type="button"
            className="btn btn--ghost btn--small"
            onClick={this.demonter}
            disabled={!this.state.isMonter}
          >
            Demonter
          </button>
        </div>
        {this.state.isMonter ? <CompteurCycle onLog={this.props.onLog} /> : null}
      </div>
    );
  }
}

export function DemoCycleVie() {
  const [journal, setJournal] = useState([]);

  function ajouterLog(message) {
    setJournal((entrees) => [...entrees, message]);
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Cycle de vie d'un composant classe"
        code={
          <>
            <CodeBlock
              code={snippets.cycleVieClasse}
              title="Compteur.js - PDF pages 166 à 170"
            />
            <CodeBlock code={snippets.cycleVieApp} title="AppCompteur.js - PDF pages 167 à 169" />
          </>
        }
        result={
          <div className="demo-card">
            <AppCompteurCycle onLog={ajouterLog} />

            <h3>Journal du cycle de vie</h3>
            {journal.length === 0 ? (
              <p className="muted">Aucun événement pour le moment.</p>
            ) : (
              <ol className="action-log">
                {journal.map((entree, index) => (
                  <li key={`${entree}-${index}`}>{entree}</li>
                ))}
              </ol>
            )}

            <p className="demo-card__hint">
              Incrementer ou Decrementer déclenche componentDidUpdate. « Demonter » déclenche
              componentWillUnmount, « Monter » reconstruit le composant.
            </p>
          </div>
        }
        adaptation="le PDF écrit ces étapes avec console.log ; la démonstration les transmet aussi à un journal affiché à l'écran (prop onLog). Le constructeur et componentDidMount sont journalisés au montage, et componentDidUpdate uniquement lorsque le compteur change. Les boutons Monter / Demonter sont inchangés."
      />
    </div>
  );
}

/* ---------- Styliser les composants React ---------- */

const styleInline = {
  color: "#fff",
  borderColor: "#5C5CFF",
  padding: "10px",
  backgroundColor: "#5C5CFF",
};

function BoutonStyle() {
  return (
    <button type="button" className="buttonStyle">
      Nom du bouton
    </button>
  );
}

function BoutonComposantStyle() {
  return (
    <button
      type="button"
      style={{
        color: "#fff",
        border: "1px solid #b23a48",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#b23a48",
      }}
    >
      Nom du bouton
    </button>
  );
}

export function DemoStylisation() {
  return (
    <div className="exercise">
      <DemoWorkspace
        title="Trois façons de styliser un bouton"
        code={
          <>
            <CodeBlock code={snippets.stylesInline} title="Style inline - PDF page 172" />
            <CodeBlock code={snippets.stylesCss} title="Classe CSS - PDF pages 173 et 174" />
          </>
        }
        result={
          <div className="demo-card">
            <h3>1. Style inline</h3>
            <button type="button" style={styleInline}>
              Nom du bouton
            </button>

            <h3>2. Classe CSS avec className</h3>
            <BoutonStyle />

            <h3>3. Composant stylisé (simulation)</h3>
            <BoutonComposantStyle />

            <p className="demo-card__hint">
              Le PDF cite aussi les modules CSS et styled-components. Le troisième bouton simule un
              composant stylisé sans ajouter de dépendance au projet.
            </p>
          </div>
        }
        adaptation="styled-components n'est pas installé dans ce projet ; le troisième bouton utilise un composant React avec un style inline équivalent. Les deux premières méthodes sont exactement celles du PDF."
      />
    </div>
  );
}

/* ---------- Affichage conditionnel ---------- */

function Connecte() {
  return <h1>Bienvenue !</h1>;
}

function Anonymous() {
  return <h1>Veuillez vous inscrire.</h1>;
}

export function DemoConditionnel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function renderContenu() {
    if (isLoggedIn) {
      return <Connecte />;
    }
    return <Anonymous />;
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Affichage conditionnel : Connecte ou Anonymous"
        code={
          <CodeBlock code={snippets.affichageConditionnel} title="Affichage conditionnel - PDF pages 176 et 177" />
        }
        result={
          <div className="demo-card demo-card--center">
            {renderContenu()}
            <label className="field-row" style={{ justifyContent: "center" }}>
              <input
                type="checkbox"
                checked={isLoggedIn}
                onChange={(event) => setIsLoggedIn(event.target.checked)}
              />
              isLoggedIn
            </label>
            <p className="demo-card__hint">
              La fonction vérifie <code>isLoggedIn</code> puis retourne <code>&lt;Connecte /&gt;</code>{" "}
              ou <code>&lt;Anonymous /&gt;</code>.
            </p>
          </div>
        }
        resultHint="Le titre affiché est réellement l'un des deux composants du PDF."
      />
    </div>
  );
}

/* ---------- Listes et clés ---------- */

const nombres = [1, 2, 3, 4, 5];

export function DemoListesCles() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Apprendre JSX" },
    { id: 2, text: "Manipuler les props" },
    { id: 3, text: "Gérer le state" },
  ]);
  const [texte, setTexte] = useState("");

  const listItems = nombres.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  function ajouterTodo(event) {
    event.preventDefault();
    if (!texte.trim()) return;
    const prochainId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    setTodos([...todos, { id: prochainId, text: texte }]);
    setTexte("");
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Listes et clés"
        code={<CodeBlock code={snippets.listesCles} title="Listes et clés - PDF pages 179 à 181" />}
        result={
          <div className="demo-card">
            <h3>numbers.map</h3>
            <ul>{listItems}</ul>

            <h3>todos.map avec key=&#123;todo.id&#125;</h3>
            <ul className="simple-list">
              {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
              ))}
            </ul>

            <form onSubmit={ajouterTodo} className="field-row">
              <label htmlFor="todo-texte">nouvelle tâche</label>
              <input
                id="todo-texte"
                type="text"
                value={texte}
                onChange={(event) => setTexte(event.target.value)}
              />
              <button type="submit" className="btn btn--primary btn--small">
                Ajouter
              </button>
            </form>

            <p className="demo-card__hint">
              Chaque <code>&lt;li&gt;</code> reçoit une clé stable : le nombre lui-même ou l'id de la
              tâche.
            </p>
          </div>
        }
        resultHint="L'ajout d'une tâche montre l'utilisation de key={todo.id} pour identifier chaque élément."
      />
    </div>
  );
}

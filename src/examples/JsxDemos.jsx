import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

const elems = ["Element1", "Element2", "Element3", "Element4", "Element5"];

/* ---------- Liste JSX, attributs et expressions ---------- */

export function DemoJsxListe() {
  const [color, setColor] = useState("red");
  const [sansPuce, setSansPuce] = useState(true);
  const styleListe = sansPuce
    ? { listStyleType: "none", color }
    : { listStyleType: "disc", color };

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Hello React avec JSX, attributs et expressions"
        code={
          <>
            <CodeBlock code={snippets.jsxHello} title="Liste JSX - PDF pages 75 a 78" />
            <CodeBlock
              code={snippets.jsxExpressions}
              title="Expressions JavaScript dans JSX - PDF pages 80 a 83"
            />
          </>
        }
        result={
          <div className="demo-card">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="jsx-color">couleur</label>
                <select
                  id="jsx-color"
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                >
                  <option value="red">red</option>
                  <option value="blue">blue</option>
                  <option value="#2f7d32">#2f7d32</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="jsx-puces">listStyleType</label>
                <select
                  id="jsx-puces"
                  value={sansPuce ? "none" : "disc"}
                  onChange={(event) => setSansPuce(event.target.value === "none")}
                >
                  <option value="none">none</option>
                  <option value="disc">disc</option>
                </select>
              </div>
            </div>

            <ul id="list1" style={styleListe}>
              {elems.map((elem, index) => (
                <li key={index}>{elem}</li>
              ))}
            </ul>

            <p className="demo-card__hint">
              La liste est générée par <code>elems.map(...)</code> et reçoit l'attribut
              <code> key=&#123;index&#125;</code>. JSX utilise <code>className</code> et un objet pour
              <code> style</code>.
            </p>
          </div>
        }
        resultHint="La couleur et le style de liste sont réellement appliqués par l'objet styleListe du code."
      />
    </div>
  );
}

/* ---------- Composant fonction ---------- */

function ListeElementsFonction({ elems: valeurs, color }) {
  return (
    <ul>
      {valeurs.map(function (elem, index) {
        return (
          <li key={index} style={{ color }}>
            {elem}
          </li>
        );
      })}
    </ul>
  );
}

function ElementFonction({ color, elem }) {
  return <li style={{ color }}>{elem}</li>;
}

function ListeAvecElement({ elems: valeurs, color }) {
  return (
    <ul>
      {valeurs.map(function (elem, index) {
        return <ElementFonction key={index} elem={elem} color={color} />;
      })}
    </ul>
  );
}

export function DemoListeFonction() {
  const [color, setColor] = useState("red");

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Créer un élément JSX avec une fonction"
        code={
          <>
            <CodeBlock code={snippets.jsxFonction} title="ListeElements - PDF pages 85 a 92" />
            <CodeBlock
              code={snippets.jsxElementComposant}
              title="Composant Element - PDF pages 90 a 92"
            />
          </>
        }
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="fonction-color">couleur</label>
              <select
                id="fonction-color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              >
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
              </select>
            </div>

            <h3>ListeElements (props.elems / props.style)</h3>
            <ListeElementsFonction elems={elems} color={color} />

            <h3>ListeElements avec le composant Element</h3>
            <ListeAvecElement elems={elems} color={color} />

            <p className="demo-card__hint">
              Les deux composants sont des fonctions qui retournent du JSX et lisent leurs props.
            </p>
          </div>
        }
        adaptation="les valeurs elems et color sont pilotées par les champs de la démonstration au lieu d'être écrites en dur ; les composants ListeElements et Element reprennent exactement la structure du PDF."
      />
    </div>
  );
}

/* ---------- Composant classe ---------- */

class ElementClasse extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return <li style={{ color: this.props.color }}>{this.props.elem}</li>;
  }
}

class ListeElementsClasse extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.elems.map((elem, index) => {
          return <ElementClasse key={index} elem={elem} color={this.props.color} />;
        })}
      </ul>
    );
  }
}

export function DemoListeClasse() {
  const [color, setColor] = useState("red");

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Créer un élément JSX avec une classe"
        code={<CodeBlock code={snippets.jsxClasse} title="Composants classe - PDF pages 94 et 95" />}
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="classe-color">couleur</label>
              <select
                id="classe-color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              >
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
              </select>
            </div>

            <ListeElementsClasse elems={elems} color={color} />

            <p className="demo-card__hint">
              <code>this.props.elems.map</code> utilise une arrow function pour conserver
              <code> this</code> à l'intérieur de <code>render()</code>.
            </p>
          </div>
        }
        resultHint="Les deux composants sont de vraies classes React.Component ; la couleur est lue via this.props."
      />
    </div>
  );
}

/* ---------- Règles d'écriture du code JSX ---------- */

export function DemoReglesJsx() {
  const [hideFirstItem, setHideFirstItem] = useState(true);

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Fragment, commentaires et expression conditionnelle"
        code={<CodeBlock code={snippets.jsxRegles} title="Règles JSX - PDF pages 100 a 104" />}
        result={
          <div className="demo-card">
            <h3>Un seul parent avec React.Fragment</h3>
            <React.Fragment>
              <div>Element1</div>
              <div>Element2</div>
              <div>Element3</div>
            </React.Fragment>

            <h3>Commentaires dans le JSX</h3>
            <ul>
              <li>Element1</li>
              {/* <li>Element2</li>
              <li>Element3</li>*/}
              <li>Element4</li>
              <li>Element5</li>
            </ul>

            <h3>Expression conditionnelle</h3>
            <label className="field-row">
              <input
                type="checkbox"
                checked={hideFirstItem}
                onChange={(event) => setHideFirstItem(event.target.checked)}
              />
              hideFirstItem
            </label>
            <ul>
              {hideFirstItem ? null : <li>Element1</li>}
              <li>Element2</li>
              <li>Element3</li>
              <li>Element4</li>
              <li>Element5</li>
            </ul>

            <p className="demo-card__hint">
              Element2 et Element3 sont réellement commentés : ils n'apparaissent pas dans le
              résultat. Décocher hideFirstItem fait réapparaître Element1.
            </p>
          </div>
        }
        resultHint="La case pilote l'expression ternaire du code ; les éléments commentés restent invisibles."
      />
    </div>
  );
}

/* ---------- Variables et expressions dans JSX ---------- */

export function DemoJsxVariables() {
  const [nom, setNom] = useState("Rami");
  const [nombreArticle, setNombreArticle] = useState(6);
  const remise = nombreArticle > 5 ? "2%" : "0%";

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Variables et expressions JavaScript dans JSX"
        code={
          <CodeBlock
            code={snippets.jsxVariables}
            title="Variables dans JSX - PDF pages 116 a 118 (reconstitution)"
          />
        }
        result={
          <div className="demo-card">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="jsx-var-nom">nom</label>
                <input
                  id="jsx-var-nom"
                  type="text"
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="jsx-var-articles">nombreArticle</label>
                <input
                  id="jsx-var-articles"
                  type="number"
                  value={nombreArticle}
                  onChange={(event) => setNombreArticle(Number(event.target.value))}
                />
              </div>
            </div>

            <div className="salutation-preview">
              <h1>Salut {nom}</h1>
              <p>Nombre d'articles : {nombreArticle}</p>
              <p>Remise : {remise}</p>
            </div>

            <p className="demo-card__hint">
              La remise vaut « 2% » dès que nombreArticle dépasse 5, sinon « 0% ».
            </p>
          </div>
        }
        adaptation="les pages 116 à 118 présentent surtout des captures d'écran ; le code affiché est reconstruit à partir des énoncés visibles. Les valeurs nom et nombreArticle sont rendues modifiables pour vérifier le calcul de la remise."
      />
    </div>
  );
}

/* ---------- Exercice d'entraînement : nom, prénom et âge ---------- */

function getAge(dateNaissance) {
  const annee = new Date(dateNaissance).getFullYear();
  return new Date().getFullYear() - annee;
}

function AppAgeFonction({ nom, prenom, dateNaissance }) {
  return (
    <p>
      Nom : {nom} - Prenom : {prenom} - Age : {getAge(dateNaissance)}
    </p>
  );
}

class AppAgeClasse extends React.Component {
  getAge(dateNaissance) {
    const annee = new Date(dateNaissance).getFullYear();
    return new Date().getFullYear() - annee;
  }

  render() {
    const { nom, prenom, dateNaissance } = this.props;
    return (
      <p>
        Nom : {nom} - Prenom : {prenom} - Age : {this.getAge(dateNaissance)}
      </p>
    );
  }
}

export function ExerciceJsxAge() {
  const [nom, setNom] = useState("Rami");
  const [prenom, setPrenom] = useState("Ahmed");
  const [dateNaissance, setDateNaissance] = useState("2000-01-01");

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Exercice d'entraînement : afficher nom, prénom et âge"
        code={
          <>
            <CodeBlock
              code={snippets.jsxExercice}
              title="Solution fonction - PDF pages 119 à 121 (reconstitution)"
            />
            <CodeBlock
              code={snippets.jsxExerciceClasse}
              title="Solution classe - PDF page 121 (reconstitution)"
            />
          </>
        }
        result={
          <div className="demo-card">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="age-nom">nom</label>
                <input
                  id="age-nom"
                  type="text"
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="age-prenom">prenom</label>
                <input
                  id="age-prenom"
                  type="text"
                  value={prenom}
                  onChange={(event) => setPrenom(event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="age-date">dateNaissance</label>
                <input
                  id="age-date"
                  type="date"
                  value={dateNaissance}
                  onChange={(event) => setDateNaissance(event.target.value)}
                />
              </div>
            </div>

            <h3>Version fonction</h3>
            <AppAgeFonction nom={nom} prenom={prenom} dateNaissance={dateNaissance} />

            <h3>Version classe</h3>
            <AppAgeClasse nom={nom} prenom={prenom} dateNaissance={dateNaissance} />

            <p className="demo-card__hint">
              L'âge est calculé avec <code>getAge()</code> à chaque rendu, à partir de la date de
              naissance.
            </p>
          </div>
        }
        adaptation="le PDF fournit les deux solutions sous forme d'images (pages 120 et 121) ; le code affiché est une reconstitution fidèle à l'énoncé. Les valeurs sont rendues modifiables pour vérifier le calcul, mais getAge() et la structure des composants restent identiques."
      />
    </div>
  );
}

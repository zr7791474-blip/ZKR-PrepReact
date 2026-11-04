import React, { useEffect, useState } from "react";
import axios from "axios";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

const API_URL = "https://jsonplaceholder.typicode.com/users";

/* ---------- Formulaire contrôlé NameForm ---------- */

function NameFormFonction() {
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setNom(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Le nom a été soumis : " + nom);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" name="nom" value={nom} onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" className="btn btn--primary btn--small" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

class NameFormClasse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nom: "", message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ nom: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ message: "Le nom a été soumis : " + this.state.nom });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom :
            <input
              type="text"
              name="nom"
              value={this.state.nom}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Envoyer" className="btn btn--primary btn--small" />
        </form>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}

export function DemoNameForm() {
  return (
    <div className="exercise">
      <DemoWorkspace
        title="Formulaire contrôlé NameForm"
        code={
          <>
            <CodeBlock
              code={snippets.nameFormFonction}
              title="NameForm fonctionnel - PDF pages 185 et 186"
            />
            <CodeBlock
              code={snippets.nameFormClasse}
              title="NameForm classe - PDF pages 186 et 187"
            />
          </>
        }
        result={
          <div className="demo-card">
            <div className="salutation-preview">
              <h3>Version fonction</h3>
              <NameFormFonction />
            </div>

            <div className="salutation-preview">
              <h3>Version classe</h3>
              <NameFormClasse />
            </div>

            <p className="demo-card__hint">
              La valeur du champ est stockée dans le state : le composant est la source unique de
              vérité.
            </p>
          </div>
        }
        adaptation="le PDF affiche le nom avec alert() ; la démonstration affiche le même message sous le formulaire pour rester testable et lisible à l'écran. Les handlers et preventDefault sont identiques."
      />
    </div>
  );
}

/* ---------- Textarea ---------- */

function FTextArea(props) {
  const [message, setMessage] = useState(props.value);

  const handlerChange = (event) => {
    setMessage(event.target.value);
  };

  const handlerFocus = () => {
    setMessage("");
  };

  return (
    <div>
      <textarea
        cols={props.cols}
        rows={props.rows}
        value={message}
        onFocus={handlerFocus}
        onChange={handlerChange}
      />
      <p className="demo-card__hint">{message.length} caractère(s)</p>
    </div>
  );
}

class TextAreaClasse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: props.value };
  }

  handlerChange(event) {
    this.setState({ message: event.target.value });
  }

  handlerFocus() {
    this.setState({ message: "" });
  }

  render() {
    return (
      <div>
        <textarea
          cols={this.props.cols}
          rows={this.props.rows}
          value={this.state.message}
          onFocus={this.handlerFocus.bind(this)}
          onChange={this.handlerChange.bind(this)}
        />
        <p className="demo-card__hint">{this.state.message.length} caractère(s)</p>
      </div>
    );
  }
}

export function DemoTextArea() {
  return (
    <div className="exercise">
      <DemoWorkspace
        title="Champ de saisie multiligne TextArea"
        code={
          <>
            <CodeBlock
              code={snippets.textareaFonction}
              title="TextArea fonctionnel - PDF pages 189 et 190"
            />
            <CodeBlock
              code={snippets.textareaClasse}
              title="TextArea classe - PDF pages 190 et 191"
            />
          </>
        }
        result={
          <div className="demo-card">
            <div className="salutation-preview">
              <h3>Version fonction</h3>
              <FTextArea cols={40} rows={10} value="Tapez votre texte ici" />
            </div>

            <div className="salutation-preview">
              <h3>Version classe</h3>
              <TextAreaClasse cols={40} rows={10} value="Tapez votre texte ici" />
            </div>

            <p className="demo-card__hint">
              Cliquer dans la zone de texte la vide (onFocus), conformément au composant du PDF.
            </p>
          </div>
        }
        resultHint="Le compteur affiché suit réellement la valeur du state du textarea."
      />
    </div>
  );
}

/* ---------- Select ---------- */

const optionsSelect = ["Element1", "Element2", "Element3", "Element4", "Element5"];

function SelectFonction({ options }) {
  const [valeur, setValeur] = useState("1");

  const handlerChange = (event) => {
    setValeur(event.target.value);
  };

  return (
    <div>
      <select value={valeur} onChange={handlerChange}>
        {options.map(function (option, index) {
          return (
            <option key={index + 1} value={index + 1}>
              {option}
            </option>
          );
        })}
      </select>
      <p>
        key=<strong>{valeur}</strong> — {options[Number(valeur) - 1]}
      </p>
    </div>
  );
}

class SelectClasse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valeur: String(props.defaultValue || 1) };
  }

  handlerChange(event) {
    this.setState({ valeur: event.target.value });
  }

  render() {
    return (
      <div>
        <select value={this.state.valeur} onChange={this.handlerChange.bind(this)}>
          {this.props.options.map(function (option, index) {
            return (
              <option key={index + 1} value={index + 1}>
                {option}
              </option>
            );
          })}
        </select>
        <p>
          key=<strong>{this.state.valeur}</strong> —{" "}
          {this.props.options[Number(this.state.valeur) - 1]}
        </p>
      </div>
    );
  }
}

export function DemoSelect() {
  return (
    <div className="exercise">
      <DemoWorkspace
        title="Liste de sélection Select"
        code={
          <>
            <CodeBlock
              code={snippets.selectFonction}
              title="Select fonctionnel - PDF pages 193 et 194"
            />
            <CodeBlock
              code={snippets.selectClasse}
              title="Select classe - PDF pages 196 et 197"
            />
          </>
        }
        result={
          <div className="demo-card">
            <div className="salutation-preview">
              <h3>Version fonction</h3>
              <SelectFonction options={optionsSelect} />
            </div>

            <div className="salutation-preview">
              <h3>Version classe (defaultValue = 4)</h3>
              <SelectClasse options={optionsSelect} defaultValue={4} />
            </div>

            <p className="demo-card__hint">
              L'option choisie est lue avec <code>event.target.value</code> ; les options sont
              générées avec <code>map</code>.
            </p>
          </div>
        }
        resultHint="La valeur key affichée correspond réellement à l'option sélectionnée."
      />
    </div>
  );
}

/* ---------- Boutons radio ---------- */

const radios = [
  { value: 1, text: "radio1" },
  { value: 2, text: "radio2" },
  { value: 3, text: "radio3", checked: true },
  { value: 4, text: "radio4" },
];

function RadioGroupControle() {
  const [selection, setSelection] = useState("3");

  return (
    <div>
      {radios.map((radio, index) => {
        return (
          <label key={index} className="field-row">
            <input
              type="radio"
              value={radio.value}
              name="radioname"
              checked={selection === String(radio.value)}
              onChange={(event) => setSelection(event.target.value)}
            />
            <span>{radio.text}</span>
          </label>
        );
      })}
      <p>
        sélection : <strong>{selection}</strong>
      </p>
    </div>
  );
}

export function DemoRadio() {
  return (
    <div className="exercise">
      <DemoWorkspace
        title="Groupe de boutons radio"
        code={
          <>
            <CodeBlock
              code={snippets.radioFonction}
              title="RadioGroup fonctionnel - PDF page 199"
            />
            <CodeBlock
              code={snippets.radioClasse}
              title="RadioGroup classe - PDF page 200"
            />
          </>
        }
        result={
          <div className="demo-card">
            <RadioGroupControle />
            <p className="demo-card__hint">
              Tous les boutons partagent <code>name="radioname"</code> : un seul peut être
              sélectionné. L'option portant <code>checked: true</code> est radio3.
            </p>
          </div>
        }
        adaptation="le PDF se contente d'afficher le groupe et de définir checked dans le tableau radios ; la démonstration conserve le state de la sélection pour afficher le bouton réellement choisi."
      />
    </div>
  );
}

/* ---------- Cases à cocher ---------- */

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: props.checked || false };
  }

  handlerChange(event) {
    this.setState({ checked: event.target.checked });
    if (this.props.onToggle) {
      this.props.onToggle(this.props.value, event.target.checked);
    }
  }

  render() {
    const checked =
      typeof this.props.controlledChecked === "boolean"
        ? this.props.controlledChecked
        : this.state.checked;

    return (
      <label className="field-row">
        <input
          type="checkbox"
          value={this.props.value}
          checked={checked}
          onChange={this.handlerChange.bind(this)}
        />
        <span>{this.props.text}</span>
      </label>
    );
  }
}

const checkboxesBase = [
  { value: 1, text: "check1" },
  { value: 2, text: "check2", checked: true },
  { value: 3, text: "check3", checked: true },
  { value: 4, text: "check4" },
];

class CheckBoxGroup extends React.Component {
  constructor(props) {
    super(props);
    const coches = props.checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    this.state = { coches };
    this.toggle = this.toggle.bind(this);
  }

  toggle(value, checked) {
    this.setState((etat) => ({
      coches: checked
        ? [...etat.coches, value]
        : etat.coches.filter((entree) => entree !== value),
    }));
  }

  render() {
    return (
      <div>
        {this.props.checkboxes.map((checkbox, index) => {
          return (
            <CheckBox
              key={index}
              text={checkbox.text}
              value={checkbox.value}
              checked={checkbox.checked}
              controlledChecked={this.state.coches.includes(checkbox.value)}
              onToggle={this.toggle}
            />
          );
        })}
        <p>
          cases cochées :{" "}
          <strong>{this.state.coches.length ? this.state.coches.join(", ") : "aucune"}</strong>
        </p>
      </div>
    );
  }
}

export function DemoCheckBox() {
  return (
    <div className="exercise">
      <DemoWorkspace
        title="Groupe de cases à cocher"
        code={<CodeBlock code={snippets.checkbox} title="CheckBox / CheckBoxGroup - PDF pages 202 et 203" />}
        result={
          <div className="demo-card">
            <CheckBoxGroup checkboxes={checkboxesBase} />
            <p className="demo-card__hint">
              Plusieurs cases peuvent être cochées en même temps, contrairement aux boutons radio.
            </p>
          </div>
        }
        adaptation="le groupe remonte l'état des cases (prop onToggle + controlledChecked) pour afficher la liste des cases cochées. Le composant CheckBox et l'initialisation depuis props.checked restent ceux du PDF."
      />
    </div>
  );
}

/* ---------- API users avec Axios, composant fonctionnel ---------- */

export function DemoAxiosUsers() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setUtilisateurs(res.data);
        setChargement(false);
      })
      .catch(() => {
        setErreur("Impossible de charger les utilisateurs avec Axios.");
        setChargement(false);
      });
  }, []);

  return (
    <div className="exercise">
      <DemoWorkspace
        title="API users avec Axios (composant fonctionnel)"
        code={
          <>
            <CodeBlock
              code={snippets.axiosFonctionnel}
              title="App.js - PDF pages 210 à 215"
            />
            <CodeBlock
              code={snippets.axiosFonctionnelAsync}
              title="Variante async / await - PDF page 215"
            />
          </>
        }
        result={
          <div className="demo-card">
            <h3>liste utilisateurs (Axios)</h3>
            {chargement && <p className="state state--loading">Chargement…</p>}
            {erreur && <p className="state state--error">{erreur}</p>}
            {!chargement && !erreur && (
              <>
                <h1>nombre d'utilisateurs: {utilisateurs.length}</h1>
                {utilisateurs.map((user) => (
                  <div className="user-card" key={user.id}>
                    <h3>
                      nom: {user.name} {user.username}
                    </h3>
                    <p>email:{user.email}</p>
                    <p>
                      ville:{user.address.city} rue:{user.address.street}
                    </p>
                  </div>
                ))}
              </>
            )}
            <p className="demo-card__hint">
              La requête réelle interroge <code>jsonplaceholder.typicode.com/users</code>.
            </p>
          </div>
        }
        resultHint="Les utilisateurs affichés proviennent de la réponse Axios (res.data)."
      />
    </div>
  );
}

/* ---------- API users avec fetch, composant fonctionnel ---------- */

export function DemoFetchUsers() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    let annule = false;

    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        if (!annule) {
          setUtilisateurs(users);
          setChargement(false);
        }
      })
      .catch(() => {
        if (!annule) {
          setErreur("Impossible de charger les utilisateurs avec fetch.");
          setChargement(false);
        }
      });

    return () => {
      annule = true;
    };
  }, []);

  return (
    <div className="exercise">
      <DemoWorkspace
        title="API users avec fetch (composant fonctionnel)"
        code={<CodeBlock code={snippets.fetchFonctionnel} title="fetch et async / await - PDF page 217" />}
        result={
          <div className="demo-card">
            <h3>liste utilisateurs (fetch)</h3>
            {chargement && <p className="state state--loading">Chargement…</p>}
            {erreur && <p className="state state--error">{erreur}</p>}
            {!chargement && !erreur && (
              <>
                <h1>nombre d'utilisateurs: {utilisateurs.length}</h1>
                {utilisateurs.map((user) => (
                  <div className="user-card" key={user.id}>
                    <h3>
                      nom: {user.name} {user.username}
                    </h3>
                    <p>email:{user.email}</p>
                    <p>
                      ville:{user.address.city} rue:{user.address.street}
                    </p>
                  </div>
                ))}
              </>
            )}
            <p className="demo-card__hint">
              <code>fetch</code> renvoie une réponse : il faut appeler{" "}
              <code>response.json()</code> avant de lire les utilisateurs.
            </p>
          </div>
        }
        resultHint="Le tableau utilisateurs est rempli par le second then de fetch."
      />
    </div>
  );
}

/* ---------- API users avec Axios, composant classe ---------- */

class AppAxiosClasse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { utilisateurs: [], chargement: true, erreur: "" };
  }

  componentDidMount() {
    axios
      .get(API_URL)
      .then((res) => {
        this.setState({ utilisateurs: res.data, chargement: false });
      })
      .catch(() => {
        this.setState({
          erreur: "Impossible de charger les utilisateurs avec Axios.",
          chargement: false,
        });
      });
  }

  render() {
    return (
      <div>
        <h3>liste utilisateurs</h3>
        {this.state.chargement && <p className="state state--loading">Chargement…</p>}
        {this.state.erreur && <p className="state state--error">{this.state.erreur}</p>}
        {!this.state.chargement && !this.state.erreur && (
          <div>
            <h1>nombre d'utilisateurs: {this.state.utilisateurs.length}</h1>
            {this.state.utilisateurs.map((user) => (
              <div className="user-card" key={user.id}>
                <h3>
                  nom: {user.name} {user.username}
                </h3>
                <p>email:{user.email}</p>
                <p>
                  ville:{user.address.city} rue:{user.address.street}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export function DemoAxiosClasse() {
  return (
    <div className="exercise">
      <DemoWorkspace
        title="API users avec Axios (composant classe)"
        code={<CodeBlock code={snippets.axiosClasse} title="App classe - PDF page 219" />}
        result={
          <div className="demo-card">
            <AppAxiosClasse />
            <p className="demo-card__hint">
              L'appel Axios est placé dans <code>componentDidMount</code> et met à jour{" "}
              <code>this.state.utilisateurs</code>.
            </p>
          </div>
        }
        resultHint="Le composant classe charge réellement la liste des utilisateurs au montage."
      />
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

/* ---------- Classes ES6 ---------- */

class Etudiant {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
  info() {
    return `Etudiant nom:${this.nom} a pour age:${this.age}`;
  }
}

class Stagiaire extends Etudiant {
  constructor(nom, age, stage) {
    super(nom, age);
    this.stage = stage;
  }
  info() {
    return `${super.info()} stage:${this.stage}`;
  }
}

export function DemoClasses() {
  const [stagiaires, setStagiaires] = useState([
    new Stagiaire("Rami", 23, "dev mobile"),
    new Stagiaire("Karimi", 21, "dev web"),
  ]);
  const [nom, setNom] = useState("Fahmi");
  const [age, setAge] = useState("22");
  const [stage, setStage] = useState("dev web");

  function ajouter() {
    if (!nom.trim() || !age) return;
    setStagiaires([...stagiaires, new Stagiaire(nom, Number(age), stage)]);
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Classes Etudiant et Stagiaire"
        code={
          <CodeBlock
            code={snippets.classesJs}
            title="Etudiant.js / Stagiaire.js - PDF pages 18 a 20"
          />
        }
        result={
          <div className="demo-card">
            <h2>Objets et heritage</h2>
            <ul className="simple-list">
              {stagiaires.map((stagiaire, index) => (
                <li key={`${stagiaire.nom}-${index}`}>{stagiaire.info()}</li>
              ))}
            </ul>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="classes-nom">Nom</label>
                <input
                  id="classes-nom"
                  type="text"
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="classes-age">Age</label>
                <input
                  id="classes-age"
                  type="number"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="classes-stage">Stage</label>
                <input
                  id="classes-stage"
                  type="text"
                  value={stage}
                  onChange={(event) => setStage(event.target.value)}
                />
              </div>
            </div>

            <button type="button" className="btn btn--primary" onClick={ajouter}>
              Ajouter un stagiaire
            </button>
          </div>
        }
        resultHint="Chaque ligne est le résultat réel de stagiaire.info() ; super.info() est appelé pour l'héritage."
      />
    </div>
  );
}

/* ---------- Template literals ---------- */

export function DemoTemplateLiterals() {
  const [salutation, setSalutation] = useState("salut ");
  const [nom, setNom] = useState("Rami");

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Template literal et concaténation"
        code={<CodeBlock code={snippets.templateLiterals} title="Template literals - PDF page 23" />}
        result={
          <div className="demo-card">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="tpl-salutation">salutation</label>
                <input
                  id="tpl-salutation"
                  type="text"
                  value={salutation}
                  onChange={(event) => setSalutation(event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="tpl-nom">nom</label>
                <input
                  id="tpl-nom"
                  type="text"
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
                />
              </div>
            </div>
            <p>
              <strong>Template literal :</strong> {`${salutation} ${nom}`}
            </p>
            <p>
              <strong>Concaténation :</strong> {salutation + " " + nom}
            </p>
          </div>
        }
        resultHint="Les deux expressions produisent la même chaîne, calculée à partir des deux champs."
      />
    </div>
  );
}

/* ---------- Ternaire ---------- */

export function DemoTernaire() {
  const [isMember, setIsMember] = useState(true);
  const remise = isMember === true ? 0.2 : 0.1;

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Opérateur conditionnel ternaire"
        code={<CodeBlock code={snippets.ternaire} title="Ternaire - PDF page 23" />}
        result={
          <div className="demo-card">
            <label className="field-row">
              <input
                type="checkbox"
                checked={isMember}
                onChange={(event) => setIsMember(event.target.checked)}
              />
              isMember
            </label>
            <p>
              <strong>remise :</strong> {remise}
            </p>
            <p className="demo-card__hint">
              La valeur affichée est calculée par <code>isMember === true ? 0.2 : 0.1</code>.
            </p>
          </div>
        }
      />
    </div>
  );
}

export function DemoTernaireNull() {
  const [nom, setNom] = useState("");

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Gérer une valeur nulle avec le ternaire"
        code={<CodeBlock code={snippets.ternaireNull} title="Ternaire et valeur nulle - PDF page 24" />}
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="null-nom">nom</label>
              <input
                id="null-nom"
                type="text"
                value={nom}
                onChange={(event) => setNom(event.target.value)}
              />
              <button type="button" className="btn btn--ghost btn--small" onClick={() => setNom("")}>
                Vider
              </button>
            </div>
            <p>
              <strong>salutation :</strong> {nom ? "salut " + nom : "inconnu"}
            </p>
            <p className="demo-card__hint">
              Exemple 1 : nom vide → « inconnu ». Exemple 2 : nom = Rami → « salut Rami ».
            </p>
          </div>
        }
      />
    </div>
  );
}

/* ---------- Destructuration ---------- */

export function DemoDestructuring() {
  const [personne, setPersonne] = useState({
    nom: "fatihi",
    age: 23,
    adresse: { rue: 14, ville: "casa" },
  });

  const {
    nom,
    age,
    adresse: { rue, ville },
  } = personne;

  function changer(champ, valeur) {
    setPersonne({ ...personne, [champ]: valeur });
  }

  function changerAdresse(champ, valeur) {
    setPersonne({
      ...personne,
      adresse: { ...personne.adresse, [champ]: valeur },
    });
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Object destructing"
        code={<CodeBlock code={snippets.destructuring} title="Destructuration - PDF page 25" />}
        result={
          <div className="demo-card">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="dest-nom">nom</label>
                <input
                  id="dest-nom"
                  type="text"
                  value={nom}
                  onChange={(event) => changer("nom", event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="dest-age">age</label>
                <input
                  id="dest-age"
                  type="number"
                  value={age}
                  onChange={(event) => changer("age", Number(event.target.value))}
                />
              </div>
              <div className="field">
                <label htmlFor="dest-rue">rue</label>
                <input
                  id="dest-rue"
                  type="number"
                  value={rue}
                  onChange={(event) => changerAdresse("rue", Number(event.target.value))}
                />
              </div>
              <div className="field">
                <label htmlFor="dest-ville">ville</label>
                <input
                  id="dest-ville"
                  type="text"
                  value={ville}
                  onChange={(event) => changerAdresse("ville", event.target.value)}
                />
              </div>
            </div>
            <p>
              <strong>Destructuration :</strong> {nom} {age} {rue} {ville}
            </p>
            <pre className="demo-value">{JSON.stringify(personne, null, 2)}</pre>
          </div>
        }
        resultHint="nom, age, rue et ville sont extraits de l'objet imbriqué puis affichés."
      />
    </div>
  );
}

/* ---------- map / filter / find / reduce ---------- */

const personnes = [
  { nom: "Rami", age: 33, estMember: true },
  { nom: "Fatihi", age: 24, estMember: false },
  { nom: "Chakib", age: 45, estMember: true },
  { nom: "Mounir", age: 37, estMember: false },
];

export function DemoMap() {
  const [facteur, setFacteur] = useState(3);
  const nums = [2, 5, 8, 7, 3];
  const nouvNums = nums.map((n) => n * facteur);
  const noms = personnes.map((pers) => pers.nom);

  return (
    <div className="exercise">
      <DemoWorkspace
        title="La méthode map"
        code={<CodeBlock code={snippets.map} title="map - PDF page 26" />}
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="map-facteur">Multiplier nums par</label>
              <input
                id="map-facteur"
                type="number"
                value={facteur}
                onChange={(event) => setFacteur(Number(event.target.value))}
              />
            </div>
            <p>
              <strong>nums :</strong> [{nums.join(", ")}]
            </p>
            <p>
              <strong>nouvNums :</strong> [{nouvNums.join(", ")}]
            </p>
            <p>
              <strong>noms :</strong> {noms.join(", ")}
            </p>
            <p className="demo-card__hint">
              Exercice 1 du PDF : avec le facteur 3, on obtient bien [6,15,24,21,9].
            </p>
          </div>
        }
      />
    </div>
  );
}

export function DemoFilter() {
  const [ageMin, setAgeMin] = useState(35);
  const persAges = personnes.filter((pers) => pers.age >= ageMin);
  const nomAges = personnes.filter((pers) => pers.estMember).map((pers) => pers.nom);

  return (
    <div className="exercise">
      <DemoWorkspace
        title="La méthode filter"
        code={<CodeBlock code={snippets.filter} title="filter - PDF page 27" />}
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="filter-age">age minimum</label>
              <input
                id="filter-age"
                type="number"
                value={ageMin}
                onChange={(event) => setAgeMin(Number(event.target.value))}
              />
            </div>
            <p>
              <strong>persAgés :</strong>{" "}
              {persAges.length === 0
                ? "aucune personne"
                : persAges.map((p) => `${p.nom} (${p.age})`).join(", ")}
            </p>
            <p>
              <strong>nomAgés (map + filter) :</strong> {nomAges.join(", ")}
            </p>
            <p className="demo-card__hint">
              Exercice 2 : nomAgés contient les noms des personnes dont estMember vaut true.
            </p>
          </div>
        }
      />
    </div>
  );
}

export function DemoFind() {
  const [ageMin, setAgeMin] = useState(45);
  const trouve = personnes.find((pers) => pers.age >= ageMin);

  return (
    <div className="exercise">
      <DemoWorkspace
        title="La méthode find"
        code={<CodeBlock code={snippets.find} title="find - PDF page 28" />}
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="find-age">age minimum</label>
              <input
                id="find-age"
                type="number"
                value={ageMin}
                onChange={(event) => setAgeMin(Number(event.target.value))}
              />
            </div>
            <p>
              <strong>Résultat :</strong>{" "}
              {trouve ? `${trouve.nom}, ${trouve.age} ans` : "undefined"}
            </p>
            <p className="demo-card__hint">
              find renvoie le premier élément trouvé, jamais tous les éléments.
            </p>
          </div>
        }
      />
    </div>
  );
}

const clients = [
  { nom: "Rami", montant: 4500 },
  { nom: "Karimi", montant: 2300 },
  { nom: "Chaouki", montant: 5500 },
  { nom: "Ramoun", montant: 7700 },
];

export function DemoReduce() {
  const [liste, setListe] = useState(clients);
  const totalMontants = liste.reduce(function (total, client) {
    return (total += client.montant);
  }, 0);
  const [a, b, ...rest] = [10, 20, 30, 40, 50];

  return (
    <div className="exercise">
      <DemoWorkspace
        title="reduce, destructuration et spread"
        code={<CodeBlock code={snippets.reduce} title="reduce - PDF page 29" />}
        result={
          <div className="demo-card">
            <ul className="simple-list">
              {liste.map((client) => (
                <li key={client.nom}>
                  {client.nom} : {client.montant} DH
                </li>
              ))}
            </ul>
            <p>
              <strong>totalMontants :</strong> {totalMontants} DH
            </p>
            <div className="button-row button-row--start">
              <button
                type="button"
                className="btn btn--primary btn--small"
                onClick={() =>
                  setListe([...liste, { nom: `Client${liste.length + 1}`, montant: 1000 }])
                }
              >
                Ajouter 1000 DH
              </button>
              <button
                type="button"
                className="btn btn--ghost btn--small"
                onClick={() => setListe(clients)}
              >
                Réinitialiser
              </button>
            </div>
            <p>
              <strong>[a, b, ...rest] :</strong> a={a}, b={b}, rest=[{rest.join(", ")}]
            </p>
            <p>
              <strong>Copie [...numbers] :</strong> [{[...rest, a, b].join(", ")}] recréée.
            </p>
          </div>
        }
      />
    </div>
  );
}

/* ---------- Permutation, récursivité, fermeture, horloge ---------- */

export function DemoSwap() {
  const [x, setX] = useState("10");
  const [y, setY] = useState("20");
  const [journal, setJournal] = useState("x= 10  y= 20");

  function permuter() {
    let nx = Number(x);
    let ny = Number(y);
    [nx, ny] = [ny, nx];
    setX(String(nx));
    setY(String(ny));
    setJournal(`x= ${nx}  y= ${ny}`);
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Permuter deux variables"
        code={<CodeBlock code={snippets.swap} title="Permutation - PDF page 30" />}
        result={
          <div className="demo-card">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="swap-x">x</label>
                <input id="swap-x" type="number" value={x} onChange={(e) => setX(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="swap-y">y</label>
                <input id="swap-y" type="number" value={y} onChange={(e) => setY(e.target.value)} />
              </div>
            </div>
            <button type="button" className="btn btn--primary" onClick={permuter}>
              [x,y]=[y,x]
            </button>
            <p>
              <strong>console :</strong> {journal}
            </p>
          </div>
        }
      />
    </div>
  );
}

export function DemoRecursivite() {
  const [n, setN] = useState(4);

  function fact(value) {
    if (value === 0) {
      return 1;
    } else {
      return value * fact(value - 1);
    }
  }

  const resultat = n >= 0 && n <= 12 ? fact(n) : "choisir entre 0 et 12";

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Récursivité : factorielle"
        code={<CodeBlock code={snippets.recursivite} title="Récursivité - PDF page 33" />}
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="fact-n">n</label>
              <input
                id="fact-n"
                type="number"
                min="0"
                max="12"
                value={n}
                onChange={(event) => setN(Number(event.target.value))}
              />
            </div>
            <p>
              <strong>fact({n}) =</strong> {resultat}
            </p>
            <p className="demo-card__hint">
              La fonction s'appelle elle-même jusqu'à fact(0), qui retourne 1.
            </p>
          </div>
        }
      />
    </div>
  );
}

function compteur() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

export function DemoClosure() {
  const nextRef = useRef(null);
  if (nextRef.current === null) {
    nextRef.current = compteur();
  }
  const [valeurs, setValeurs] = useState([]);

  function appeler() {
    setValeurs([...valeurs, nextRef.current()]);
  }

  function recommencer() {
    nextRef.current = compteur();
    setValeurs([]);
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Fermeture : compteur privé"
        code={<CodeBlock code={snippets.closure} title="Closure - PDF page 34" />}
        result={
          <div className="demo-card">
            <p>
              <strong>next() :</strong> {valeurs.length === 0 ? "aucun appel" : valeurs.join(", ")}
            </p>
            <div className="button-row button-row--start">
              <button type="button" className="btn btn--primary btn--small" onClick={appeler}>
                Appeler next()
              </button>
              <button type="button" className="btn btn--ghost btn--small" onClick={recommencer}>
                Nouveau compteur()
              </button>
            </div>
            <p className="demo-card__hint">
              La variable <code>count</code> reste privée : seule la fonction retournée peut la lire et
              l'incrémenter.
            </p>
          </div>
        }
      />
    </div>
  );
}

export function DemoHorloge() {
  const [time, setTime] = useState({ heure: 10, minute: 23, second: 5 });
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return undefined;
    const timer = setInterval(() => {
      setTime((current) => {
        const suivant = { ...current, second: current.second + 1 };
        if (suivant.second >= 60) {
          suivant.second = 0;
          suivant.minute += 1;
          if (suivant.minute >= 60) {
            suivant.minute = 0;
            suivant.heure += 1;
          }
        }
        return suivant;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [running]);

  function format(value) {
    return String(value).padStart(2, "0");
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Horloge avec fermeture et setInterval"
        code={<CodeBlock code={snippets.horloge} title="Horloge - PDF page 35" />}
        result={
          <div className="demo-card demo-card--center">
            <p className="counter-value">
              {format(time.heure)} : {format(time.minute)} : {format(time.second)}
            </p>
            <div className="button-row">
              <button
                type="button"
                className="btn btn--primary btn--small"
                onClick={() => setRunning(true)}
                disabled={running}
              >
                Démarrer
              </button>
              <button
                type="button"
                className="btn btn--ghost btn--small"
                onClick={() => setRunning(false)}
                disabled={!running}
              >
                Arrêter
              </button>
              <button
                type="button"
                className="btn btn--ghost btn--small"
                onClick={() => {
                  setRunning(false);
                  setTime({ heure: 10, minute: 23, second: 5 });
                }}
              >
                Réinitialiser
              </button>
            </div>
          </div>
        }
        adaptation="le rendu utilise setTime au lieu de document.getElementById ; la logique d'incrémentation seconde → minute → heure est conservée. Le code du PDF manipule directement le DOM."
        resultHint="L'intervalle réel avance d'une seconde ; l'heure, les minutes et les secondes se propagent comme dans le PDF."
      />
    </div>
  );
}

/* ---------- Fonctions pures sur les tableaux et objets ---------- */

export function DemoPureAppend() {
  const [myList] = useState([1, 2, 3, 4, 5]);
  const [valeur, setValeur] = useState(10);
  const [inscriptions, setInscriptions] = useState([
    { id: 10, nom: "Rami", filiere: "DEV" },
    { id: 11, nom: "Kamali", filiere: "DEV" },
    { id: 12, nom: "Fahmi", filiere: "DEV" },
    { id: 13, nom: "Chaouki", filiere: "DEV" },
  ]);

  function pureAppend(value) {
    return [...myList, value];
  }

  const appendMyList = pureAppend(Number(valeur));

  function pureAjouterInscription() {
    const nouvelId = inscriptions.length ? inscriptions[inscriptions.length - 1].id + 1 : 10;
    setInscriptions([
      ...inscriptions,
      { id: nouvelId, nom: `Stagiaire${nouvelId}`, filiere: "DEV" },
    ]);
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Ajouter dans un Array sans le muter"
        code={<CodeBlock code={snippets.pureAppend} title="pureAppend - PDF page 38" />}
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="append-value">valeur</label>
              <input
                id="append-value"
                type="number"
                value={valeur}
                onChange={(event) => setValeur(event.target.value)}
              />
            </div>
            <p>
              <strong>pureAppend({valeur}) :</strong> [{appendMyList.join(", ")}]
            </p>
            <p>
              <strong>myList (inchangé) :</strong> [{myList.join(", ")}]
            </p>
            <hr />
            <h3>Exercice 3 : ajouter une inscription</h3>
            <ul className="simple-list">
              {inscriptions.map((ins) => (
                <li key={ins.id}>
                  {ins.id} — {ins.nom} — {ins.filiere}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--primary btn--small"
              onClick={pureAjouterInscription}
            >
              Ajouter une inscription (pure fonction)
            </button>
          </div>
        }
        resultHint="Le tableau d'origine reste visible et n'est jamais modifié en place."
      />
    </div>
  );
}

export function DemoPureInsert() {
  const [index, setIndex] = useState(1);
  const [valeur, setValeur] = useState(10);
  const dontMutateInjection = [6, 7, 8];

  function pureInject(position, newValue) {
    return [
      ...dontMutateInjection.slice(0, position),
      newValue,
      ...dontMutateInjection.slice(position),
    ];
  }

  const resultat = pureInject(Number(index), Number(valeur));

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Insérer dans un Array avec slice"
        code={<CodeBlock code={snippets.pureInsert} title="pureInject - PDF page 39" />}
        result={
          <div className="demo-card">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="insert-index">index</label>
                <input
                  id="insert-index"
                  type="number"
                  min="0"
                  max="3"
                  value={index}
                  onChange={(event) => setIndex(event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="insert-value">newValue</label>
                <input
                  id="insert-value"
                  type="number"
                  value={valeur}
                  onChange={(event) => setValeur(event.target.value)}
                />
              </div>
            </div>
            <p>
              <strong>pureInject({index},{valeur}) :</strong> [{resultat.join(", ")}]
            </p>
            <p>
              <strong>dontMutateInjection :</strong> [{dontMutateInjection.join(", ")}]
            </p>
            <p className="demo-card__hint">
              La méthode splice du PDF modifie le tableau ; pureInject utilise slice et le spread.
            </p>
          </div>
        }
      />
    </div>
  );
}

const inscriptionsBase = [
  { id: 10, nom: "Rami", filiere: "DEV" },
  { id: 11, nom: "Kamali", filiere: "DEV" },
  { id: 12, nom: "Fahmi", filiere: "DEV" },
  { id: 13, nom: "Chaouki", filiere: "DEV" },
];

export function DemoPureDelete() {
  const [id, setId] = useState(12);
  const [inscriptions] = useState(inscriptionsBase);

  function pureDeleteFonction(value) {
    return [...inscriptions.filter((ins) => ins.id !== Number(value))];
  }

  const deleteInscriptions = pureDeleteFonction(Number(id));

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Supprimer d'un Array sans le muter"
        code={<CodeBlock code={snippets.pureDelete} title="pureDeleteFonction - PDF page 40" />}
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="delete-id">id à supprimer</label>
              <input
                id="delete-id"
                type="number"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
            </div>
            <p>
              <strong>deleteInscriptions :</strong>{" "}
              {deleteInscriptions.map((ins) => ins.nom).join(", ")}
            </p>
            <p>
              <strong>inscriptions (inchangé) :</strong>{" "}
              {inscriptions.map((ins) => ins.nom).join(", ")}
            </p>
          </div>
        }
      />
    </div>
  );
}

const notesBase = [
  { id: 10, module: "Algorithme", note: 15 },
  { id: 10, module: "POO", note: 17 },
  { id: 11, module: "Algorithme", note: 16 },
  { id: 11, module: "POO", note: 14 },
];

export function DemoPureUpdate() {
  const [id, setId] = useState(10);
  const [module, setModule] = useState("POO");
  const [note, setNote] = useState(18);
  const notes = notesBase;

  function pureUpdateNote(identifiant, nomModule, valeurNote) {
    return [
      ...notes.filter((n) => !(n.id === identifiant && n.module === nomModule)),
      { id: identifiant, module: nomModule, note: valeurNote },
    ];
  }

  const updatedNotes = pureUpdateNote(Number(id), module, Number(note));

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Modifier une note dans une copie du tableau"
        code={<CodeBlock code={snippets.pureUpdate} title="pureUpdateNote - PDF page 41" />}
        result={
          <div className="demo-card">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="update-id">id</label>
                <select id="update-id" value={id} onChange={(event) => setId(event.target.value)}>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="update-module">module</label>
                <select
                  id="update-module"
                  value={module}
                  onChange={(event) => setModule(event.target.value)}
                >
                  <option value="Algorithme">Algorithme</option>
                  <option value="POO">POO</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="update-note">note</label>
                <input
                  id="update-note"
                  type="number"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                />
              </div>
            </div>
            <p>
              <strong>updatedNotes :</strong>{" "}
              {updatedNotes.map((n) => `${n.id}/${n.module}:${n.note}`).join(" · ")}
            </p>
            <p>
              <strong>notes (original) :</strong>{" "}
              {notes.map((n) => `${n.id}/${n.module}:${n.note}`).join(" · ")}
            </p>
          </div>
        }
      />
    </div>
  );
}

export function DemoPureObjet() {
  const [personne] = useState({ id: 10, nom: "Rami" });
  const [age, setAge] = useState(33);

  function addAge(value) {
    return { ...personne, age: value };
  }

  const pers = addAge(Number(age));

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Ajouter un attribut sans muter l'objet"
        code={<CodeBlock code={snippets.pureObjet} title="addAge - PDF page 42" />}
        result={
          <div className="demo-card">
            <div className="field-row">
              <label htmlFor="objet-age">age</label>
              <input
                id="objet-age"
                type="number"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
            </div>
            <p>
              <strong>addAge({age}) :</strong> {JSON.stringify(pers)}
            </p>
            <p>
              <strong>personne (inchangé) :</strong> {JSON.stringify(personne)}
            </p>
            <p className="demo-card__hint">
              Object.assign({"{ }"}, personne, {"{age:age}"}) produit le même résultat.
            </p>
          </div>
        }
      />
    </div>
  );
}

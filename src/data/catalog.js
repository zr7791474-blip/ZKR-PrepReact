/**
 * Catalogue complet du cours OFPPT M204, pages PDF 4 a 322.
 * L'ordre des chapitres et des fiches suit exactement l'ordre du PDF.
 */
import { preChapters } from "./catalog-pre";

export const TYPE_LABELS = {
  exercise: "Exercice",
  atelier: "Atelier",
  quiz: "Quiz",
  example: "Exemple",
  lesson: "Cours",
};

const reactChapters = [
  {
    id: "ch1",
    number: 1,
    title: "Créer des formulaires et consommer des API",
    part: "Partie 3 - Chapitre 2",
    pages: "220 - 224",
    summary:
      "Consommation d'une API avec fetch, affichage conditionnel et gestion d'un champ de saisie.",
    items: [
      {
        id: "lesson-fetch-classe",
        type: "lesson",
        title: "Consommation d'un API par fetch - composant classe",
        description:
          "Rappel de la méthode componentDidMount : on change seulement le code de componentDidMount pour charger les utilisateurs.",
        pages: "221 - 224",
        pageList: [221, 222, 223, 224],
        topics: ["fetch", "API", "componentDidMount", "classe", "jsonplaceholder"],
        objectives: [
          "Comprendre l'appel fetch depuis componentDidMount.",
          "Transformer la réponse avec response.json().",
          "Stocker le résultat dans le state avec this.setState().",
        ],
        codeKey: "fetchClasse",
      },
      {
        id: "ex01-fetch-user",
        type: "exercise",
        title: "Exercice 1 - Détails d'un utilisateur par id",
        description:
          "L'utilisateur saisit un id. Les informations de l'utilisateur s'affichent. Le message « svp choisir un id valide !!!! » s'affiche si le champ est vide ou si l'id n'existe pas.",
        pages: "221 - 224",
        pageList: [221, 222, 223, 224],
        topics: ["fetch", "useState", "useEffect", "API", "onChange", "affichage conditionnel"],
        objectives: [
          "Appeler https://jsonplaceholder.typicode.com/users/{id}.",
          "Gérer un champ de saisie avec onChange et un état id.",
          "Afficher les informations de l'utilisateur (nom, email, téléphone, site, adresse).",
          "Afficher un message si l'id est vide ou invalide.",
        ],
        note:
          "Le PDF intitule la leçon « fetch classe composant » mais la solution proposée page 223 utilise un composant fonctionnel avec useState et useEffect. La solution est reproduite ici, avec une correction de la condition d'affichage pour que le message apparaisse réellement quand l'id n'existe pas.",
      },
    ],
  },
  {
    id: "ch2",
    number: 2,
    title: "Incorporer des données avec les hooks",
    part: "Partie 4 - Chapitre 1",
    pages: "225 - 253",
    summary:
      "useState, useEffect, chargement des données d'une API et création de hooks personnalisés.",
    items: [
      {
        id: "lesson-usestate",
        type: "lesson",
        title: "Les Hooks et useState",
        description:
          "Les Hooks sont apparus avec React 16.8. useState permet à un composant fonctionnel de gérer un état et de déclencher un nouveau rendu.",
        pages: "226 - 234",
        pageList: [226, 227, 228, 229, 230, 231, 232, 233, 234],
        topics: ["hooks", "useState", "état", "composant fonctionnel", "événement click"],
        objectives: [
          "Importer useState depuis react.",
          "Déclarer un état avec const [valeur, setValeur] = useState(initial).",
          "Mettre à jour l'état avec la fonction setter, jamais en modifiant la variable directement.",
          "Comprendre la différence entre onClick={inscription} et onClick={inscription()}.",
        ],
        codeKey: "autreMessage",
      },
      {
        id: "exemple-autre-message",
        type: "example",
        title: "Exemple - Composant AutreMessage",
        description:
          "Premier composant fonctionnel avec deux états : le message affiché et le texte du bouton d'inscription.",
        pages: "229 - 230",
        pageList: [229, 230],
        topics: ["useState", "onClick", "composant fonctionnel"],
      },
      {
        id: "ex02-compteur",
        type: "exercise",
        title: "Exercice 2 - Réalisation d'un compteur",
        description:
          "Le clic sur « incrementer » incrémente le compteur, le clic sur « decrementer » le décrémente. La valeur du compteur doit être affichée.",
        pages: "235 - 237",
        pageList: [235, 236, 237],
        topics: ["useState", "compteur", "onClick", "état"],
        objectives: [
          "Créer une propriété d'état nommée valeur initialisée à 0.",
          "Gérer les clics des deux boutons.",
          "Afficher la valeur du compteur dans le JSX.",
        ],
        note:
          "Le PDF propose trois écritures équivalentes (fonctions classiques, fonctions fléchées, arrow functions directement dans onClick). La démonstration utilise les fonctions incrementer / decrementer de la page 236.",
      },
      {
        id: "lesson-useeffect",
        type: "lesson",
        title: "Le Hook useEffect",
        description:
          "useEffect permet d'exécuter des effets secondaires après le rendu. Son deuxième argument (tableau de dépendances) contrôle quand l'effet est exécuté.",
        pages: "238 - 247",
        pageList: [238, 239, 240, 241, 242, 243, 244, 245, 246, 247],
        topics: ["useEffect", "dépendances", "document.title", "effet secondaire"],
        objectives: [
          "Exécuter du code après le rendu initial.",
          "Comprendre les trois formes : rien, [] et [prop1, prop2].",
          "Mettre à jour le titre du document avec document.title.",
          "Éviter les boucles infinies.",
        ],
        codeKey: "useeffectSalutation",
      },
      {
        id: "exemple-compteur-useeffect",
        type: "example",
        title: "Exemple 1 - Compteur et console.log",
        description:
          "On affiche dans la console la valeur du compteur après chaque rendu, puis seulement lorsque la valeur change.",
        pages: "239",
        pageList: [239],
        topics: ["useEffect", "console.log", "compteur", "dépendances"],
      },
      {
        id: "exemple-salutation",
        type: "example",
        title: "Exemple 2 - Salutation et titre du document",
        description:
          "Le titre du document prend la valeur du nom après chaque modification du nom.",
        pages: "240 - 241",
        pageList: [240, 241],
        topics: ["useEffect", "document.title", "input contrôlé"],
      },
      {
        id: "ex03-salutation",
        type: "exercise",
        title: "Exercice 3 - Salutation avec nom, prénom et âge",
        description:
          "On reprend l'exercice précédent en ajoutant le prénom et l'âge. Le titre de la page prend les valeurs du nom et du prénom.",
        pages: "242 - 245",
        pageList: [242, 243, 244, 245],
        topics: ["useState", "useEffect", "document.title", "input contrôlé", "dépendances"],
        objectives: [
          "Déclarer trois états : nom, prenom et age.",
          "Créer un champ de saisie contrôlé pour chaque état.",
          "Mettre à jour document.title avec nom + prénom.",
          "Observer le comportement de useEffect selon [nom, prenom], [nom], [] ou sans tableau.",
        ],
        note:
          "La solution du PDF (page 243) utilise [nom, prenom]. Un sélecteur de variantes est ajouté pour observer les autres comportements expliqués pages 244 et 245, sans modifier l'exercice de base.",
      },
      {
        id: "quiz-useeffect",
        type: "quiz",
        title: "Quiz - Comprendre useEffect",
        description:
          "Trois questions du cours sur le nombre d'exécutions de useEffect selon le tableau de dépendances.",
        pages: "245 - 246",
        pageList: [245, 246],
        topics: ["useEffect", "quiz", "dépendances", "console.log"],
      },
      {
        id: "lesson-useeffect-api",
        type: "lesson",
        title: "Utiliser useEffect pour charger les données d'une API",
        description:
          "Le chargement se fait au premier rendu : on appelle fetch dans useEffect avec un tableau de dépendances vide.",
        pages: "248 - 250",
        pageList: [248, 249, 250],
        topics: ["useEffect", "fetch", "API", "posts", "tableau vide"],
        objectives: [
          "Appeler une API dans useEffect.",
          "Utiliser [] pour n'exécuter fetch qu'au premier chargement.",
          "Afficher une liste avec map et une clé key.",
        ],
        codeKey: "postsFetch",
      },
      {
        id: "exemple-posts-fetch",
        type: "example",
        title: "Exemple - Liste des posts depuis une API",
        description:
          "Récupération des posts de jsonplaceholder avec fetch et affichage dans une liste.",
        pages: "250",
        pageList: [250],
        topics: ["fetch", "useEffect", "posts", "map", "API"],
      },
      {
        id: "lesson-custom-hooks",
        type: "lesson",
        title: "Construire ses propres Hooks",
        description:
          "Un Hook personnalisé est une fonction réutilisable dont le nom commence par « use ». On externalise ici la logique de récupération des posts dans usePosts.",
        pages: "251 - 253",
        pageList: [251, 252, 253],
        topics: ["custom hook", "usePosts", "réutilisation", "fetch"],
        objectives: [
          "Extraire une logique de composant dans une fonction use...",
          "Retourner les données nécessaires au composant.",
          "Réutiliser le Hook dans plusieurs composants.",
        ],
        codeKey: "usePosts",
      },
      {
        id: "exemple-use-posts",
        type: "example",
        title: "Exemple - Hook personnalisé usePosts",
        description:
          "Le composant App récupère les posts via usePosts() au lieu d'écrire lui-même le fetch et le useEffect.",
        pages: "252",
        pageList: [252],
        topics: ["custom hook", "usePosts", "fetch", "API"],
      },
    ],
  },
  {
    id: "ch3",
    number: 3,
    title: "Mettre en place un système de routage",
    part: "Partie 4 - Chapitre 2",
    pages: "254 - 268",
    summary:
      "React Router, BrowserRouter vs HashRouter, Route, exemple de navigation et tests unitaires avec Enzyme.",
    items: [
      {
        id: "lesson-routage",
        type: "lesson",
        title: "Qu'est-ce que le routage ?",
        description:
          "Le routage permet d'afficher différentes pages dans une Single Page Application en changeant l'URL ou en cliquant sur un lien.",
        pages: "256",
        pageList: [256],
        topics: ["routage", "SPA", "react-router-dom", "URL"],
        objectives: [
          "Comprendre le rôle du routage dans une SPA.",
          "Installer react-router-dom avec npm install react-router-dom.",
          "Associer une URL à un composant.",
        ],
      },
      {
        id: "lesson-browserrouter",
        type: "lesson",
        title: "BrowserRouter vs HashRouter",
        description:
          "BrowserRouter utilise l'History API (http://example.com/about) ; HashRouter utilise le hash de l'URL (http://example.com/#/about).",
        pages: "258",
        pageList: [258],
        topics: ["BrowserRouter", "HashRouter", "History API", "URL"],
        objectives: [
          "Distinguer les deux types d'URL.",
          "Choisir BrowserRouter dans le cas général.",
          "Savoir que HashRouter est un choix raisonnable pour les anciens navigateurs.",
        ],
      },
      {
        id: "lesson-route",
        type: "lesson",
        title: "Le composant <Route>",
        description:
          "<Route> définit la relation entre une URL et un composant à afficher.",
        pages: "260",
        pageList: [260],
        topics: ["Route", "path", "element", "mapping"],
        objectives: [
          "Déclarer une Route avec un path et un composant.",
          "Comprendre le rôle de exact dans les anciennes versions.",
          "Utiliser Routes et element avec react-router-dom v6.",
        ],
      },
      {
        id: "exemple-routing",
        type: "example",
        title: "Exemple - Application Home / About / Blog",
        description:
          "Mini application de routage avec trois liens et trois routes, telle que présentée pages 262 et 263.",
        pages: "262 - 263",
        pageList: [262, 263],
        topics: ["react-router-dom", "Link", "Routes", "Route", "navigation"],
      },
      {
        id: "lesson-tests",
        type: "lesson",
        title: "Tester une application React avec Enzyme",
        description:
          "Tests unitaires de composants avec Enzyme : rendu d'un bouton, simulation d'un clic et vérification d'un état désactivé.",
        pages: "265 - 268",
        pageList: [265, 266, 267, 268],
        topics: ["tests", "Enzyme", "shallow", "simulate", "state"],
        objectives: [
          "Installer enzyme et son adaptateur.",
          "Écrire un test avec describe / it / expect.",
          "Simuler un clic et vérifier le compteur.",
        ],
        codeKey: "testsEnzyme",
      },
    ],
  },
  {
    id: "ch4",
    number: 4,
    title: "Introduire Redux et optimiser la gestion de l'état",
    part: "Partie 4 - Chapitre 3",
    pages: "269 - 293",
    summary:
      "Architecture Redux (store, actions, reducers), state complexe avec Immer, atelier inscriptions/notes et react-redux.",
    items: [
      {
        id: "lesson-redux",
        type: "lesson",
        title: "Concevoir une application avec Redux",
        description:
          "Redux centralise l'état de l'application dans un store unique. Les actions décrivent ce qui se passe, les reducers calculent le nouvel état.",
        pages: "271 - 274",
        pageList: [271, 272, 273, 274],
        topics: ["Redux", "store", "action", "reducer", "Flux", "architecture"],
        objectives: [
          "Comprendre le flux de données unidirectionnel.",
          "Connaître les méthodes subscribe, dispatch et getState.",
          "Écrire un reducer comme fonction pure.",
        ],
      },
      {
        id: "lesson-redux-react",
        type: "lesson",
        title: "Manipuler des states complexes avec Redux et Immer",
        description:
          "React-Redux fournit Provider, useDispatch et useSelector. Immer facilite les mises à jour immuables des objets et des tableaux.",
        pages: "276 - 285",
        pageList: [276, 277, 278, 279, 280, 281, 282, 283, 284, 285],
        topics: ["react-redux", "immer", "useSelector", "useDispatch", "createStore", "sélecteurs"],
        objectives: [
          "Installer react-redux et envelopper l'application dans Provider.",
          "Lire l'état avec useSelector et envoyer une action avec useDispatch.",
          "Éviter de modifier directement l'état (utiliser Immer).",
        ],
        codeKey: "immer",
      },
      {
        id: "atelier-redux",
        type: "atelier",
        title: "Atelier - Gérer les inscriptions et les notes des stagiaires",
        description:
          "Deux reducers combinés : inscriptionHistory (id, nom, filière) et notationHistory (id, module, note). Ajouter, supprimer et modifier des inscriptions et des notes.",
        pages: "286 - 290",
        pageList: [286, 287, 288, 289, 290],
        topics: ["Redux", "combineReducers", "actions", "reducers", "store", "atelier"],
        objectives: [
          "Regrouper les types d'actions dans types.js.",
          "Créer les créateurs d'actions add_inscription, add_note, remove_note, update_note.",
          "Combiner deux reducers avec combineReducers.",
          "Observer store.getState() après chaque dispatch.",
        ],
      },
      {
        id: "lesson-react-redux-connect",
        type: "lesson",
        title: "react-redux : Provider, connect et mapStateToProps",
        description:
          "Le module react-redux facilite l'accès au store : Provider transmet le store, connect ajoute les propriétés d'état et les actions au composant.",
        pages: "290 - 293",
        pageList: [290, 291, 292, 293],
        topics: ["Provider", "connect", "mapStateToProps", "mapDispatchToProps", "props"],
        objectives: [
          "Envelopper App avec Provider et store.",
          "Écrire mapStateToProps pour lire une partie du state.",
          "Écrire mapDispatchToProps pour dispatcher une action.",
          "Utiliser connect(null, mapDispatchToProps).",
        ],
        codeKey: "connect",
      },
    ],
  },
  {
    id: "ch5",
    number: 5,
    title: "Déployer et optimiser avec Redux",
    part: "Partie 4 - Chapitre 4",
    pages: "294 - 322",
    summary:
      "Redux DevTools, middleware Thunk, consommation d'API et Redux Toolkit (createSlice, CRUD, createAsyncThunk).",
    items: [
      {
        id: "lesson-devtools",
        type: "lesson",
        title: "Redux DevTools",
        description:
          "Extension navigateur pour explorer le state et les actions, revenir en arrière et déboguer pas à pas.",
        pages: "296 - 303",
        pageList: [296, 297, 298, 299, 300, 301, 302, 303],
        topics: ["Redux DevTools", "débogage", "state", "actions", "extension"],
        objectives: [
          "Installer l'extension Redux DevTools.",
          "Ajouter window.__REDUX_DEVTOOLS_EXTENSION__() à la création du store.",
          "Lire les volets Action, State, Diff et Log monitor.",
        ],
      },
      {
        id: "lesson-thunk",
        type: "lesson",
        title: "Interaction avec les API et middleware Thunk",
        description:
          "Une fonction thunk retourne une fonction (dispatch, getState) et permet de gérer les requêtes asynchrones avec Redux.",
        pages: "303 - 305",
        pageList: [303, 304, 305],
        topics: ["thunk", "middleware", "asynchrone", "API", "dispatch"],
        objectives: [
          "Comprendre le rôle du middleware thunk.",
          "Écrire une fonction thunk fetchPosts.",
          "Dispatcher les actions request, success et failure.",
        ],
        codeKey: "thunk",
      },
      {
        id: "exemple-redux-thunk",
        type: "example",
        title: "Exemple - Posts via Redux, Thunk et Axios",
        description:
          "Le bouton « charger posts » déclenche fetchPosts. Le state contient loading, data et error ; la liste des posts s'affiche.",
        pages: "305 - 308",
        pageList: [305, 306, 307, 308],
        topics: ["Redux", "thunk", "axios", "API", "loading", "posts"],
      },
      {
        id: "ex04-redux-users",
        type: "exercise",
        title: "Exercice 4 - Liste des users avec Redux",
        description:
          "Appel de l'API https://jsonplaceholder.typicode.com/users. En utilisant Redux, créer l'application qui affiche la liste des users.",
        pages: "308",
        pageList: [308],
        topics: ["Redux", "API", "users", "thunk", "axios", "exercice"],
        objectives: [
          "Créer les types FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS et FETCH_USERS_FAILURE.",
          "Écrire les créateurs d'actions et la fonction thunk fetchUsers.",
          "Configurer le store avec applyMiddleware(thunk).",
          "Remplacer le composant Posts par un composant Users et afficher user.name.",
        ],
        note:
          "Aucune solution n'est fournie dans le PDF pour cet exercice : il demande d'adapter l'exemple des posts. La page conserve donc la consigne, les étapes et des indices, sans donner la solution complète. L'exemple « Posts via Redux, Thunk et Axios » sert de modèle de travail.",
      },
      {
        id: "lesson-toolkit",
        type: "lesson",
        title: "Redux Toolkit et createSlice",
        description:
          "Redux Toolkit réduit le code répétitif : createSlice génère les types d'actions, les créateurs d'actions et le reducer. Immer est intégré.",
        pages: "310 - 313",
        pageList: [310, 311, 312, 313],
        topics: ["Redux Toolkit", "createSlice", "configureStore", "Immer", "slice"],
        objectives: [
          "Installer @reduxjs/toolkit et react-redux.",
          "Créer un slice avec name, initialState et reducers.",
          "Configurer le store avec configureStore.",
        ],
        codeKey: "toolkitCounter",
      },
      {
        id: "exemple-toolkit-counter",
        type: "example",
        title: "Exemple - Compteur avec Redux Toolkit",
        description:
          "counterSlice avec increment, decrement et incrementByAmount, branché sur un store configureStore.",
        pages: "312 - 313",
        pageList: [312, 313],
        topics: ["Redux Toolkit", "createSlice", "compteur", "configureStore"],
      },
      {
        id: "exemple-toolkit-crud",
        type: "example",
        title: "Exemple - CRUD utilisateurs avec Redux Toolkit",
        description:
          "Slice users avec addUser, deleteUser et updateNom sur une liste locale de stagiaires.",
        pages: "313 - 317",
        pageList: [313, 314, 315, 316, 317],
        topics: ["Redux Toolkit", "CRUD", "addUser", "deleteUser", "updateNom"],
      },
      {
        id: "exemple-async-thunk",
        type: "example",
        title: "Exemple - createAsyncThunk et API users",
        description:
          "createAsyncThunk génère les actions pending, fulfilled et rejected. Le composant affiche chargement, liste des users ou erreur.",
        pages: "318 - 322",
        pageList: [318, 319, 320, 321, 322],
        topics: ["createAsyncThunk", "extraReducers", "API", "loading", "error"],
      },
    ],
  },
];

/**
 * Les chapitres 220-322 sont numerotes a la suite des chapitres 4-219 afin de
 * conserver un seul ordre de lecture, identique a celui du PDF.
 */
export const chapters = [
  ...preChapters,
  ...reactChapters.map((chapter, index) => ({
    ...chapter,
    number: preChapters.length + index + 1,
  })),
];

export const allItems = chapters.flatMap((chapter) =>
  chapter.items.map((item) => ({
    ...item,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    chapterNumber: chapter.number,
  }))
);

export const itemById = allItems.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

export const counts = {
  chapters: chapters.length,
  exercises: allItems.filter((item) => item.type === "exercise").length,
  ateliers: allItems.filter((item) => item.type === "atelier").length,
  quizzes: allItems.filter((item) => item.type === "quiz").length,
  examples: allItems.filter((item) => item.type === "example").length,
  lessons: allItems.filter((item) => item.type === "lesson").length,
  total: allItems.length,
};

export function matchesSearch(item, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [
    item.title,
    item.description,
    item.chapterTitle,
    `chapitre ${item.chapterNumber}`,
    item.pages,
    ...(item.pageList || []).map((page) => String(page)),
    item.type,
    TYPE_LABELS[item.type],
    ...(item.topics || []),
    ...(item.objectives || []),
  ]
    .join(" ")
    .toLowerCase();
  return q.split(/\s+/).every((word) => haystack.includes(word));
}

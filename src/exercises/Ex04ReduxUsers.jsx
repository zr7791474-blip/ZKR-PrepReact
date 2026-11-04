import React from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";

const starter = `// postsType.js -> à adapter en usersType.js
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// usersActions.js
// TODO 1 : créer fetchUsersRequest, fetchUsersSuccess et fetchUsersFailure
// TODO 2 : créer la fonction thunk fetchUsers avec axios.get(...)
//          -> dispatch(request), puis success(response.data) ou failure(err.message)

// store.js
// TODO 3 : initialState = { loading:false, data:[], error:'' }
// TODO 4 : écrire le reducer avec un switch sur les 3 types
// TODO 5 : createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// Users.js
// TODO 6 : const users = useSelector(state => state.data)
// TODO 7 : afficher users.map(user => <li key={user.id}>{user.name}</li>)

// App.js
// TODO 8 : dispatch(fetchUsers()) au clic sur le bouton
// TODO 9 : afficher "chargement" puis la liste, ou l'erreur`;

/**
 * Exercice 4 - PDF page 308
 * Consigne seule : le PDF ne fournit pas de solution pour cet exercice.
 * On conserve donc la tache d'apprentissage, avec des indices et une checklist.
 */
export default function Ex04ReduxUsers() {
  return (
    <div className="exercise">
      <div className="objectives">
        <h2>Consigne du PDF (page 308)</h2>
        <p className="exercise-quote">
          Appel de l'API end point : <code>https://jsonplaceholder.typicode.com/users</code>.
          En utilisant Redux, créer l'application qui affiche la liste des users.
        </p>
        <ul>
          <li>Créer les types d'actions pour le cycle de vie de la requête.</li>
          <li>Écrire les créateurs d'actions et la fonction thunk <code>fetchUsers</code>.</li>
          <li>Configurer le store avec le middleware thunk et les DevTools.</li>
          <li>Afficher les états <code>loading</code>, <code>data</code> et <code>error</code>.</li>
        </ul>
      </div>

      <div className="callout callout--info">
        <strong>Exercice sans solution dans le PDF.</strong> La solution n'est pas donnée
        ici : l'objectif est de reproduire seul(e) la démarche de l'exemple des posts
        (pages 305 à 308) en remplaçant <code>/posts</code> par <code>/users</code> et
        <code> post.title</code> par <code> user.name</code>.
      </div>

      <div className="steps">
        <h2>Étapes conseillées</h2>
        <ol>
          <li>Créer <code>usersType.js</code> avec les constantes REQUEST, SUCCESS et FAILURE.</li>
          <li>Créer <code>usersActions.js</code> : trois créateurs d'actions + la fonction thunk.</li>
          <li>Créer <code>store.js</code> : état initial, reducer avec switch, application du middleware thunk.</li>
          <li>Créer <code>Users.js</code> : lecture du state avec <code>useSelector</code> et affichage de <code>user.name</code>.</li>
          <li>Créer <code>App.js</code> : bouton « charger users », <code>useDispatch</code>, messages de chargement et d'erreur.</li>
          <li>Envelopper l'application avec <code>&lt;Provider store=&#123;store&#125;&gt;</code> dans <code>index.js</code>.</li>
          <li>Tester avec un endpoint correct, puis avec un endpoint erroné pour vérifier le message d'erreur.</li>
        </ol>
      </div>

      <CodeBlock
        code={starter}
        title="Point de départ à compléter (les TODO sont à écrire par l'étudiant)"
        language="jsx"
      />

      <div className="checklist">
        <h2>Auto-évaluation</h2>
        <ul>
          <li>Les trois types d'actions sont définis et utilisés dans le reducer.</li>
          <li>La requête axios est lancée dans une fonction thunk, pas dans le reducer.</li>
          <li>Le store est créé avec <code>applyMiddleware(thunk)</code>.</li>
          <li>Le composant lit les données avec <code>useSelector</code> et envoie l'action avec <code>useDispatch</code>.</li>
          <li>Les états chargement, succès et erreur sont tous affichés correctement.</li>
        </ul>
      </div>

      <p className="related-link">
        Modèle de travail :{" "}
        <Link to="/fiche/exemple-redux-thunk">l'exemple Posts via Redux, Thunk et Axios (p. 305-308)</Link>
      </p>
    </div>
  );
}

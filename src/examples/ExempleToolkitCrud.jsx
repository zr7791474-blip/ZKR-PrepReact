import React, { useRef, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer, { addUser, deleteUser, updateNom } from "../features/usersSlice";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

function UserRow({ user, onDelete, onRename }) {
  // Etat local a chaque ligne : corrige le state "nom" partage du PDF.
  const [nouveauNom, setNouveauNom] = useState(user.nom);

  return (
    <div className="crud-row">
      <h3>
        {user.nom} {user.prenom}
      </h3>
      <p className="muted">id : {user.id}</p>
      <div className="field-row">
        <label htmlFor={`nom-${user.id}`}>nouveau nom :</label>
        <input
          id={`nom-${user.id}`}
          type="text"
          value={nouveauNom}
          onChange={(event) => setNouveauNom(event.target.value)}
        />
        <button
          type="button"
          className="btn btn--secondary btn--small"
          onClick={() => onRename(user.id, nouveauNom)}
        >
          update userName
        </button>
      </div>
      <button type="button" className="btn btn--danger btn--small" onClick={() => onDelete(user.id)}>
        delete
      </button>
    </div>
  );
}

function CrudDemo() {
  const usersList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const nom = useRef("");
  const prenom = useRef("");

  function ajouter() {
    // Correction : le PDF utilise l'id du dernier element, ce qui cree un doublon.
    const prochainId =
      usersList.length === 0 ? 1 : Math.max(...usersList.map((user) => user.id)) + 1;

    dispatch(
      addUser({
        id: prochainId,
        nom: nom.current.value.trim(),
        prenom: prenom.current.value.trim(),
      })
    );
    nom.current.value = "";
    prenom.current.value = "";
  }

  return (
    <div className="demo-card">
      <div className="demo-card__head">
        <h2>Liste locale des stagiaires</h2>
        <span className="demo-card__hint">{usersList.length} utilisateur(s)</span>
      </div>

      <div className="button-row button-row--start">
        <input type="text" placeholder="nom" ref={nom} aria-label="nom" />
        <input type="text" placeholder="prenom" ref={prenom} aria-label="prenom" />
        <button type="button" className="btn btn--primary" onClick={ajouter}>
          ajouter
        </button>
      </div>

      <div className="crud-list">
        {usersList.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            onDelete={(id) => dispatch(deleteUser({ id }))}
            onRename={(id, valeur) => dispatch(updateNom({ id, nom: valeur }))}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Exemple CRUD - PDF pages 313 a 317
 * Redux Toolkit : createSlice, configureStore, Provider, useSelector, useDispatch.
 */
export default function ExempleToolkitCrud() {
  const [store] = useState(() =>
    configureStore({
      reducer: { users: usersReducer },
    })
  );

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Redux Toolkit : ajouter, renommer, supprimer"
        code={
          <>
            <CodeBlock
              code={snippets.toolkitCrudSlice}
              title="features/Users.js - PDF page 315"
            />
            <CodeBlock
              code={`// App.js - PDF page 316 (version du PDF)\nconst id = usersList[usersList.length-1].id;\ndispatch(addUser({ id, nom: nom.current.value, prenom: prenom.current.value }))`}
              title="Extrait App.js - ajout d'un utilisateur (PDF page 316)"
            />
            <CodeBlock
              code={`// Users.js - PDF page 317 (version du PDF)\nconst [nom, setNom] = useState('')\n// ...\n<input onChange={(event) => setNom(event.target.value)} />\n<button onClick={() => dispatch(updateNom({ id: user.id, nom: nom }))}>\n  update userName\n</button>`}
              title="Extrait Users.js - état partagé (PDF page 317)"
            />
          </>
        }
        result={
          <Provider store={store}>
            <CrudDemo />
          </Provider>
        }
        resultHint="Ajoutez un stagiaire, renommez-le puis supprimez-le : chaque action met à jour le store."
        notes={
          <div className="callout">
            <strong>Corrections apportées au code du PDF :</strong>
            <ul>
              <li>
                Le PDF calcule <code>const id = usersList[usersList.length - 1].id</code> :
                le nouvel utilisateur reçoit le même id que le dernier et la suppression
                devient ambiguë. La démonstration utilise <code>Math.max(...ids) + 1</code>.
              </li>
              <li>
                Le PDF utilise un seul état <code>nom</code> pour toutes les lignes, donc
                tous les champs de modification affichent la même valeur. Chaque ligne
                possède ici son propre état local.
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
}

import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer, { fetchUsers } from "../features/usersAsyncSlice";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

function UsersDemo() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  function loadUsers() {
    dispatch(fetchUsers());
  }

  function simulerErreur() {
    dispatch(fetchUsers("https://jsonplaceholder.typicode.com/usersXXX"));
  }

  return (
    <div className="demo-card">
      <div className="demo-card__head">
        <h2>Liste des users</h2>
        <span className="demo-card__hint">createAsyncThunk + extraReducers</span>
      </div>

      <div className="button-row button-row--start">
        <button type="button" className="btn btn--primary" onClick={loadUsers}>
          charger users
        </button>
        <button type="button" className="btn btn--ghost" onClick={simulerErreur}>
          simuler une erreur d'endpoint
        </button>
      </div>

      {loading && <h3 className="state state--loading">chargement...</h3>}

      {!loading && data.length > 0 && (
        <ul className="simple-list simple-list--scroll">
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

      {!loading && error && <p className="state state--error">{error}</p>}
    </div>
  );
}

/**
 * Exemple - PDF pages 318 a 322
 * Consommation d'une API avec createAsyncThunk.
 */
export default function ExempleAsyncThunkUsers() {
  const [store] = useState(() =>
    configureStore({
      reducer: { users: usersReducer },
    })
  );

  return (
    <div className="exercise">
      <DemoWorkspace
        title="createAsyncThunk : charger les utilisateurs"
        code={
          <>
            <CodeBlock code={snippets.asyncThunk} title="features/Users.js - PDF page 319" />
            <CodeBlock
              code={`// App.js - PDF page 320\nconst data = useSelector(state => state.users.users)\nconst loading = useSelector(state => state.users.loading)\nconst error = useSelector(state => state.users.error)\n\nfunction loadUsers(){\n  dispatch(fetchUsers());\n}\n\n{loading && <h3>chargement...</h3>}\n{(!loading && error) && <p style={{color:'red'}}>{error}</p>}`}
              title="Extrait App.js - affichage des états (PDF page 320)"
            />
          </>
        }
        result={
          <Provider store={store}>
            <UsersDemo />
          </Provider>
        }
        resultHint="Chargez les users, puis utilisez le bouton d'erreur pour voir l'action rejected."
        notes={
          <>
            <div className="callout callout--info">
              <strong>Cycle de vie observé :</strong> <code>users/fetchUsers/pending</code>{" "}
              au lancement, <code>users/fetchUsers/fulfilled</code> en cas de succès,{" "}
              <code>users/fetchUsers/rejected</code> en cas d'échec (PDF page 322). Ouvrez
              Redux DevTools pour voir les trois actions.
            </div>
            <div className="callout">
              <strong>Correction apportée :</strong> le PDF écrit{" "}
              <code>state.error = action.error</code>. <code>action.error</code> est un
              objet : React ne peut pas l'afficher directement. La démonstration utilise{" "}
              <code>action.error.message</code> pour obtenir un texte lisible.
            </div>
          </>
        }
      />
    </div>
  );
}

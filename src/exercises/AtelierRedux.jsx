import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";
import createAtelierStore from "../redux/atelier/store";
import {
  add_inscription,
  add_note,
  remove_inscription,
  remove_note,
  update_note,
} from "../redux/atelier/actions";

/**
 * Atelier Redux - PDF pages 286 a 290
 * Gestion des inscriptions et des notes des stagiaires.
 */
export default function AtelierRedux() {
  const [store] = useState(() => createAtelierStore());
  const [state, setState] = useState(store.getState());
  const [journal, setJournal] = useState([]);
  const [inscription, setInscription] = useState({ id: "", nom: "", filiere: "" });
  const [note, setNote] = useState({ id: "", module: "", note: "" });
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return unsubscribe;
  }, [store]);

  function envoyer(action, description) {
    store.dispatch(action);
    setJournal((ancien) => [
      { action: description, date: new Date().toLocaleTimeString("fr-FR") },
      ...ancien,
    ]);
  }

  function ajouterInscription(e) {
    e.preventDefault();
    if (!inscription.id || !inscription.nom.trim() || !inscription.filiere.trim()) {
      setFeedback("Remplissez l'id, le nom et la filière.");
      return;
    }
    envoyer(
      add_inscription(Number(inscription.id), inscription.nom.trim(), inscription.filiere.trim()),
      `ADD_INSCRIPTION id=${inscription.id}`
    );
    setInscription({ id: "", nom: "", filiere: "" });
    setFeedback("");
  }

  function ajouterNote(e) {
    e.preventDefault();
    if (!note.id || !note.module.trim() || note.note === "") {
      setFeedback("Remplissez l'id, le module et la note.");
      return;
    }
    envoyer(
      add_note(Number(note.id), note.module.trim(), Number(note.note)),
      `ADD_NOTE id=${note.id} module=${note.module}`
    );
    setNote({ id: "", module: "", note: "" });
    setFeedback("");
  }

  function modifierNote(id, module) {
    const nouvelleNote = window.prompt(`Nouvelle note pour ${module} (stagiaire ${id}) :`, "18");
    if (nouvelleNote === null || nouvelleNote.trim() === "") return;
    envoyer(
      update_note(id, module, Number(nouvelleNote)),
      `UPDATE_NOTE id=${id} module=${module} note=${nouvelleNote}`
    );
  }

  function chargerExemplePdf() {
    envoyer(add_inscription(10, "RAMI", "DEV"), "ADD_INSCRIPTION id=10 RAMI DEV");
    envoyer(add_inscription(11, "KAMALI", "INFRA"), "ADD_INSCRIPTION id=11 KAMALI INFRA");
    envoyer(add_note(10, "POO", 17), "ADD_NOTE id=10 POO 17");
    envoyer(add_note(10, "Web", 15), "ADD_NOTE id=10 Web 15");
    envoyer(add_note(10, "JS", 13), "ADD_NOTE id=10 JS 13");
    envoyer(remove_note(10, "POO"), "REMOVE_NOTE id=10 POO");
    envoyer(update_note(10, "JS", 18), "UPDATE_NOTE id=10 JS 18");
    setFeedback("Séquence de dispatch de la page 289 exécutée.");
  }

  function viderJournal() {
    setJournal([]);
    setFeedback("");
  }

  return (
    <div className="exercise">
      <div className="objectives">
        <h2>Objectifs de l'atelier</h2>
        <ul>
          <li>Deux reducers : <code>inscriptionHistory</code> et <code>notationHistory</code>.</li>
          <li>Combiner les reducers avec <code>combineReducers</code>.</li>
          <li>Ajouter, supprimer et modifier des inscriptions et des notes via <code>store.dispatch</code>.</li>
          <li>Observer le nouvel état avec <code>store.getState()</code>.</li>
        </ul>
      </div>

      <DemoWorkspace
        title="Atelier Redux : inscriptions et notes"
        code={
          <>
            <CodeBlock code={snippets.atelierActions} title="Actions - PDF pages 286 et 287" />
            <CodeBlock
              code={snippets.atelierReducers}
              title="Reducers et combineReducers - PDF pages 288 et 289"
            />
          </>
        }
        result={
          <>
            <div className="atelier-grid">
              <form className="demo-card" onSubmit={ajouterInscription}>
                <h2>Ajouter une inscription</h2>
                <div className="field">
                  <label htmlFor="ins-id">id</label>
                  <input
                    id="ins-id"
                    type="number"
                    value={inscription.id}
                    onChange={(e) => setInscription({ ...inscription, id: e.target.value })}
                    placeholder="10"
                  />
                </div>
                <div className="field">
                  <label htmlFor="ins-nom">nom</label>
                  <input
                    id="ins-nom"
                    type="text"
                    value={inscription.nom}
                    onChange={(e) => setInscription({ ...inscription, nom: e.target.value })}
                    placeholder="RAMI"
                  />
                </div>
                <div className="field">
                  <label htmlFor="ins-filiere">filière</label>
                  <input
                    id="ins-filiere"
                    type="text"
                    value={inscription.filiere}
                    onChange={(e) => setInscription({ ...inscription, filiere: e.target.value })}
                    placeholder="DEV"
                  />
                </div>
                <button type="submit" className="btn btn--primary">add_inscription</button>
              </form>

              <form className="demo-card" onSubmit={ajouterNote}>
                <h2>Ajouter une note</h2>
                <div className="field">
                  <label htmlFor="note-id">id du stagiaire</label>
                  <input
                    id="note-id"
                    type="number"
                    value={note.id}
                    onChange={(e) => setNote({ ...note, id: e.target.value })}
                    placeholder="10"
                  />
                </div>
                <div className="field">
                  <label htmlFor="note-module">module</label>
                  <input
                    id="note-module"
                    type="text"
                    value={note.module}
                    onChange={(e) => setNote({ ...note, module: e.target.value })}
                    placeholder="JS"
                  />
                </div>
                <div className="field">
                  <label htmlFor="note-valeur">note</label>
                  <input
                    id="note-valeur"
                    type="number"
                    value={note.note}
                    onChange={(e) => setNote({ ...note, note: e.target.value })}
                    placeholder="18"
                  />
                </div>
                <button type="submit" className="btn btn--primary">add_note</button>
              </form>
            </div>

            <div className="button-row button-row--start atelier-actions">
              <button type="button" className="btn btn--secondary" onClick={chargerExemplePdf}>
                Charger la séquence d'exemple du PDF
              </button>
              <button type="button" className="btn btn--ghost" onClick={viderJournal}>
                Vider le journal
              </button>
            </div>

            {feedback && <p className="state state--info">{feedback}</p>}

            <div className="tables-grid">
              <div className="demo-card">
                <h2>inscriptionHistory ({state.inscriptionHistory.length})</h2>
                {state.inscriptionHistory.length === 0 ? (
                  <p className="muted">Aucune inscription.</p>
                ) : (
                  <table className="data-table">
                    <thead>
                      <tr><th>id</th><th>nom</th><th>filière</th><th></th></tr>
                    </thead>
                    <tbody>
                      {state.inscriptionHistory.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.nom}</td>
                          <td>{item.filiere}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn--danger btn--small"
                              onClick={() =>
                                envoyer(remove_inscription(item.id), `REMOVE_INSCRIPTION id=${item.id}`)
                              }
                            >
                              supprimer
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              <div className="demo-card">
                <h2>notationHistory ({state.notationHistory.length})</h2>
                {state.notationHistory.length === 0 ? (
                  <p className="muted">Aucune note.</p>
                ) : (
                  <table className="data-table">
                    <thead>
                      <tr><th>id</th><th>module</th><th>note</th><th></th></tr>
                    </thead>
                    <tbody>
                      {state.notationHistory.map((item) => (
                        <tr key={`${item.id}-${item.module}`}>
                          <td>{item.id}</td>
                          <td>{item.module}</td>
                          <td>{item.note}</td>
                          <td className="table-actions">
                            <button
                              type="button"
                              className="btn btn--ghost btn--small"
                              onClick={() => modifierNote(item.id, item.module)}
                            >
                              update
                            </button>
                            <button
                              type="button"
                              className="btn btn--danger btn--small"
                              onClick={() =>
                                envoyer(
                                  remove_note(item.id, item.module),
                                  `REMOVE_NOTE id=${item.id} module=${item.module}`
                                )
                              }
                            >
                              supprimer
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            <div className="store-panel">
              <div className="store-panel__head">
                <h2>store.getState()</h2>
                <span className="demo-card__hint">État courant, équivalent du console.log de la page 290</span>
              </div>
              <pre className="code-panel__body code-panel__body--short">
                <code>{JSON.stringify(state, null, 2)}</code>
              </pre>
            </div>

            <div className="demo-card">
              <h2>Journal des actions ({journal.length})</h2>
              {journal.length === 0 ? (
                <p className="muted">Aucune action dispatchée pour le moment.</p>
              ) : (
                <ul className="action-log">
                  {journal.map((entree, index) => (
                    <li key={`${entree.date}-${index}`}>
                      <code>{entree.action}</code>
                      <span>{entree.date}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        }
        resultHint="Ajoutez une inscription ou une note, puis observez le store et le journal des actions."
      />
    </div>
  );
}

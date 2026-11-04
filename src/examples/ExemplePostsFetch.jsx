import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const BAD_URL = "https://jsonplaceholder.typicode.com/postsXXX";

/**
 * Exemple - PDF page 250
 * Chargement des posts au premier rendu avec fetch et useEffect.
 */
export default function ExemplePostsFetch() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [url, setUrl] = useState(API_URL);
  const [requestKey, setRequestKey] = useState(0);

  useEffect(() => {
    let annule = false;
    setLoading(true);
    setError("");

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((response) => {
        if (!annule) {
          setPosts(response);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!annule) {
          setPosts([]);
          setError("Impossible de charger les posts.");
          setLoading(false);
        }
      });

    return () => {
      annule = true;
    };
  }, [url, requestKey]);

  function recharger() {
    setUrl(API_URL);
    setRequestKey((valeur) => valeur + 1);
  }

  function simulerErreur() {
    setUrl(BAD_URL);
    setRequestKey((valeur) => valeur + 1);
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Liste des posts chargés avec fetch"
        code={<CodeBlock code={snippets.postsFetch} title="App.js - PDF page 250" />}
        result={
          <div className="demo-card">
            <div className="demo-card__head">
              <h2>Liste des posts à partir d'un API</h2>
              <span className="demo-card__hint">{posts.length} posts chargés</span>
            </div>

            <div className="button-row button-row--start">
              <button type="button" className="btn btn--primary btn--small" onClick={recharger}>
                Recharger les posts
              </button>
              <button
                type="button"
                className="btn btn--ghost btn--small"
                onClick={simulerErreur}
              >
                Simuler une erreur réseau
              </button>
            </div>

            {loading && <p className="state state--loading">Chargement...</p>}
            {!loading && error && <p className="state state--error">{error}</p>}

            {!loading && !error && posts.length === 0 && (
              <p className="muted">Aucun post reçu.</p>
            )}

            {!loading && !error && posts.length > 0 && (
              <ul className="simple-list simple-list--scroll">
                {posts.map((post) => (
                  <li key={post.id}>
                    <strong>{post.id}.</strong> {post.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        }
        adaptation={
          <>
            les boutons « Recharger » et « Simuler une erreur réseau » ont été ajoutés
            pour observer les états <code>loading</code> et <code>error</code>. Le code
            source du PDF reste affiché tel quel à gauche.
          </>
        }
        resultHint="La requête réelle part vers jsonplaceholder.typicode.com au montage."
        notes={
          <div className="callout callout--info">
            <strong>Cycle observé :</strong> <code>loading</code> vaut <code>true</code>{" "}
            avant la réponse, puis passe à <code>false</code> et les posts sont affichés.
            En cas d'échec, <code>error</code> reçoit un message et la liste reste vide :
            aucun résultat n'est inventé.
          </div>
        }
      />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";
import createPostsStore from "../redux/posts/store";
import { fetchPosts } from "../redux/posts/postsActions";

/**
 * Exemple - PDF pages 305 a 308
 * Posts charges avec Redux, le middleware thunk et axios.
 */
export default function ExempleReduxThunk() {
  const [store] = useState(() => createPostsStore());
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));
    return unsubscribe;
  }, [store]);

  function charger() {
    store.dispatch(fetchPosts());
  }

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Redux + thunk : charger les posts"
        code={
          <>
            <CodeBlock code={snippets.thunk} title="Fonction thunk fetchPosts - PDF page 304" />
            <CodeBlock code={snippets.thunkStore} title="store.js - PDF page 307" />
          </>
        }
        result={
          <div className="demo-card">
            <div className="demo-card__head">
              <h2>Consommation de l'API posts</h2>
              <span className="demo-card__hint">Redux + redux-thunk + axios</span>
            </div>

            <button type="button" className="btn btn--primary" onClick={charger}>
              charger posts
            </button>

            {state.loading && <h3 className="state state--loading">chargement</h3>}

            {!state.loading && !state.error && state.data.length > 0 && (
              <div>
                <h3>nombre de posts {state.data.length}</h3>
                <ul className="simple-list simple-list--scroll">
                  {state.data.map((post) => (
                    <li key={post.id}>
                      {post.id}: {post.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!state.loading && state.error && (
              <h3 className="state state--error">erreur {state.error}</h3>
            )}

            {!state.loading && !state.error && state.data.length === 0 && (
              <p className="muted">
                Cliquez sur « charger posts » pour lancer l'action FETCH_POSTS_REQUEST.
              </p>
            )}

            <div className="store-panel">
              <div className="store-panel__head">
                <h2>State Redux</h2>
                <span className="demo-card__hint">loading / data / error</span>
              </div>
              <pre className="code-panel__body code-panel__body--short">
                <code>
                  {JSON.stringify(
                    {
                      loading: state.loading,
                      nombreDePosts: state.data.length,
                      error: state.error,
                    },
                    null,
                    2
                  )}
                </code>
              </pre>
            </div>
          </div>
        }
        resultHint="Cliquez sur « charger posts » : request, puis success ou failure."
        notes={
          <div className="callout callout--info">
            <strong>Rôle du thunk :</strong> <code>fetchPosts()</code> ne renvoie pas un
            objet action mais une fonction. Le middleware thunk l'exécute avec{" "}
            <code>dispatch</code>, ce qui permet d'envoyer <code>REQUEST</code> avant la
            requête axios, puis <code>SUCCESS</code> ou <code>FAILURE</code>.
          </div>
        }
      />
    </div>
  );
}

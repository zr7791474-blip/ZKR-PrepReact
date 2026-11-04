import React from "react";
import usePosts from "../hooks/usePosts";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

/**
 * Exemple - PDF page 252
 * Le composant App utilise le Hook personnalise usePosts().
 */
export default function ExempleUsePosts() {
  const posts = usePosts();

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Hook personnalisé usePosts()"
        code={
          <>
            <CodeBlock
              code={snippets.usePosts}
              title="hooks/usePosts.js - PDF page 252"
            />
            <CodeBlock
              code={snippets.usePostsApp}
              title="App.js - consommation du Hook - PDF page 252"
            />
          </>
        }
        result={
          <div className="demo-card">
            <div className="demo-card__head">
              <h2>Liste des posts avec usePosts()</h2>
              <span className="demo-card__hint">{posts.length} posts</span>
            </div>
            <p className="muted">
              Toute la logique fetch + useEffect est cachée dans le Hook{" "}
              <code>src/hooks/usePosts.js</code>. Le composant ne fait qu'appeler{" "}
              <code>usePosts()</code>.
            </p>
            {posts.length === 0 && (
              <p className="state state--loading">
                Chargement des posts (le Hook du PDF n'expose pas d'état loading).
              </p>
            )}
            {posts.length > 0 && (
              <ul className="simple-list simple-list--scroll">
                {posts.slice(0, 25).map((post) => (
                  <li key={post.id}>
                    <strong>{post.id}.</strong> {post.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        }
        resultHint="Le composant appelle usePosts() et reçoit directement le tableau des posts."
        notes={
          <div className="callout callout--info">
            <strong>Pourquoi un Hook personnalisé ?</strong> Un Hook est une fonction
            réutilisable dont le nom commence par <code>use</code>. Ici, <code>usePosts</code>{" "}
            isole le <code>useState</code> et le <code>useEffect</code> de récupération :
            plusieurs composants peuvent réutiliser la même logique sans la réécrire.
          </div>
        }
      />
    </div>
  );
}

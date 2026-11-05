import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { chapters, counts, matchesSearch, TYPE_LABELS } from "../data/catalog";
import PageRuler from "./PageRuler";

const TALLY = [
  ["exercises", "Exercices"],
  ["ateliers", "Atelier"],
  ["quizzes", "Quiz"],
  ["examples", "Exemples"],
  ["lessons", "Leçons"],
];

function ItemRow({ item }) {
  const topics = (item.topics || []).slice(0, 4).join(" · ");
  return (
    <Link className="catalog-item" to={`/fiche/${item.id}`}>
      <div className="catalog-item__main">
        <span className="catalog-item__pages">PDF p. {item.pages}</span>
        <h3 className="catalog-item__title">{item.title}</h3>
        <p className="catalog-item__desc">{item.description}</p>
        {topics && <p className="catalog-item__topics">{topics}</p>}
      </div>
      <span className="catalog-item__side">
        <span className={`badge badge--${item.type}`}>{TYPE_LABELS[item.type]}</span>
        <span className="catalog-item__arrow" aria-hidden="true">
          →
        </span>
      </span>
    </Link>
  );
}

export default function Dashboard({ typeFilter = "all" }) {
  const [query, setQuery] = useState("");
  const [chapterId, setChapterId] = useState("all");
  const searchRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Raccourci "/" : place le focus dans la recherche (hors champs de saisie).
  useEffect(() => {
    function onKeyDown(event) {
      const tag = event.target && event.target.tagName;
      if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(tag)) {
        event.preventDefault();
        if (searchRef.current) searchRef.current.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const filteredChapters = useMemo(() => {
    const source = typeFilter === "all"
      ? chapters
      : chapters
          .map((chapter) => ({
            ...chapter,
            items: chapter.items.filter((item) => item.type === typeFilter),
          }))
          .filter((chapter) => chapter.items.length > 0);

    return source
      .filter((chapter) => chapterId === "all" || chapter.id === chapterId)
      .map((chapter) => ({
        ...chapter,
        items: chapter.items.filter((item) => matchesSearch(item, query)),
      }))
      .filter((chapter) => chapter.items.length > 0);
  }, [query, chapterId, typeFilter]);

  const nombreResultats = filteredChapters.reduce(
    (total, chapter) => total + chapter.items.length,
    0
  );

  const chapitreActif = chapters.find((chapter) => chapter.id === chapterId);

  return (
    <main className="page dashboard">
      <section className="hero">
        <div className="hero__copy">
          <p className="hero__eyebrow">OFPPT M204 · Développer en Front end</p>
          <h1 className="hero__title">
            Exercices React <em>du cours</em>
          </h1>
          <p className="hero__subtitle">
            Les pages <strong>4 à 322</strong> du PDF, fiche par fiche : le numéro de page,
            le code du cours et une démonstration que l'on peut exécuter.
          </p>
        </div>

        <aside className="hero__index" aria-label="Contenu en chiffres">
          <p className="hero__total">
            <span className="stat__value">{counts.total}</span>
            <span className="stat__label">Fiches au total</span>
          </p>
          <dl className="tally">
            {TALLY.map(([key, label]) => (
              <div className="tally__row" key={key}>
                <dt>{label}</dt>
                <dd>{counts[key]}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="filters" aria-label="Recherche et filtres">
        <div className="search-field">
          <label htmlFor="recherche">Rechercher</label>
          <div className="search-field__control">
            <input
              id="recherche"
              ref={searchRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Titre, thème ou page : JSX, useEffect, 235…"
              autoComplete="off"
            />
            {query ? (
              <button
                type="button"
                className="search-field__clear"
                onClick={() => setQuery("")}
                aria-label="Effacer la recherche"
              >
                ×
              </button>
            ) : (
              <kbd className="search-field__key" aria-hidden="true">
                /
              </kbd>
            )}
          </div>
        </div>

        <PageRuler activeId={chapterId} onSelect={setChapterId} />

        <p className="filters__summary" role="status">
          <strong>{nombreResultats}</strong> fiche(s) affichée(s)
          {query && (
            <>
              {" "}
              pour « <strong>{query}</strong> »
            </>
          )}
          {chapitreActif && (
            <> — chapitre {chapitreActif.number} (p. {chapitreActif.pages})</>
          )}
        </p>
      </section>

      {filteredChapters.length === 0 && (
        <div className="empty-state">
          <h2>Aucun résultat</h2>
          <p>
            Essayez un autre mot-clé (« fetch », « compteur », « JSX ») ou un numéro de
            page entre 4 et 322.
          </p>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              setQuery("");
              setChapterId("all");
            }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {filteredChapters.map((chapter) => (
        <section className="chapter" key={chapter.id} id={chapter.id}>
          <div className="chapter__head">
            <span className="chapter__number" aria-hidden="true">
              {String(chapter.number).padStart(2, "0")}
            </span>
            <div className="chapter__text">
              <p className="chapter__eyebrow">
                Chapitre {chapter.number} · PDF p. {chapter.pages}
              </p>
              <h2 className="chapter__title">{chapter.title}</h2>
              <p className="chapter__summary">{chapter.summary}</p>
            </div>
            <span className="chapter__count">{chapter.items.length} fiche(s)</span>
          </div>

          <div className="catalog-grid">
            {chapter.items.map((item) => (
              <ItemRow key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}

      <section className="about-project">
        <h2>À propos de ce projet</h2>
        <div className="about-project__cols">
          <p>
            Toutes les fiches suivent l'ordre du PDF et conservent la logique des exercices
            d'origine. Les composants sont en JavaScript (JSX), avec des composants
            fonctionnels et des Hooks. Redux, React-Redux, Redux Thunk, Redux Toolkit et
            Axios ne sont utilisés que dans les fiches des chapitres qui les enseignent.
          </p>
          <p>
            L'exercice 4 (page 308) n'a pas de solution dans le PDF : sa fiche conserve la
            consigne, les étapes et des indices, sans donner le code final. Les erreurs
            évidentes du PDF sont corrigées et signalées dans les fiches concernées.
          </p>
        </div>
      </section>
    </main>
  );
}

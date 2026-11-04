import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { chapters, counts, matchesSearch, TYPE_LABELS } from "../data/catalog";

function ItemCard({ item }) {
  return (
    <Link className="catalog-item" to={`/fiche/${item.id}`}>
      <div className="catalog-item__top">
        <span className={`badge badge--${item.type}`}>{TYPE_LABELS[item.type]}</span>
        <span className="catalog-item__pages">PDF p. {item.pages}</span>
      </div>
      <h3 className="catalog-item__title">{item.title}</h3>
      <p className="catalog-item__desc">{item.description}</p>
      <div className="chip-row chip-row--small">
        {(item.topics || []).slice(0, 4).map((topic) => (
          <span className="chip chip--static" key={topic}>
            {topic}
          </span>
        ))}
      </div>
      <span className="catalog-item__cta">Ouvrir la fiche →</span>
    </Link>
  );
}

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [chapterId, setChapterId] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredChapters = useMemo(() => {
    return chapters
      .filter((chapter) => chapterId === "all" || chapter.id === chapterId)
      .map((chapter) => ({
        ...chapter,
        items: chapter.items.filter((item) => matchesSearch(item, query)),
      }))
      .filter((chapter) => chapter.items.length > 0);
  }, [query, chapterId]);

  const nombreResultats = filteredChapters.reduce(
    (total, chapter) => total + chapter.items.length,
    0
  );

  const chapitreActif = chapters.find((chapter) => chapter.id === chapterId);

  return (
    <main className="page dashboard">
      <section className="hero">
        <p className="hero__eyebrow">OFPPT M204 · Développer en Front end</p>
        <h1 className="hero__title">Exercices React du cours</h1>
        <p className="hero__subtitle">
          Projet d'étude complet construit à partir des pages <strong>4 à 322</strong> du
          PDF. Chaque exercice, exemple et leçon possède sa propre fiche, avec le numéro de
          page, le code du cours et une démonstration exécutable.
        </p>

        <div className="stats">
          <div className="stat">
            <span className="stat__value">{counts.exercises}</span>
            <span className="stat__label">Exercices</span>
          </div>
          <div className="stat">
            <span className="stat__value">{counts.ateliers}</span>
            <span className="stat__label">Atelier</span>
          </div>
          <div className="stat">
            <span className="stat__value">{counts.quizzes}</span>
            <span className="stat__label">Quiz</span>
          </div>
          <div className="stat">
            <span className="stat__value">{counts.examples}</span>
            <span className="stat__label">Exemples</span>
          </div>
          <div className="stat">
            <span className="stat__value">{counts.lessons}</span>
            <span className="stat__label">Leçons</span>
          </div>
          <div className="stat stat--total">
            <span className="stat__value">{counts.total}</span>
            <span className="stat__label">Fiches au total</span>
          </div>
        </div>
      </section>

      <section className="filters" aria-label="Recherche et filtres">
        <div className="search-field">
          <label htmlFor="recherche">Rechercher</label>
          <input
            id="recherche"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Titre, thème ou page : JSX, useEffect, 235..."
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              className="search-field__clear"
              onClick={() => setQuery("")}
              aria-label="Effacer la recherche"
            >
              ×
            </button>
          )}
        </div>

        <div className="chapter-filter">
          <span className="chapter-filter__label">Chapitre :</span>
          <div className="chip-row">
            <button
              type="button"
              className={`chip ${chapterId === "all" ? "chip--active" : ""}`}
              onClick={() => setChapterId("all")}
            >
              Tous ({chapters.length})
            </button>
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                type="button"
                className={`chip ${chapterId === chapter.id ? "chip--active" : ""}`}
                onClick={() => setChapterId(chapter.id)}
              >
                {chapter.number}. {chapter.title}
              </button>
            ))}
          </div>
        </div>

        <p className="filters__summary">
          <strong>{nombreResultats}</strong> fiche(s) affichée(s)
          {query && <> pour « <strong>{query}</strong> »</>}
          {chapitreActif && <> — chapitre {chapitreActif.number} (p. {chapitreActif.pages})</>}
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
            <div>
              <p className="chapter__eyebrow">
                Chapitre {chapter.number} · {chapter.part} · PDF p. {chapter.pages}
              </p>
              <h2 className="chapter__title">{chapter.title}</h2>
              <p className="chapter__summary">{chapter.summary}</p>
            </div>
            <span className="chapter__count">
              {chapter.items.length} fiche(s)
            </span>
          </div>

          <div className="catalog-grid">
            {chapter.items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}

      <section className="about-project">
        <h2>À propos de ce projet</h2>
        <p>
          Toutes les fiches suivent l'ordre du PDF et conservent la logique des exercices
          d'origine. Les composants sont en JavaScript (JSX), avec des composants
          fonctionnels et des Hooks. Les chapitres 4 et 5 du PDF enseignent explicitement
          Redux, React-Redux, Redux Thunk, Redux Toolkit et Axios : ces bibliothèques sont
          donc installées et utilisées uniquement dans les fiches concernées.
        </p>
        <p>
          L'exercice 4 (page 308) ne possède pas de solution dans le PDF : sa fiche conserve
          la consigne, les étapes et une checklist, sans donner le code final. Les
          corrections des erreurs évidentes du PDF sont signalées dans les fiches
          correspondantes.
        </p>
      </section>
    </main>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { TYPE_LABELS } from "../data/catalog";
import PageRuler from "./PageRuler";

export default function PageHeader({ item, position, total }) {
  const firstPage = (item.pageList && item.pageList[0]) || parseInt(item.pages, 10) || null;

  return (
    <header className="page-head">
      <nav className="page-head__crumbs" aria-label="Fil d'Ariane">
        <Link className="btn--back" to="/">
          <span aria-hidden="true">←</span> Retour à l'accueil
        </Link>
        <span className="page-head__position">
          Fiche {position} / {total}
        </span>
      </nav>

      <div className="page-head__meta">
        <span className={`badge badge--${item.type}`}>{TYPE_LABELS[item.type]}</span>
        <span className="page-head__chapter">
          Chapitre {item.chapterNumber} · {item.chapterTitle}
        </span>
        <span className="page-head__pages">PDF p. {item.pages}</span>
      </div>

      <h1 className="page-head__title">{item.title}</h1>
      <p className="page-head__desc">{item.description}</p>

      <PageRuler marker={firstPage} markerChapterId={item.chapterId} />
    </header>
  );
}

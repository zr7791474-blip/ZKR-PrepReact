import React from "react";
import { TYPE_LABELS } from "../data/catalog";

export default function PageHeader({ item, onBack }) {
  return (
    <div className="page-head">
      <button type="button" className="btn btn--back" onClick={onBack}>
        <span aria-hidden="true">←</span> Retour à l'accueil
      </button>

      <div className="page-head__meta">
        <span className={`badge badge--${item.type}`}>{TYPE_LABELS[item.type]}</span>
        <span className="page-head__chapter">
          Chapitre {item.chapterNumber} · {item.chapterTitle}
        </span>
        <span className="page-head__pages">PDF p. {item.pages}</span>
      </div>

      <h1 className="page-head__title">{item.title}</h1>
      <p className="page-head__desc">{item.description}</p>
    </div>
  );
}

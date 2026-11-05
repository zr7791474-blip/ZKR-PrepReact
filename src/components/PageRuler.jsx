import React, { useState } from "react";
import { chapters } from "../data/catalog";

/**
 * "Regle des pages" : signature visuelle du projet.
 * Chaque chapitre est un segment dont la largeur est proportionnelle au nombre
 * de pages du PDF (4 a 322). Utilisee comme filtre sur l'accueil et comme
 * repere de position sur chaque fiche.
 */

function parseRange(pages) {
  const match = String(pages).match(/(\d+)\s*[-–]\s*(\d+)/);
  return match ? [Number(match[1]), Number(match[2])] : [0, 0];
}

export const SEGMENTS = chapters.map((chapter) => {
  const [start, end] = parseRange(chapter.pages);
  return {
    id: chapter.id,
    number: chapter.number,
    title: chapter.title,
    pages: chapter.pages,
    start,
    end,
    span: end - start + 1,
  };
});

export const PDF_FIRST_PAGE = SEGMENTS[0].start;
export const PDF_LAST_PAGE = SEGMENTS[SEGMENTS.length - 1].end;

function markerOffset(segment, page) {
  if (!segment || !page) return null;
  const ratio = (page - segment.start) / Math.max(segment.span - 1, 1);
  return `${Math.min(Math.max(ratio, 0), 1) * 100}%`;
}

export default function PageRuler({ activeId = "all", onSelect, marker = null, markerChapterId = null }) {
  const [hoverId, setHoverId] = useState(null);
  const interactive = typeof onSelect === "function";
  const shownId = hoverId || (activeId !== "all" ? activeId : null);
  const shown = SEGMENTS.find((segment) => segment.id === shownId);

  const caption = shown
    ? `Chapitre ${shown.number} · ${shown.title} · p. ${shown.pages}`
    : interactive
      ? "Choisissez un chapitre pour filtrer la liste."
      : null;

  const markerSegment = SEGMENTS.find((segment) => segment.id === markerChapterId);

  if (!interactive) {
    return (
      <div
        className="ruler ruler--static"
        role="img"
        aria-label={`Position dans le cours : page ${marker} sur ${PDF_LAST_PAGE}${
          markerSegment ? `, chapitre ${markerSegment.number}` : ""
        }`}
      >
        <div className="ruler__track" aria-hidden="true">
          {SEGMENTS.map((segment) => (
            <span
              key={segment.id}
              className={`ruler__seg ${segment.id === markerChapterId ? "ruler__seg--current" : ""}`}
              style={{ flexGrow: segment.span }}
            >
              {segment.id === markerChapterId && marker && (
                <span className="ruler__marker" style={{ left: markerOffset(segment, marker) }} />
              )}
            </span>
          ))}
        </div>
        <div className="ruler__axis" aria-hidden="true">
          <span>p. {PDF_FIRST_PAGE}</span>
          <span>p. {PDF_LAST_PAGE}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="ruler">
      <div className="ruler__track" role="group" aria-label="Chapitres du cours, proportionnels au nombre de pages">
        {SEGMENTS.map((segment) => {
          const pressed = activeId === segment.id;
          return (
            <button
              key={segment.id}
              type="button"
              className={`ruler__seg ruler__seg--button ${pressed ? "ruler__seg--active" : ""}`}
              style={{ flexGrow: segment.span }}
              aria-pressed={pressed}
              aria-label={`Chapitre ${segment.number}, ${segment.title}, pages ${segment.pages}`}
              onClick={() => onSelect(pressed ? "all" : segment.id)}
              onMouseEnter={() => setHoverId(segment.id)}
              onMouseLeave={() => setHoverId(null)}
              onFocus={() => setHoverId(segment.id)}
              onBlur={() => setHoverId(null)}
            >
              <span aria-hidden="true">{segment.number}</span>
            </button>
          );
        })}
      </div>
      <div className="ruler__axis">
        <span className="ruler__caption" aria-live="polite">
          {caption}
        </span>
        <span aria-hidden="true">
          p. {PDF_FIRST_PAGE} → {PDF_LAST_PAGE}
        </span>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PageHeader from "./PageHeader";
import LessonView from "./LessonView";
import CodeBlock from "./CodeBlock";
import NotFound from "./NotFound";
import registry from "../registry";
import { allItems, itemById, TYPE_LABELS } from "../data/catalog";
import { snippets } from "../data/snippets";

export default function ItemPage() {
  const { id } = useParams();
  const item = itemById[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return <NotFound />;
  }

  const RegisteredComponent = registry[item.id];
  const index = allItems.findIndex((entry) => entry.id === item.id);
  const previous = index > 0 ? allItems[index - 1] : null;
  const next = index >= 0 && index < allItems.length - 1 ? allItems[index + 1] : null;
  const snippet = item.codeKey ? snippets[item.codeKey] : null;

  return (
    <main className="page item-page">
      <PageHeader item={item} position={index + 1} total={allItems.length} />

      <div className="item-body">
        {item.type === "lesson" && item.note && (
          <div className="callout callout--info">
            <strong>Note :</strong> {item.note}
          </div>
        )}

        {RegisteredComponent ? (
          <RegisteredComponent />
        ) : (
          <LessonView item={item} />
        )}

        {!RegisteredComponent && snippet && (
          <CodeBlock code={snippet} title={`Code du cours — PDF p. ${item.pages}`} />
        )}
      </div>

      <nav className="pager" aria-label="Navigation entre les fiches">
        <div className="pager__side">
          {previous ? (
            <Link className="pager__link pager__link--prev" to={`/fiche/${previous.id}`}>
              <span className="pager__label">← Fiche précédente</span>
              <span className="pager__title">{previous.title}</span>
              <span className="pager__meta">
                {TYPE_LABELS[previous.type]} · p. {previous.pages}
              </span>
            </Link>
          ) : (
            <span className="pager__empty">Début du catalogue</span>
          )}
        </div>

        <div className="pager__side pager__side--right">
          {next ? (
            <Link className="pager__link pager__link--next" to={`/fiche/${next.id}`}>
              <span className="pager__label">Fiche suivante →</span>
              <span className="pager__title">{next.title}</span>
              <span className="pager__meta">
                {TYPE_LABELS[next.type]} · p. {next.pages}
              </span>
            </Link>
          ) : (
            <span className="pager__empty">Fin du catalogue</span>
          )}
        </div>
      </nav>

    </main>
  );
}

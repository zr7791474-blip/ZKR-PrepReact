import React from "react";
import { Link, useLocation } from "react-router-dom";
import { counts } from "../data/catalog";

function IconHome(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function IconZap(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconFlask(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M10 2v7.5L4.5 19a2.1 2.1 0 0 0 1.8 3h11.4a2.1 2.1 0 0 0 1.8-3L14 9.5V2" />
      <path d="M8.5 2h7" />
    </svg>
  );
}

function IconHelp(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function IconCode(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  );
}

function IconBook(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function IconFile(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}

function IconChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

const ICONS = { home: IconHome, zap: IconZap, flask: IconFlask, help: IconHelp, code: IconCode, book: IconBook, file: IconFile, chevronLeft: IconChevronLeft, chevronRight: IconChevronRight };

const SECTIONS = [
  { id: "accueil", label: "Accueil", to: "/", icon: "home", count: null, type: null },
  { id: "exercices", label: "Exercices", to: "/exercices", icon: "zap", type: "exercise", count: counts.exercises },
  { id: "atelier", label: "Atelier", to: "/atelier", icon: "flask", type: "atelier", count: counts.ateliers },
  { id: "quiz", label: "Quiz", to: "/quiz", icon: "help", type: "quiz", count: counts.quizzes },
  { id: "exemples", label: "Exemples", to: "/exemples", icon: "code", type: "example", count: counts.examples },
  { id: "lecons", label: "Leçons", to: "/lecons", icon: "book", type: "lesson", count: counts.lessons },
  { id: "cours-pdf", label: "Cours PDF", to: "/cours-pdf", icon: "file", type: null, count: null },
];

function isActive(pathname, to) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export default function Sidebar({ open, onClose, collapsed, onToggleCollapse }) {
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`app-sidebar__backdrop ${open ? "app-sidebar__backdrop--visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        id="sidebar"
        className={`app-sidebar ${open ? "app-sidebar--open" : ""}`}
        data-collapsed={collapsed ? "true" : "false"}
        aria-label="Navigation principale"
      >
        <nav className="app-sidebar__nav" aria-label="Sections du cours">
          {SECTIONS.map((section) => {
            const active = isActive(pathname, section.to);
            const Icon = ICONS[section.icon] || ICONS.book;
            return (
              <Link
                key={section.id}
                to={section.to}
                className={`side-item ${active ? "side-item--active" : ""}`}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                aria-label={section.label}
              >
                <Icon />
                <span className="side-item__label">{section.label}</span>
                {section.count !== null && <span className="side-item__count">{section.count}</span>}
              </Link>
            );
          })}
        </nav>

        {onToggleCollapse && (
          <button
            type="button"
            className="side-item side-item--collapse"
            onClick={onToggleCollapse}
            aria-label={collapsed ? "Afficher le menu" : "Réduire le menu"}
          >
            {collapsed ? <ICONS.chevronRight /> : <ICONS.chevronLeft />}
            {!collapsed && <span className="side-item__label">{collapsed ? "Afficher le menu" : "Réduire le menu"}</span>}
          </button>
        )}
      </aside>
    </>
  );
}

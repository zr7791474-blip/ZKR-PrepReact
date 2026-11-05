import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";

function renderSidebarAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Sidebar open onClose={jest.fn()} />
      <Routes>
        <Route path="/" element={<div>Accueil page</div>} />
        <Route path="/exercices" element={<div>Exercices page</div>} />
      </Routes>
    </MemoryRouter>
  );
}

test("la sidebar liste les sections du cours avec leurs fiches", () => {
  renderSidebarAt("/");

  expect(screen.getByRole("navigation", { name: /sections du cours/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Accueil/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Exercices/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Atelier/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Quiz/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Exemples/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Leçons/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Cours PDF/i })).toBeInTheDocument();
});

test("la sidebar met en avant la section courante", () => {
  renderSidebarAt("/exercices");

  const exercices = screen.getByRole("link", { name: /Exercices/i });
  expect(exercices).toHaveAttribute("aria-current", "page");
});

test("la sidebar signale l'etat ouvert pour le menu mobile", () => {
  render(
    <MemoryRouter>
      <Sidebar open onClose={jest.fn()} />
    </MemoryRouter>
  );

  expect(screen.getByRole("complementary", { name: /navigation principale/i })).toHaveClass(
    "app-sidebar--open"
  );
});

test("la sidebar peut etre reduite a un mode icone-only", () => {
  render(
    <MemoryRouter>
      <Sidebar open={false} onClose={jest.fn()} collapsed onToggleCollapse={jest.fn()} />
    </MemoryRouter>
  );

  expect(screen.getByRole("complementary", { name: /navigation principale/i })).toHaveAttribute(
    "data-collapsed",
    "true"
  );
});

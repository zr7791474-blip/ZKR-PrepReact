import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PdfReader from "./PdfReader";

test("le lecteur PDF embarque le document et propose les actions", () => {
  render(
    <MemoryRouter>
      <PdfReader />
    </MemoryRouter>
  );

  expect(screen.getByRole("heading", { name: /Cours PDF — Développer en Front end/i })).toBeInTheDocument();
  expect(screen.getByTitle(/Manuel du cours OFPPT M204/i)).toHaveAttribute(
    "src",
    "/pdf/Développer en Front end M204.pdf"
  );
  expect(screen.getByRole("link", { name: /Ouvrir dans un nouvel onglet/i })).toHaveAttribute(
    "href",
    "/pdf/Développer en Front end M204.pdf"
  );
  expect(screen.getByRole("link", { name: /Télécharger le PDF/i })).toBeInTheDocument();
  expect(screen.getByText(/visualiseur natif/i)).toBeInTheDocument();
});

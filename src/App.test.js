import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import App from "./App";
import { allItems, chapters, counts } from "./data/catalog";

const realFetch = global.fetch;

afterEach(() => {
  global.fetch = realFetch;
  jest.restoreAllMocks();
});

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

test("le catalogue couvre les pages 4 a 322 avec 115 fiches", () => {
  expect(chapters).toHaveLength(13);
  expect(counts.total).toBe(115);
  expect(counts.exercises).toBe(7);
  expect(counts.ateliers).toBe(1);
  expect(counts.quizzes).toBe(1);
  expect(counts.examples).toBe(50);
  expect(counts.lessons).toBe(56);
  expect(chapters.map((chapter) => chapter.number)).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]);

  const premier = allItems[0];
  const dernier = allItems[allItems.length - 1];
  expect(premier.pageList[0]).toBe(6);
  expect(dernier.pageList[dernier.pageList.length - 1]).toBe(322);
});

test("le tableau de bord affiche les chapitres et les numeros de page", () => {
  renderAt("/");

  expect(
    screen.getByRole("heading", { name: /Exercices React du cours/i })
  ).toBeInTheDocument();

  expect(screen.getAllByText(/PDF p. 221 - 224/).length).toBeGreaterThan(0);
  expect(
    screen.getAllByRole("heading", { name: /formulaires et consommer des API/i }).length
  ).toBeGreaterThan(0);
  expect(
    screen.getByRole("heading", { name: /concepts de base du web front-end/i })
  ).toBeInTheDocument();
  expect(screen.getByText("Fiches au total")).toBeInTheDocument();
  expect(screen.getByText("4 à 322")).toBeInTheDocument();
});

test("la recherche filtre les fiches par theme", () => {
  renderAt("/");

  fireEvent.change(screen.getByLabelText(/Rechercher/i), {
    target: { value: "destructuring" },
  });

  expect(
    screen.queryByRole("heading", { name: /R.alisation d'un compteur/i })
  ).not.toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /Object destructing/i })
  ).toBeInTheDocument();
});

test("l'exercice 2 (compteur) s'incremente au clic", () => {
  renderAt("/fiche/ex02-compteur");

  expect(screen.getByText(/compteur : 0/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /incrementer/i }));
  expect(screen.getByText(/compteur : 1/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /decrementer/i }));
  expect(screen.getByText(/compteur : 0/i)).toBeInTheDocument();
});

test("les onglets code / resultat gardent l'etat de la demonstration", () => {
  renderAt("/fiche/ex02-compteur");

  const codePanel = screen.getByRole("tabpanel", { name: "Code source" });
  const resultPanel = screen.getByRole("tabpanel", { name: /sultat interactif/i });

  expect(codePanel).toBeVisible();
  expect(resultPanel).toBeVisible();

  fireEvent.click(screen.getByRole("button", { name: /incrementer/i }));
  expect(screen.getByText(/compteur : 1/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("tab", { name: "Voir le code" }));
  expect(screen.getByRole("tab", { name: "Voir le code" })).toHaveAttribute(
    "aria-selected",
    "true"
  );
  expect(codePanel).toBeVisible();
  expect(resultPanel).not.toBeVisible();

  fireEvent.click(screen.getByRole("tab", { name: /Voir le r.sultat/i }));
  expect(resultPanel).toBeVisible();
  expect(screen.getByText(/compteur : 1/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /decrementer/i }));
  expect(screen.getByText(/compteur : 0/i)).toBeInTheDocument();
});

test("l'exemple salutation met a jour le titre du document", () => {
  renderAt("/fiche/exemple-salutation");

  fireEvent.change(screen.getByLabelText(/nom/i), {
    target: { value: "Amine" },
  });

  expect(document.title).toBe("Amine");
  expect(screen.getByText(/salut Amine/i)).toBeInTheDocument();
});

test("l'exemple fetch affiche les donnees puis une vraie erreur", async () => {
  const fetchMock = jest
    .fn()
    .mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: 1, title: "Post de test" }],
    })
    .mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({}),
    });
  global.fetch = fetchMock;

  renderAt("/fiche/exemple-posts-fetch");

  expect(await screen.findByText(/Post de test/i)).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", { name: /Simuler une erreur r.seau/i })
  );

  expect(
    await screen.findByText(/Impossible de charger les posts/i)
  ).toBeInTheDocument();
});

test("l'exemple usePosts affiche le Hook et son composant consommateur", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: async () => [{ id: 42, title: "Post charg. par le Hook" }],
    })
  );

  renderAt("/fiche/exemple-use-posts");

  expect(
    await screen.findByText(/Post charg. par le Hook/i)
  ).toBeInTheDocument();

  expect(
    screen.getByText("hooks/usePosts.js - PDF page 252")
  ).toBeInTheDocument();
  expect(
    screen.getByText("App.js - consommation du Hook - PDF page 252")
  ).toBeInTheDocument();
});

test("le quiz useEffect affiche le code et calcule le score", () => {
  renderAt("/fiche/quiz-useeffect");

  expect(screen.getByText("Question 1 - PDF page 245")).toBeInTheDocument();
  expect(screen.getByText("Question 3 - PDF page 246")).toBeInTheDocument();

  fireEvent.click(
    screen.getByRole("button", {
      name: /Un log de 'TEST', affich. apr.s le rendu/i,
    })
  );

  expect(screen.getByText(/Score\s*:\s*1\s*\/\s*3/)).toBeInTheDocument();
});

test("l'exercice 4 ne revele aucune solution ni demonstration", () => {
  renderAt("/fiche/ex04-redux-users");

  expect(
    screen.getByText(/Exercice sans solution dans le PDF/i)
  ).toBeInTheDocument();
  expect(screen.queryByRole("tablist")).not.toBeInTheDocument();
  expect(screen.queryByRole("tab")).not.toBeInTheDocument();
});

test("la route imbriquee /about de l'exemple de routage fonctionne", () => {
  renderAt("/fiche/exemple-routing/about");

  expect(
    screen.getByText(/Cette page est affich.e par la route \/about/i)
  ).toBeInTheDocument();
});

test("les liens de l'exemple de routage changent de page", () => {
  renderAt("/fiche/exemple-routing");

  fireEvent.click(screen.getByRole("link", { name: "Blog" }));

  expect(
    screen.getByText(/Cette page est affich.e par la route \/blog/i)
  ).toBeInTheDocument();
});

test("la route dediee /cours-pdf affiche le lecteur du PDF", () => {
  renderAt("/cours-pdf");

  expect(screen.getByTitle(/Manuel du cours OFPPT M204/i)).toBeInTheDocument();
  expect(screen.getByText(/visualiseur natif/i)).toBeInTheDocument();
});

/* ---------- Pages 4 a 219 ---------- */

test("l'exemple de liste JSX affiche cinq elements et applique la couleur", () => {
  renderAt("/fiche/exemple-jsx-liste");

  expect(screen.getAllByText("Element1").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Element5").length).toBeGreaterThan(0);

  fireEvent.change(screen.getByLabelText("couleur"), {
    target: { value: "blue" },
  });

  const premierElement = screen.getAllByText("Element1")[0];
  // eslint-disable-next-line testing-library/no-node-access
  expect(premierElement.closest("ul").style.color).toBe("blue");
});

test("l'exercice JSX calcule l'age dans les versions fonction et classe", () => {
  renderAt("/fiche/exercice-jsx-age");

  const age = new Date().getFullYear() - 2010;
  fireEvent.change(screen.getByLabelText("dateNaissance"), {
    target: { value: "2010-01-01" },
  });

  expect(
    screen.getAllByText(new RegExp(`Age : ${age}`)).length
  ).toBe(2);
});

test("l'exercice inscription convertit la saisie en majuscules", () => {
  renderAt("/fiche/exercice-inscription");

  fireEvent.change(screen.getByLabelText("Nom:"), {
    target: { value: "rami" },
  });
  fireEvent.change(screen.getByLabelText("Prenom:"), {
    target: { value: "ahmed" },
  });

  expect(screen.getByLabelText("Nom:")).toHaveValue("RAMI");
  expect(screen.getByLabelText("Prenom:")).toHaveValue("AHMED");

  fireEvent.click(screen.getByRole("button", { name: "Afficher" }));

  expect(screen.getByText("nom:RAMI prenom:AHMED")).toBeInTheDocument();
});

test("le validateur de mot de passe controle les deux versions", () => {
  renderAt("/fiche/exercice-validator");

  const champs = screen.getAllByLabelText(/Entrer votre password/i);
  const resultat = screen.getByRole("tabpanel", { name: /sultat interactif/i });
  expect(champs).toHaveLength(2);
  expect(
    within(resultat).getAllByText(/Password doit avoir au moins t 4/i)
  ).toHaveLength(2);

  champs.forEach((champ) => {
    fireEvent.change(champ, { target: { value: "abcd" } });
  });

  expect(
    within(resultat).queryByText(/Password doit avoir au moins t 4/i)
  ).not.toBeInTheDocument();
});

test("l'exemple props.children rend le contenu passe entre les balises", () => {
  renderAt("/fiche/exemple-children");

  expect(screen.getByText("ce ci est un children props")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "quitter" })).toBeInTheDocument();
});

test("l'exemple Message met a jour son state au clic", () => {
  renderAt("/fiche/exemple-message-classe");

  expect(screen.getByText("Bien venu visiteur")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "inscription" }));

  expect(
    screen.getByText("votre inscription est effectuée")
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "merci" })).toBeInTheDocument();
});

test("la communication inter-composant filtre la liste par type", () => {
  renderAt("/fiche/exemple-communication");

  fireEvent.change(screen.getByLabelText(/Entrer le mot cl/i), {
    target: { value: "fruit" },
  });
  fireEvent.click(screen.getByRole("button", { name: /chercher/i }));

  expect(screen.getByText("banane")).toBeInTheDocument();
  expect(screen.getByText("kiwi")).toBeInTheDocument();
  expect(screen.queryByText("tomate")).not.toBeInTheDocument();
});

test("le cycle de vie journalise le montage, la mise a jour et le demontage", () => {
  renderAt("/fiche/exemple-cycle-vie");

  expect(screen.getByText("Component Did mount")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /Incrementer/i }));
  expect(screen.getAllByText("Component Did update").length).toBeGreaterThan(0);

  fireEvent.click(screen.getByRole("button", { name: /Demonter/i }));
  expect(screen.getByText("Component est demonté")).toBeInTheDocument();
});

test("l'affichage conditionnel bascule entre Connecte et Anonymous", () => {
  renderAt("/fiche/exemple-affichage-conditionnel");

  expect(screen.getByText("Veuillez vous inscrire.")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("checkbox"));

  expect(screen.getByText("Bienvenue !")).toBeInTheDocument();
});

test("l'exemple des listes ajoute une tache avec une cle stable", () => {
  renderAt("/fiche/exemple-listes-cles");

  fireEvent.change(screen.getByLabelText(/nouvelle t.che/i), {
    target: { value: "Réviser Redux" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Ajouter" }));

  expect(screen.getByText("Réviser Redux")).toBeInTheDocument();
});

test("le formulaire NameForm soumet le nom avec preventDefault", () => {
  renderAt("/fiche/exemple-nameform");

  const champsNom = screen.getAllByLabelText(/Nom :/i);
  expect(champsNom.length).toBeGreaterThanOrEqual(2);

  fireEvent.change(champsNom[0], { target: { value: "Amine" } });
  fireEvent.click(screen.getAllByRole("button", { name: "Envoyer" })[0]);

  expect(
    screen.getByText("Le nom a été soumis : Amine")
  ).toBeInTheDocument();
});

test("le textarea est vide au focus et suit la saisie", () => {
  renderAt("/fiche/exemple-textarea");

  const zones = screen.getAllByRole("textbox");
  expect(zones[0]).toHaveValue("Tapez votre texte ici");

  fireEvent.focus(zones[0]);
  expect(zones[0]).toHaveValue("");

  fireEvent.change(zones[0], { target: { value: "Bonjour" } });
  expect(zones[0]).toHaveValue("Bonjour");
});

test("la liste de selection affiche l'option choisie", () => {
  renderAt("/fiche/exemple-select");

  const selects = screen.getAllByRole("combobox");
  fireEvent.change(selects[0], { target: { value: "2" } });

  expect(screen.getAllByText("Element2").length).toBeGreaterThan(0);
});

test("les boutons radio sont exclusifs", () => {
  renderAt("/fiche/exemple-radio");

  expect(screen.getByLabelText("radio3")).toBeChecked();

  fireEvent.click(screen.getByLabelText("radio4"));

  expect(screen.getByLabelText("radio4")).toBeChecked();
  expect(screen.getByLabelText("radio3")).not.toBeChecked();
});

test("les cases a cocher peuvent etre combinees", () => {
  renderAt("/fiche/exemple-checkbox");

  expect(screen.getByLabelText("check2")).toBeChecked();

  fireEvent.click(screen.getByLabelText("check1"));

  expect(screen.getByLabelText("check1")).toBeChecked();
  expect(screen.getByText(/2, 3, 1/)).toBeInTheDocument();
});

test("l'exemple fetch fonctionnel charge les utilisateurs", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: async () => [
        {
          id: 1,
          name: "Leanne",
          username: "Bret",
          email: "Sincere@april.biz",
          address: { city: "Gwenborough", street: "Kulas Light" },
        },
      ],
    })
  );

  renderAt("/fiche/exemple-fetch-fonctionnel");

  expect(await screen.findByText(/Leanne Bret/)).toBeInTheDocument();
  expect(
    screen.getByText(/nombre d'utilisateurs: 1/i)
  ).toBeInTheDocument();
});

test("l'exemple Axios fonctionnel charge les utilisateurs", async () => {
  jest.spyOn(axios, "get").mockResolvedValue({
    data: [
      {
        id: 1,
        name: "Leanne",
        username: "Bret",
        email: "Sincere@april.biz",
        address: { city: "Gwenborough", street: "Kulas Light" },
      },
    ],
  });

  renderAt("/fiche/exemple-axios-fonctionnel");

  expect(await screen.findByText(/Leanne Bret/)).toBeInTheDocument();
  expect(axios.get).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users"
  );
});

test("la regle des pages filtre la liste par chapitre puis se reinitialise", () => {
  renderAt("/");

  const segments = screen.getAllByRole("button", { name: /^Chapitre \d+,/ });
  expect(segments).toHaveLength(13);

  fireEvent.click(screen.getByRole("button", { name: /^Chapitre 9,/ }));
  expect(screen.getByRole("button", { name: /^Chapitre 9,/ })).toHaveAttribute(
    "aria-pressed",
    "true"
  );
  expect(screen.getByRole("status")).toHaveTextContent(/chapitre 9 \(p\. 220 - 224\)/i);
  expect(
    screen.queryByRole("heading", { name: /concepts de base du web front-end/i })
  ).not.toBeInTheDocument();

  // Un second clic sur le meme segment retire le filtre.
  fireEvent.click(screen.getByRole("button", { name: /^Chapitre 9,/ }));
  expect(
    screen.getByRole("heading", { name: /concepts de base du web front-end/i })
  ).toBeInTheDocument();
});

test("une fiche affiche sa position dans le catalogue et dans le cours", () => {
  renderAt("/fiche/ex02-compteur");

  const index = allItems.findIndex((item) => item.id === "ex02-compteur");
  expect(
    screen.getByText(`Fiche ${index + 1} / ${allItems.length}`)
  ).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /page 235 sur 322, chapitre 10/i })).toBeInTheDocument();
});

test("les fleches du clavier changent d'onglet code / resultat", () => {
  renderAt("/fiche/ex02-compteur");

  const split = screen.getByRole("tab", { name: "Côte à côte" });
  expect(split).toHaveAttribute("aria-selected", "true");

  fireEvent.keyDown(split, { key: "ArrowRight" });
  expect(screen.getByRole("tab", { name: "Voir le code" })).toHaveAttribute(
    "aria-selected",
    "true"
  );

  fireEvent.keyDown(screen.getByRole("tab", { name: "Voir le code" }), { key: "ArrowRight" });
  expect(screen.getByRole("tab", { name: /Voir le r.sultat/i })).toHaveAttribute(
    "aria-selected",
    "true"
  );
});

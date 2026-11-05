# OFPPT React — Exercices M204 (pages 4 à 322)

Projet d'étude React construit à partir du cours OFPPT M204 **« Développer en Front end »**.
Il couvre **les pages 4 à 322** du PDF source, dans leur ordre d'origine : des
fondamentaux du web et de JavaScript jusqu'à Redux Toolkit.

Chaque exercice, exemple, atelier, quiz et leçon possède sa propre fiche. Un tableau de
bord permet de rechercher par titre, thème ou numéro de page, de filtrer par chapitre et
d'ouvrir chaque fiche avec sa démonstration exécutable, son code du cours et ses
références de pages.

## Chiffres clés

| Élément | Nombre |
| --- | --- |
| Chapitres | 13 |
| Exercices | 7 |
| Atelier | 1 |
| Quiz | 1 |
| Exemples | 50 |
| Leçons | 56 |
| **Fiches au total** | **115** |
| Pages du PDF couvertes | 4 à 322 |

## Démarrage

Prérequis : **Node.js 18 ou plus récent** (testé avec Node.js 24.17.0) et npm.

```powershell
cd C:\Users\admin\Documents\PrepReact-Exercises
npm install
npm start
```

L'application s'ouvre sur <http://localhost:3000>.

### Démarrage rapide (Windows)

Double-cliquer sur **`START.bat`** dans la racine du projet :

1. Vérifie que Node.js est installé (sinon affiche un message et s'arrête).
2. Vérifie que le dossier `node_modules` existe (sinon lance `npm install`).
3. Démarre le serveur de développement (`npx react-scripts start`).
4. Garde la fenêtre ouverte pour voir les erreurs éventuelles.

Le serveur démarre alors sur <http://localhost:3000>.

### Autres commandes :

```powershell
npm test                  # 32 tests de vérification (Jest / Testing Library)
npm run build             # build de production dans build/
```

## Scripts npm disponibles

| Script | Commande | Description |
| --- | --- | --- |
| Démarrage | `npm start` | Lance le serveur de développement (`react-scripts start`) sur http://localhost:3000 |
| Build | `npm run build` | Compile l'application pour la production dans le dossier `build/` |
| Tests | `npm test` | Lance la suite Jest / Testing Library (`react-scripts test --watchAll=false`) |
| Eject | `npm run eject` | Décharge la configuration Create React App (action irréversible) |

## Dépannage

- **`npm start` échoue avec une erreur de port** : un autre processus écoute déjà le port 3000. Modifiez le port via une variable `PORT` ou arrêtez l'autre processus.
- **`npm test` échoue sur `window.scrollTo`** : corrigé via `src/setupTests.js` (jsdom ne fournit pas `window.scrollTo`).
- **Les fiches ne s'ouvrent pas après un rafraîchissement** : le serveur de développement utilise le fallback `historyApiFallback` ; en production, assurez-vous d'avoir un serveur qui sert `index.html` pour les routes `/fiche/*` (ex. `npx serve -s build`).

## Contenu par chapitre

| Chapitre | Titre | Pages | Fiches |
| --- | --- | --- | --- |
| 1 | Comprendre les concepts de base du web front-end | 4–16 | 5 leçons |
| 2 | Les aspects avancés de JavaScript | 17–42 | 18 exemples + 5 leçons |
| 3 | Créer des applications web monopage (SPA) | 43–51 | 5 leçons |
| 4 | Comprendre les concepts de React JS | 53–68 | 4 leçons |
| 5 | Comprendre le JSX et les composants React | 69–121 | 1 exercice + 5 exemples + 7 leçons |
| 6 | Manipuler les propriétés et gérer les états | 122–148 | 4 exemples + 3 leçons |
| 7 | Gérer les événements et personnaliser les composants | 150–181 | 2 exercices + 5 exemples + 6 leçons |
| 8 | Créer des formulaires et consommer des API | 182–219 | 8 exemples + 6 leçons |
| 9 | Créer des formulaires et consommer des API (suite) | 220–224 | 1 leçon + exercice 1 |
| 10 | Incorporer des données avec les hooks | 225–253 | 4 leçons, 5 exemples, exercices 2 et 3, quiz |
| 11 | Mettre en place un système de routage | 254–268 | 4 leçons + exemple de routage |
| 12 | Introduire Redux et optimiser la gestion de l'état | 269–293 | 3 leçons + atelier Redux |
| 13 | Déployer et optimiser avec Redux | 294–322 | 3 leçons, 4 exemples, exercice 4 |

Le détail fiche par fiche, avec les pages et les fichiers, se trouve dans
[`docs/PDF-INDEX.md`](docs/PDF-INDEX.md).

## Fonctionnement de l'application

- **Tableau de bord** (`/`) : statistiques, chapitres et 115 fiches avec leur type
  (Exercice, Atelier, Quiz, Exemple, Cours) et leurs pages PDF.
- **Recherche** : par titre, description, thème, objectif ou page. Exemples :
  `JSX`, `destructuring`, `useEffect`, `Redux`, `235`. La touche `/` place le focus dans
  le champ.
- **Règle des pages** : 13 segments proportionnels au nombre de pages du PDF (4 à 322).
  Cliquer un segment filtre la liste sur ce chapitre, un second clic retire le filtre.
  Sur chaque fiche, la même règle sert de repère de position.
- **Fiche** (`/fiche/:id`) : lien « Retour à l'accueil », position « Fiche n / 115 »,
  rappel du chapitre et des pages, objectifs, démonstration, code du cours, note de
  correction éventuelle.
- **Espace code / résultat** : sur chaque fiche de démonstration, les onglets
  « Voir le code », « Voir le résultat » et « Côte à côte » (vue par défaut sur
  ordinateur) affichent le code du PDF et la démonstration exécutable ; les flèches du
  clavier changent d'onglet. Les deux panneaux restent montés : changer d'onglet ne
  réinitialise pas l'état de la démonstration. Sous 900 px de large, les panneaux sont
  empilés, le résultat avant le code. Une mention « Adaptation pour la
  démonstration » signale tout ajout par rapport au code du PDF.
- **Navigation précédent / suivant** : en bas de chaque fiche, dans l'ordre exact du
  catalogue.
- **Exemple de routage** : routes imbriquées réelles sous
  `/fiche/exemple-routing`, `/fiche/exemple-routing/about` et
  `/fiche/exemple-routing/blog`.

## Structure du projet

```text
PrepReact-Exercises/
├── public/
│   └── index.html
├── src/
│   ├── components/       # Dashboard, ItemPage, PageHeader, PageRuler, LessonView, CodeBlock, DemoWorkspace, NotFound
│   ├── data/
│   │   ├── catalog.js        # catalogue fusionné : chapitres 9 à 13 + fusion des chapitres 1 à 8
│   │   ├── catalog-pre.js    # chapitres 1 à 8 (pages 4 à 219)
│   │   ├── snippets.js       # extraits de code des pages 220 à 322
│   │   └── snippets-pre.js   # extraits de code des pages 4 à 219
│   ├── examples/         # exemples et démonstrations (dont JsAvanceDemos, JsxDemos,
│   │                     # PropsStateDemos, EvenementsDemos, FormulairesDemos)
│   ├── exercises/        # 4 exercices + atelier + quiz des pages 220 à 322
│   ├── features/         # slices Redux Toolkit (compteur, users, usersAsync)
│   ├── hooks/            # usePosts (Hook personnalisé)
│   ├── redux/            # Redux "classique" (atelier, posts + thunk)
│   ├── styles/global.css
│   ├── App.jsx
│   ├── App.test.js       # 32 tests (Jest / Testing Library)
│   ├── registry.js       # id de fiche -> composant (60 composants dédiés ; les autres leçons utilisent LessonView)
│   └── index.js
├── docs/PDF-INDEX.md, docs/DESIGN.md
├── package.json
├── README.md
└── START.bat
```

## Bibliothèques utilisées

- **React 18.3.1** et **React DOM** : composants fonctionnels, composants classe et Hooks.
- **react-router-dom 6.26.2** : chapitre 11 (routage).
- **Redux 4.2.1**, **react-redux 8.1.3**, **redux-thunk 2.4.2** : chapitres 12 et 13.
- **@reduxjs/toolkit 1.9.7** : chapitre 13 (createSlice, configureStore,
  createAsyncThunk).
- **axios 1.7.7** : consommation d'API dans les chapitres 8, 9 et 13.
- **@fontsource-variable** (Fraunces, Instrument Sans, JetBrains Mono) : polices
  auto-hébergées, sans requête vers un CDN externe ; seuls les sous-ensembles latins
  nécessaires sont téléchargés par le navigateur.
- **react-scripts 5.0.1** (Create React App) : démarrage, build et tests. Vite n'est pas
  utilisé, conformément à la demande.

> Les chapitres 12 et 13 enseignent explicitement Redux, React-Redux, Redux Thunk,
> Redux Toolkit et Axios. Ces bibliothèques sont installées et utilisées **uniquement
> dans les fiches concernées** ; les autres chapitres restent en React pur.

## Exercices, solutions et reconstitutions

- **Exercice JSX (p. 119–121)** : les solutions du PDF sont des images. Le code affiché
  est une **reconstitution fidèle à l'énoncé**, signalée dans la fiche. Les deux versions
  (fonction et classe) sont exécutables.
- **Exercices 1, 2 et 3 des pages 17 à 42** (tableau `nums`, `nomAgés`, ajout dans
  l'inscription) : le PDF ne donne pas de corrigé imprimé. La démonstration calcule le
  résultat à partir de l'énoncé et l'indique clairement.
- **Exercice d'application 1 (inscription, p. 154–155)** et **exercice d'application 2
  (validateur, p. 156–157)** : les solutions officielles sont reproduites.
- **Exercices 1, 2 et 3 (p. 221–245)** : les solutions officielles sont reproduites et
  exécutables.
- **Exercice 4 (p. 308)** : voir ci-dessous, aucune solution n'est inventée.

## Exercice 4 : consigne sans solution

Le PDF ne fournit **aucune solution** pour l'exercice 4 (page 308 : afficher la liste des
users avec Redux). La fiche correspondante conserve donc la tâche d'apprentissage :

- la consigne et les objectifs ;
- les étapes conseillées ;
- un point de départ avec des `TODO` à compléter ;
- une checklist d'auto-évaluation ;
- un lien vers l'exemple des posts (pages 305–308) qui sert de modèle.

Aucun code de solution complet et aucun onglet de démonstration ne sont donnés pour cet
exercice.

## Corrections et notes pédagogiques

Les erreurs évidentes du PDF sont corrigées et signalées dans les fiches :

1. **Exercice 1 (p. 223)** — la condition `utilisateur && address` est toujours vraie
   lorsque l'API renvoie `{}` pour un id inexistant. La démonstration teste `user.id`
   pour afficher réellement « svp choisir un id valide !!!! ».
2. **CRUD Redux Toolkit (p. 316)** — l'id du nouvel utilisateur est calculé avec
   `usersList[usersList.length - 1].id`, ce qui crée un doublon. La démonstration utilise
   `Math.max(...ids) + 1`.
3. **CRUD Redux Toolkit (p. 317)** — un seul état `nom` est partagé par toutes les lignes.
   Chaque ligne possède ici son propre état de modification.
4. **createAsyncThunk (p. 319)** — `state.error = action.error` stocke un objet, que React
   ne peut pas afficher. La démonstration utilise `action.error.message`.
5. **Quiz useEffect (p. 245–246)** — le PDF ne donne pas le corrigé ; les réponses
   attendues sont expliquées après chaque question.
6. **Exemple de routage (p. 262–263)** — les liens de l'exemple sont préfixés par
   `/fiche/exemple-routing` pour rester à l'intérieur de la fiche.

## Réseau et API

Les démonstrations `fetch` et `axios` appellent l'API publique
`https://jsonplaceholder.typicode.com`. Une connexion Internet est nécessaire pour les
voir afficher des données. Les fiches concernées gèrent les états de chargement et
d'erreur.

## Vérifications réellement effectuées

- `npm test` : **1 suite, 29 tests, 29 réussis**. Les tests couvrent le catalogue
  (13 chapitres, 115 fiches, répartition par type), le tableau de bord, la recherche,
  les onglets et la persistance d'état, puis les démonstrations interactives :
  liste JSX et couleur, exercice d'âge, inscription en majuscules, validateur,
  `props.children`, Message et `setState`, communication entre composants, cycle de vie,
  affichage conditionnel, listes et clés, NameForm, textarea, select, radio, checkbox,
  fetch et Axios users, salutation et titre du document, fetch posts (données et erreur),
  `usePosts`, score du quiz, absence de solution pour l'exercice 4, et routes imbriquées.
- `npm run build` : **compilation réussie** (« Compiled successfully »), sans
  avertissement ESLint. Taille du build : **142,71 kB** de JavaScript et **6,05 kB** de
  CSS (gzip).
- `npm start` : serveur de développement lancé sur le port 3000. Les **115 fiches** ont
  été ouvertes une par une dans le navigateur intégré : chaque route affiche son titre,
  ses pages PDF et son contenu, sans 404 ni erreur de rendu. Les fiches d'exemple et
  d'exercice affichent bien leur espace code / résultat ; les fiches de cours s'affichent
  sans démonstration, comme prévu.
- **Tableau de bord** : 13 chapitres et 115 cartes-liens ; statistiques affichées
  (7 exercices, 1 atelier, 1 quiz, 50 exemples, 56 leçons, 115 fiches) ; plage
  « pages 4 à 322 ». Aucune erreur console au chargement.
- **Recherche / filtres** : la recherche par thème et le filtre par chapitre sont
  couverts par les tests.
- **Navigation** : bouton « Retour à l'accueil », liens précédent / suivant et route
  `/fiche/inexistant` (page 404 « Fiche introuvable »).
- **Routage imbriqué** : `/fiche/exemple-routing`,
  `/fiche/exemple-routing/about` et `/fiche/exemple-routing/blog` affichent le bon
  contenu ; les liens Home / About / Blog restent préfixés par la fiche.
- **Espace code / résultat** : vue « Côte à côte » par défaut sur ordinateur ; sous
  900 px de large, les panneaux passent en une seule colonne. Le passage d'un onglet à
  l'autre conserve l'état de la démonstration (testé sur le compteur).

## Source

PDF original : `G:\React\c12-Développer en Front end M204 (3).pdf`, 322 pages.
Les pages **4 à 322** sont reprises dans ce projet ; les pages 1 à 3 sont la couverture
et le sommaire.

Le projet est fourni à des fins pédagogiques ; les contenus du cours restent la
propriété de l'OFPPT.

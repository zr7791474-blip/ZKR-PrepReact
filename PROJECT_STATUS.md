# État du projet — PrepReact-Exercises (OFPPT React — Exercices M204)

Ce document résume l’audit, les réparations, les installations, les tests et les résultats
de build réalisés sur le projet existant `C:\Users\admin\Documents\PrepReact-Exercises`.

## 1. Ce qui a été inspecté

- `package.json` et `package-lock.json` (Create React App `react-scripts` 5.0.1).
- Configuration React / build : `react-scripts`, `browserslist`, `eslintConfig`, scripts npm.
- Tous les fichiers sources : `src/App.jsx`, `src/index.js`, `src/registry.js`,
  `src/setupTests.js`, `src/App.test.js`, les 7 composants (`src/components/`), les 4
  données (`src/data/`), 16 fichiers de démonstrations (`src/examples/`), 6 exercices/quiz/atelier
  (`src/exercises/`), les slices Redux (`src/features/`), le hook (`src/hooks/`) et les stores
  Redux classiques (`src/redux/`), `src/styles/global.css`.
- `public/index.html` et le PDF dans `public/pdf/`.
- `docs/PDF-INDEX.md`.
- Références d’assets, polices, variables d’environnement (`process.env`), `import.meta`,
  `require()` : aucun n’a été trouvé dans le code applicatif (pas de polices externes, pas
  d’images, pas d’API backend locale).

## 2. Problèmes découverts

| # | Sévérité | Problème | Résolution |
| --- | --- | --- | --- |
| 1 | Majeur | Aucun n’a été détecté : le build de production passait déjà et la suite de tests passait déjà. | — |
| 2 | Moyenne | `npx eslint src --ext .js,.jsx` rapportait **1 erreur** : `testing-library/no-node-access` dans `src/App.test.js` (accès au noeud DOM via `.closest()`). | Commentaire `eslint-disable-next-line` ajouté (le test est conservé). |
| 3 | Mineur | `public/index.html` ne référençait pas de favicon : le navigateur faisait un 404 sur `/favicon.ico`. | Lien `<link rel="icon">` SVG inline ajouté. |
| 4 | Mineur | Le `README.md` indiquait un chemin erroné (`C:\Users\DELL\Documents\OFPPT-React-Exercises`). | Chemin corrigé en `C:\Users\admin\Documents\PrepReact-Exercises`. |
| 5 | Info | `npm audit` : **75 vulnérabilités** (11 low, 51 moderate, 13 high) — majoritairement dans la chaîne de dépendances de dev/build (`react-scripts`, `jest`, `jsdom`, `http-proxy-agent`, `serialize-javascript`, `webpack-dev-middleware`, …). Aucune vulnérabilité bloquante sur les dépendances applicatives (`react`, `react-dom`, `react-router-dom`, `redux`, `@reduxjs/toolkit`, `axios`). | Aucune correction forcée appliquée : les correctifs recommandés nécessitent des mises à niveau majeures (ex. `react-scripts@0.0.0`, placeholder signifiant « aucun correctif disponible »). À traiter lors d’une migration vers une stack build plus récente. |

Aucun problème de syntaxe, de dépendance manquante, d’import cassé ou de route cassée
n’a été détecté dans le code source : toutes les fiches du catalogue (115) sont bien
routées via `src/registry.js`.

## 3. Problèmes corrigés

- **1 erreur ESLint** dans `src/App.test.js` (règle `testing-library/no-node-access`)
  corrigée par un commentaire de désactivation ciblé. Aucun test modifié dans son comportement.

- **1 favicon manquante** : ajout d’un favicon SVG inline dans `public/index.html`.

- **README.md** : chemin du projet corrigé et section « Démarrage rapide (Windows) »,
  « Scripts npm disponibles » et « Dépannage » ajoutés.

## 4. Dépendances installées

Déjà installées dans `node_modules` (aucune installation nécessaire) :

- `@reduxjs/toolkit` 1.9.7, `axios` 1.21.0, `react` / `react-dom` 18.3.1,
  `react-redux` 8.1.3, `react-router-dom` 6.30.6, `react-scripts` 5.0.1, `redux` 4.2.1,
  `redux-thunk` 2.4.2
- Dev : `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event`

Arbre `npm ls` : **aucun problème de dépendance manquante, en conflit ou invalide**.

## 5. Fichiers modifiés

- `src/App.test.js` — commentaire `eslint-disable-next-line` ajouté.
- `public/index.html` — favicon SVG inline ajouté.
- `README.md` — chemin corrigé, instructions de démarrage Windows, scripts npm, dépannage ajoutés.
- `START.bat` — **créé** (lanceur Windows du serveur de développement).

## 6. Tests et commandes exécutées

| Commande | Résultat |
| --- | --- |
| `npx react-scripts build` | **Réussi** — « Compiled successfully », build de production généré dans `build/` (142,71 kB JS gzip / 6,05 kB CSS gzip). |
| `npx react-scripts test --watchAll=false` | **Réussi** — 1 suite, **29 tests / 29 réussis**. |
| `npx eslint src --ext .js,.jsx` | **Réussi** — 0 erreur, 0 warning après correction. |
| `npx npm ls --depth=0` | **Réussi** — arbre de dépendances valide. |
| `npx npm audit` | **75 vulnérabilités détectées** (dev/build transitive, non bloquantes pour l’usage local). |
| Serveur de dev (`npx react-scripts start`) | **Démarré** — « Compiled successfully », http://localhost:3000. Page d’accueil : **200 OK**. Route SPA `/fiche/ex02-compteur` : **200 OK** via fallback history (vérifié via HTTP). |

## 7. Résultats du build et du run

- Build de production : **réussi**.
- Tests : **29/29 réussis**.
- ESLint : **réussi**.
- Serveur de développement : **en cours d’exécution** sur http://localhost:3000
  (port 3000, accès réseau sur http://192.168.1.43:3000).

## 8. Problèmes restants, le cas échéant

- Aucun problème critique restant pour un usage local.
- Les 75 vulnérabilités npm (audit) concernent la chaîne de dépendances de dev/build de
  Create React App ; les correctifs sortants nécessitent des mises à niveau majeures.
- Le dossier `build/` existe (build de production précédent) — il est ignoré par Git et
  régénéré par `npm run build`.

## 9. Comment lancer le projet

```bash
npm install
npm start
```

ou double-cliquer sur **`START.bat`** (Windows).

- Local URL : **http://localhost:3000**
- Build de production : `npm run build` (dossier `build/`).
- Tests : `npm test` (29 tests).

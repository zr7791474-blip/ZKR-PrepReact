/**
 * Catalogue des pages 4 a 219 du PDF M204.
 * Les chapitres suivent l'ordre exact du support et precedent les chapitres
 * 220-322 definis dans catalog.js.
 */

export const preChapters = [
  {
    id: "pre-ch1",
    number: 1,
    title: "Comprendre les concepts de base du web front-end",
    part: "Partie 1 - Chapitre 1",
    pages: "4 - 16",
    summary:
      "Sites web statiques, difference front-end / back-end, frameworks front-end, React et DOM virtuel.",
    items: [
      {
        id: "lesson-web-statique",
        type: "lesson",
        title: "Fondamentaux des sites web statiques",
        description:
          "Un site statique est une serie de fichiers HTML, CSS et JavaScript ; chaque page HTML est un fichier physique distinct.",
        pages: "6",
        pageList: [6],
        topics: ["site statique", "HTML", "CSS", "JavaScript", "web"],
        objectives: [
          "Definir un site web statique.",
          "Comprendre qu'une page correspond a un fichier HTML separe.",
          "Citer les avantages (rapidite, simplicite) et inconvenients (contenu fige, peu d'interactivite).",
        ],
      },
      {
        id: "lesson-front-back",
        type: "lesson",
        title: "Difference entre front-end et back-end",
        description:
          "Le front-end construit l'experience utilisateur avec HTML, CSS et JavaScript ; le back-end fournit donnees, logique serveur et base de donnees.",
        pages: "8",
        pageList: [8],
        topics: ["front-end", "back-end", "client", "serveur", "base de donnees"],
        objectives: [
          "Identifier les technologies du front-end.",
          "Expliquer le role du serveur et de la base de donnees.",
          "Suivre le parcours d'une commande entre le client et le serveur.",
        ],
      },
      {
        id: "lesson-frameworks",
        type: "lesson",
        title: "Presentation des frameworks front-end",
        description:
          "Un framework est une boite a outils couplee a une bibliotheque : il fournit une architecture et des fonctionnalites courantes.",
        pages: "10 - 11",
        pageList: [10, 11],
        topics: ["framework", "bibliotheque", "architecture", "maintenance"],
        objectives: [
          "Definir un framework et distinguer framework back-end, applicatif et de presentation.",
          "Citer des exemples : Node JS, Laravel, Angular, React, Vue JS, Bootstrap.",
          "Expliquer pourquoi un framework accelere le developpement et facilite la maintenance.",
        ],
      },
      {
        id: "lesson-react-framework",
        type: "lesson",
        title: "React, bibliotheque front-end et DOM virtuel",
        description:
          "React est une bibliotheque JavaScript creee par Facebook pour construire des interfaces a base de composants reutilisables et mettre a jour le DOM efficacement.",
        pages: "12 - 14",
        pageList: [12, 13, 14],
        topics: ["React", "bibliotheque", "composant", "DOM virtuel", "VDOM", "reconciliation"],
        objectives: [
          "Expliquer pourquoi React est qualifie de bibliotheque plutot que de framework.",
          "Comprendre le DOM virtuel et la reconciliation.",
          "Citer les avantages de React et les cas ou il est utilise (SPA, interfaces riches).",
          "Rappeler que React exige une bonne maitrise de JavaScript.",
        ],
      },
      {
        id: "lesson-angular-vue",
        type: "lesson",
        title: "Angular et Vue JS",
        description:
          "Angular est une plate-forme TypeScript maintenue par Google ; Vue JS est un framework JavaScript declaratif et base sur des composants.",
        pages: "15",
        pageList: [15],
        topics: ["Angular", "Vue JS", "TypeScript", "SPA", "framework"],
        objectives: [
          "Situer Angular et Vue JS dans l'ecosysteme front-end.",
          "Distinguer Angular (TypeScript, plate-forme complete) de Vue JS (approche progressive).",
          "Faire le lien avec les avantages de Vue JS presentes page 17.",
        ],
      },
    ],
  },
  {
    id: "pre-ch2",
    number: 2,
    title: "Les aspects avances de JavaScript",
    part: "Partie 1 - Chapitre 1",
    pages: "17 - 42",
    summary:
      "Classes, modules, template literals, operateur ternaire, destructuration, map/filter/find/reduce, recursivite, fermetures, fonctions flechees et programmation fonctionnelle.",
    items: [
      {
        id: "lesson-classes-js",
        type: "lesson",
        title: "Les classes d'objets en ES6",
        description:
          "Une classe est un modele pour creer des objets. ES6 introduit class, constructor, les methodes, l'heritage avec extends et super.",
        pages: "17 - 20",
        pageList: [17, 18, 19, 20],
        topics: ["class", "constructor", "extends", "super", "heritage", "ES6"],
        objectives: [
          "Creer une classe avec class et instancier avec new.",
          "Memoriser les attributs dans this depuis le constructeur.",
          "Definir une methode info().",
          "Faire heriter une classe Stagiaire de Etudiant avec extends et super.",
        ],
        codeKey: "classesJs",
      },
      {
        id: "exemple-classes-js",
        type: "example",
        title: "Exemple - Classes Etudiant et Stagiaire",
        description:
          "Creation d'objets Etudiant puis d'objets Stagiaire heritant de Etudiant, avec appel de la methode info().",
        pages: "18 - 20",
        pageList: [18, 19, 20],
        topics: ["class", "heritage", "methode", "console.log"],
      },
      {
        id: "lesson-modules-js",
        type: "lesson",
        title: "Les modules ES6 : export et import",
        description:
          "Un module est un fichier JavaScript qui exporte des valeurs, classes ou fonctions. export default est unique, export peut etre multiple.",
        pages: "21 - 23",
        pageList: [21, 22, 23],
        topics: ["module", "export default", "export", "import", "alias", "type=module"],
        objectives: [
          "Distinguer export default et export nomme.",
          "Importer un export default sans accolades et les exports nommes avec accolades.",
          "Utiliser un alias avec as.",
          "Ajouter type=\"module\" a la balise script.",
        ],
        codeKey: "modulesJs",
      },
      {
        id: "exemple-template-literals",
        type: "example",
        title: "Exemple - Template literals",
        description:
          "Comparaison entre la concatenation et les gabarits de chaines (salutation et nom).",
        pages: "23",
        pageList: [23],
        topics: ["template literal", "concatenation", "chaine de caracteres"],
      },
      {
        id: "exemple-ternaire",
        type: "example",
        title: "Exemple - Operateur conditionnel ternaire",
        description:
          "La remise vaut 0.2 si isMember est vrai, sinon 0.1. Le ternaire remplace une instruction if...else.",
        pages: "23 - 24",
        pageList: [23, 24],
        topics: ["ternaire", "condition", "remise", "JSX"],
      },
      {
        id: "exemple-ternaire-null",
        type: "example",
        title: "Exemple - Gerer une valeur nulle avec le ternaire",
        description:
          "Si nom est vide, la salutation vaut « inconnu » ; sinon elle vaut « salut » suivi du nom.",
        pages: "24",
        pageList: [24],
        topics: ["ternaire", "valeur nulle", "condition", "salutation"],
      },
      {
        id: "exemple-destructuring",
        type: "example",
        title: "Exemple - Object destructing",
        description:
          "Extraction de nom, age, rue et ville depuis un objet imbrique, avec la syntaxe courte et avec une fonction.",
        pages: "25",
        pageList: [25],
        topics: ["destructuring", "objet", "ES6", "props"],
      },
      {
        id: "exemple-map",
        type: "example",
        title: "Exemple - La methode map",
        description:
          "map retourne un nouveau tableau de meme taille. On cree le tableau des noms, puis on multiplie nums par 3 (exercice 1).",
        pages: "26",
        pageList: [26],
        topics: ["map", "tableau", "transformation", "exercice"],
        note:
          "L'exercice 1 (nums=[2,5,8,7,3] multiplie par 3) ne possede pas de solution imprimee : la demonstration calcule le resultat attendu [6,15,24,21,9] a partir de l'enonce.",
      },
      {
        id: "exemple-filter",
        type: "example",
        title: "Exemple - La methode filter",
        description:
          "filter cree une copie partielle du tableau en conservant les elements qui remplissent la condition.",
        pages: "27",
        pageList: [27],
        topics: ["filter", "tableau", "condition", "membres"],
        note:
          "L'exercice 2 demande nomAges avec map et filter ; aucune solution n'est imprimee. La demonstration applique les deux methodes a l'enonce.",
      },
      {
        id: "exemple-find",
        type: "example",
        title: "Exemple - La methode find",
        description:
          "find renvoie le premier element qui satisfait la fonction de test, sinon undefined.",
        pages: "28",
        pageList: [28],
        topics: ["find", "tableau", "recherche"],
      },
      {
        id: "exemple-reduce",
        type: "example",
        title: "Exemple - reduce et destructuration d'un tableau",
        description:
          "reduce calcule le total des montants ; la destructuration [a, b, ...rest] extrait des elements et le spread copie un tableau.",
        pages: "29",
        pageList: [29],
        topics: ["reduce", "total", "destructuring", "spread", "tableau"],
      },
      {
        id: "lesson-programmation-fonctionnelle",
        type: "lesson",
        title: "La programmation fonctionnelle",
        description:
          "Paradigme fonde sur des expressions et des fonctions sans mutation d'etat ni de donnees, pour un code plus clair et plus resistant aux bogues.",
        pages: "30 - 32",
        pageList: [30, 31, 32],
        topics: ["programmation fonctionnelle", "immutabilite", "fonction pure", "paradigme"],
        objectives: [
          "Definir la programmation fonctionnelle.",
          "Comprendre l'absence de mutation d'etat.",
          "Identifier les caracteristiques du langage JavaScript utilisees pour la FP.",
        ],
      },
      {
        id: "exemple-swap",
        type: "example",
        title: "Exemple - Permuter deux variables",
        description:
          "La permutation [x,y]=[y,x] echange les valeurs de x et y sans variable temporaire.",
        pages: "30",
        pageList: [30],
        topics: ["destructuring", "permutation", "tableau"],
      },
      {
        id: "exemple-recursivite",
        type: "example",
        title: "Exemple - La recursivite et la factorielle",
        description:
          "Une fonction recursive s'appelle elle-meme ; fact(n) retourne n * fact(n-1) jusqu'a fact(0)=1.",
        pages: "33",
        pageList: [33],
        topics: ["recursivite", "factorielle", "fonction"],
      },
      {
        id: "exemple-closure",
        type: "example",
        title: "Exemple - Les fermetures (closures)",
        description:
          "La fonction compteur retourne une fonction qui conserve et incremente une variable privee count.",
        pages: "33 - 34",
        pageList: [33, 34],
        topics: ["closure", "fermeture", "variable privee", "compteur"],
      },
      {
        id: "exemple-horloge",
        type: "example",
        title: "Exemple - Horloge avec fermeture et setInterval",
        description:
          "incrementer(temps) retourne une fonction passee a setInterval ; elle avance les secondes, minutes et heures.",
        pages: "34 - 35",
        pageList: [34, 35],
        topics: ["closure", "setInterval", "horloge", "DOM", "timer"],
      },
      {
        id: "lesson-arrow-fonctions",
        type: "lesson",
        title: "Arrow functions et operateur spread",
        description:
          "Les fonctions flechees sont une ecriture courte des fonctions anonymes ; le spread developpe un tableau en arguments.",
        pages: "36",
        pageList: [36],
        topics: ["arrow function", "spread", "fonction anonyme", "constructeur"],
        objectives: [
          "Ecrire une fonction flechee avec ou sans return implicite.",
          "Savoir qu'une fonction flechee ne peut pas etre utilisee comme constructeur.",
          "Utiliser ... pour passer les elements d'un tableau en arguments.",
        ],
        codeKey: "arrowFonctions",
      },
      {
        id: "lesson-pures-fonctions",
        type: "lesson",
        title: "Les fonctions pures",
        description:
          "Une fonction pure accepte des arguments et retourne une nouvelle valeur sans modifier de variable externe. Une fonction impure mute son environnement.",
        pages: "37",
        pageList: [37],
        topics: ["fonction pure", "fonction impure", "effet de bord", "immutabilite", "React", "Redux"],
        objectives: [
          "Distinguer pureFonction et impureFonction.",
          "Expliquer pourquoi React et Redux favorisent les fonctions pures.",
          "Reconnaitre un effet de bord.",
        ],
        codeKey: "puresFonctions",
      },
      {
        id: "exemple-pure-append",
        type: "example",
        title: "Exemple - Ajouter un element a un Array (pure fonction)",
        description:
          "pureAppend retourne [...myList, value] sans modifier myList. L'exercice 3 demande la meme chose pour les inscriptions.",
        pages: "38",
        pageList: [38],
        topics: ["pure fonction", "spread", "array", "ajout", "exercice"],
        note:
          "L'exercice 3 ne possede pas de solution imprimee. La demonstration ajoute une inscription avec une pure fonction, conformement a l'enonce.",
      },
      {
        id: "exemple-pure-insert",
        type: "example",
        title: "Exemple - Inserer dans un Array",
        description:
          "splice insere ou remplace en place ; pureInject realise la meme insertion sans muter le tableau d'origine.",
        pages: "39",
        pageList: [39],
        topics: ["splice", "insertion", "slice", "pure fonction", "immutabilite"],
      },
      {
        id: "exemple-pure-delete",
        type: "example",
        title: "Exemple - Supprimer un element d'un Array",
        description:
          "pureDeleteFonction(id) retourne un nouveau tableau filtre sans modifier inscriptions.",
        pages: "40",
        pageList: [40],
        topics: ["filter", "suppression", "pure fonction", "inscriptions"],
      },
      {
        id: "exemple-pure-update",
        type: "example",
        title: "Exemple - Modifier un element d'un Array",
        description:
          "pureUpdateNote(id, module, note) remplace la note concernee dans une copie du tableau notes.",
        pages: "41",
        pageList: [41],
        topics: ["filter", "spread", "modification", "notes", "pure fonction"],
      },
      {
        id: "exemple-pure-objet",
        type: "example",
        title: "Exemple - Changer un objet sans le muter",
        description:
          "addAge(33) retourne un nouvel objet avec l'attribut age, d'abord avec le spread puis avec Object.assign.",
        pages: "42",
        pageList: [42],
        topics: ["objet", "spread", "Object.assign", "pure fonction"],
      },
    ],
  },
  {
    id: "pre-ch3",
    number: 3,
    title: "Creer des applications web monopage (SPA)",
    part: "Partie 1 - Chapitre 2",
    pages: "43 - 51",
    summary:
      "Notion de SPA, comparaison SPA / MPA, fonctionnement par Ajax et rendu client, avantages et inconvenients.",
    items: [
      {
        id: "lesson-spa",
        type: "lesson",
        title: "Notion d'application web monopage SPA",
        description:
          "Une SPA est rendue cote client, pilotee par JavaScript et met a jour la page dynamiquement sans rechargement complet.",
        pages: "43 - 44",
        pageList: [43, 44],
        topics: ["SPA", "single page application", "Ajax", "rendu client"],
        objectives: [
          "Definir une Single Page Application.",
          "Expliquer le chargement initial unique et les ressources asynchrones.",
          "Comprendre pourquoi les SPA visent une experience proche du natif.",
        ],
      },
      {
        id: "lesson-spa-mpa",
        type: "lesson",
        title: "SPA vs MPA (Multi-Page Application)",
        description:
          "En MPA, chaque clic declenche une requete HTTP et un rafraichissement complet ; en SPA, Ajax echange les donnees en arriere-plan.",
        pages: "45",
        pageList: [45],
        topics: ["SPA", "MPA", "HTTP", "Ajax", "rafraichissement"],
        objectives: [
          "Comparer le cycle requete/reponse d'une MPA et d'une SPA.",
          "Expliquer le role d'Ajax dans une SPA.",
          "Identifier ce qui est recharge dans chaque architecture.",
        ],
      },
      {
        id: "lesson-spa-fonctionnement",
        type: "lesson",
        title: "Fonctionnement d'une application web de type SPA",
        description:
          "La SPA reduit les appels serveur, effectue un rendu cote client et charge les donnees supplementaires de maniere asynchrone.",
        pages: "46 - 47",
        pageList: [46, 47],
        topics: ["rendu client", "asynchrone", "performance", "interaction"],
        objectives: [
          "Expliquer la difference entre chargement sequentiel et chargement unique.",
          "Comprendre l'optimisation des interactions par rendu client.",
          "Identifier le role des appels asynchrones.",
        ],
      },
      {
        id: "lesson-spa-avantages",
        type: "lesson",
        title: "Avantages d'une application SPA",
        description:
          "Vitesse accrue, meilleure experience utilisateur, mise en cache locale et debogage facilite avec Chrome.",
        pages: "48 - 49",
        pageList: [48, 49],
        topics: ["vitesse", "UX", "cache", "debogage", "Chrome"],
        objectives: [
          "Citer les avantages d'une SPA.",
          "Relier la mise en cache a l'utilisation hors ligne.",
          "Expliquer l'apport des outils de debogage React et Angular.",
        ],
      },
      {
        id: "lesson-spa-inconvenients",
        type: "lesson",
        title: "Inconvenients d'une application SPA",
        description:
          "Gestion de l'historique du navigateur, referencement difficile et vulnerabilite accrue au cross-site scripting.",
        pages: "50 - 51",
        pageList: [50, 51],
        topics: ["historique", "SEO", "securite", "XSS", "inconvenients"],
        objectives: [
          "Expliquer le probleme du bouton retour dans une SPA.",
          "Comprendre la difficulte d'optimisation du referencement.",
          "Identifier le risque de cross-site scripting (XSS).",
        ],
      },
    ],
  },
  {
    id: "pre-ch4",
    number: 4,
    title: "Comprendre les concepts de React JS",
    part: "Partie 2 - Chapitre 1",
    pages: "53 - 68",
    summary:
      "Presentation de React, ecosysteme (npm, ES6, Babel, bundlers), architecture d'une application et explication des fichiers index.html, index.js et App.js.",
    items: [
      {
        id: "lesson-react-presentation",
        type: "lesson",
        title: "Presentation de React",
        description:
          "React est une bibliotheque JavaScript de Facebook pour creer des composants d'affichage reutilisables et mettre a jour la page rapidement via le DOM virtuel.",
        pages: "53 - 55",
        pageList: [53, 54, 55],
        topics: ["React", "composant", "DOM virtuel", "Facebook", "React Native"],
        objectives: [
          "Definir React et son origine.",
          "Expliquer l'interet des composants reutilisables.",
          "Comparer la manipulation directe du DOM et le DOM virtuel.",
          "Citer React Native pour les applications iPhone et Android.",
        ],
      },
      {
        id: "lesson-react-ecosysteme",
        type: "lesson",
        title: "L'ecosysteme React : npm, ECMAScript 6, Babel et bundlers",
        description:
          "npm gere les dependances et les scripts ; ES6 modernise JavaScript ; Babel transpile vers ES5 ; un bundler regroupe les modules en un fichier.",
        pages: "57 - 59",
        pageList: [57, 58, 59],
        topics: ["npm", "ES6", "ES2015", "Babel", "Webpack", "Browserify", "bundler"],
        objectives: [
          "Distinguer npm install, npm start, npm test et npm run dev.",
          "Expliquer le role de Babel et des presets babel-preset-es2015 / babel-preset-react.",
          "Comprendre l'interet d'un bundler comme Webpack ou Browserify.",
        ],
      },
      {
        id: "lesson-react-architecture",
        type: "lesson",
        title: "Architecture d'une application React",
        description:
          "L'application demarre avec un composant racine compose de composants plus petits, majoritairement des composants d'interface, avec des bibliotheques tierces pour le routage ou l'etat.",
        pages: "61 - 63",
        pageList: [61, 62, 63],
        topics: ["architecture", "composant racine", "node_modules", "public", "src", "package.json"],
        objectives: [
          "Decrire la composition d'une application React.",
          "Identifier le role des dossiers node_modules, public et src.",
          "Comprendre le role de public/index.html et de src/index.js.",
          "Lire la structure d'un projet cree avec create-react-app.",
        ],
      },
      {
        id: "lesson-react-code",
        type: "lesson",
        title: "Explication du code : index.html, index.js et App.js",
        description:
          "public/index.html contient la div#root ; src/index.js importe React, ReactDOM, la feuille de style et App, puis rend <App /> dans la racine.",
        pages: "65 - 68",
        pageList: [65, 66, 67, 68],
        topics: ["index.html", "index.js", "App.js", "createRoot", "StrictMode", "reportWebVitals"],
        objectives: [
          "Identifier la div#root dans public/index.html.",
          "Expliquer chaque import de src/index.js.",
          "Comprendre ReactDOM.createRoot(...).render(<App />).",
          "Expliquer export default App et le role de reportWebVitals.",
        ],
        codeKey: "indexJsApp",
      },
    ],
  },
  {
    id: "pre-ch5",
    number: 5,
    title: "Comprendre le JSX et les composants React",
    part: "Partie 2 - Chapitre 2",
    pages: "69 - 121",
    summary:
      "Hello React avec JSX, expressions JavaScript, composants fonction et classe, regles d'ecriture, composants React et exercice d'entrainement.",
    items: [
      {
        id: "lesson-jsx-hello",
        type: "lesson",
        title: "Hello React avec JSX",
        description:
          "JSX est une ecriture des elements React plus simple que React.createElement(). Les balises minuscules sont HTML, les majuscules des composants.",
        pages: "71 - 78",
        pageList: [71, 72, 73, 74, 75, 76, 77, 78],
        topics: ["JSX", "Babel", "ReactDOM.render", "className", "style"],
        objectives: [
          "Ecrire un element JSX et le rendre avec ReactDOM.render.",
          "Distinguer balises HTML (minuscules) et composants (majuscules).",
          "Utiliser className au lieu de class.",
          "Ecrire un style JSX avec un objet et des doubles accolades.",
          "Comprendre que Babel sert au developpement, pas a la production.",
        ],
        codeKey: "jsxHello",
      },
      {
        id: "lesson-jsx-expressions",
        type: "lesson",
        title: "Utilisation d'instructions JavaScript dans le code JSX",
        description:
          "Toute expression JavaScript placee entre accolades est evaluee et son resultat est insere dans le JSX ; map permet de generer les elements d'une liste.",
        pages: "80 - 83",
        pageList: [80, 81, 82, 83],
        topics: ["JSX", "accolades", "map", "key", "expression JavaScript", "ES6"],
        objectives: [
          "Inserer {styleListe} et {elem} dans le JSX.",
          "Generer une liste avec elems.map().",
          "Fournir une cle key pour chaque element.",
          "Comparer function, arrow function et return implicite.",
        ],
        codeKey: "jsxExpressions",
      },
      {
        id: "exemple-jsx-liste",
        type: "example",
        title: "Exemple - Liste JSX, attributs et expressions",
        description:
          "Liste de cinq elements avec id, className, style et generation par map, telle que presentee pages 75 a 83.",
        pages: "75 - 83",
        pageList: [75, 76, 77, 78, 80, 81, 82, 83],
        topics: ["JSX", "liste", "style", "map", "key"],
      },
      {
        id: "lesson-jsx-fonction",
        type: "lesson",
        title: "Creer un element JSX avec une fonction",
        description:
          "Une fonction qui retourne du JSX devient un composant. Les attributs sont transmis dans props, puis destructurables.",
        pages: "85 - 92",
        pageList: [85, 86, 87, 88, 89, 90, 91, 92],
        topics: ["composant fonction", "props", "destructuring", "ListeElements", "Element"],
        objectives: [
          "Creer ListeElements comme fonction retournant du JSX.",
          "Transmettre un tableau par l'attribut elems.",
          "Lire props.elems et props.style.",
          "Destructurer les props et extraire un composant Element.",
          "Comprendre que key n'est pas recu dans les props.",
        ],
        codeKey: "jsxFonction",
      },
      {
        id: "exemple-jsx-composant",
        type: "example",
        title: "Exemple - Composants ListeElements et Element",
        description:
          "Liste generee par un composant fonction, puis decoupage en composants Element avec props et key.",
        pages: "85 - 92",
        pageList: [85, 86, 87, 88, 89, 90, 91, 92],
        topics: ["composant", "props", "Element", "ListeElements", "key"],
      },
      {
        id: "lesson-jsx-classe",
        type: "lesson",
        title: "Creer un element JSX avec une classe",
        description:
          "Une classe derivee de React.Component possede un constructeur avec super(props) et une methode render qui retourne du JSX ; les props sont lues via this.props.",
        pages: "94 - 95",
        pageList: [94, 95],
        topics: ["classe", "React.Component", "constructor", "render", "this.props", "this"],
        objectives: [
          "Declarer class Element extends React.Component.",
          "Appeler super(props) dans le constructeur.",
          "Lire this.props.color et this.props.elem.",
          "Comprendre pourquoi map utilise une arrow function pour conserver this.",
        ],
        codeKey: "jsxClasse",
      },
      {
        id: "exemple-jsx-classe",
        type: "example",
        title: "Exemple - Composants JSX avec classes",
        description:
          "Les composants Element et ListeElements sont reecrits sous forme de classes React.Component.",
        pages: "94 - 95",
        pageList: [94, 95],
        topics: ["classe", "React.Component", "props", "render"],
      },
      {
        id: "lesson-jsx-choix",
        type: "lesson",
        title: "Utiliser une fonction ou une classe ?",
        description:
          "On utilise une fonction sans proprietes ni methodes ; une classe est necessaire lorsque le composant possede un state ou des methodes de traitement.",
        pages: "97",
        pageList: [97],
        topics: ["fonction", "classe", "state", "choix", "composant"],
        objectives: [
          "Comparer composant fonction et composant classe.",
          "Savoir qu'un state impose historiquement une classe.",
          "Choisir la forme adaptee au besoin.",
        ],
      },
      {
        id: "lesson-jsx-regles",
        type: "lesson",
        title: "Regles d'ecriture du code JSX",
        description:
          "Un seul parent, React.Fragment, parentheses autour du JSX multiligne, commentaires {/* */} et expressions conditionnelles entre accolades.",
        pages: "99 - 104",
        pageList: [99, 100, 101, 102, 103, 104],
        topics: ["JSX", "parent unique", "Fragment", "commentaire", "conditionnel"],
        objectives: [
          "Retourner un seul element parent.",
          "Utiliser React.Fragment pour eviter une div superflue.",
          "Encadrer le JSX multiligne de parentheses.",
          "Commenter avec {/* ... */}.",
          "Utiliser une expression ternaire dans le JSX.",
        ],
        codeKey: "jsxRegles",
      },
      {
        id: "exemple-jsx-regles",
        type: "example",
        title: "Exemple - Fragment, commentaires et affichage conditionnel",
        description:
          "Trois elements sans parent visible, deux elements commentes et un premier element masque par hideFirstItem.",
        pages: "100 - 104",
        pageList: [100, 101, 102, 103, 104],
        topics: ["Fragment", "commentaire JSX", "ternaire", "hideFirstItem"],
      },
      {
        id: "lesson-composants-react",
        type: "lesson",
        title: "Les composants React et l'interpretation du JSX",
        description:
          "Chaque application React est un ensemble de composants. Babel transforme <h1>salut Dev</h1> en React.createElement(\"h1\",null,\"salut Dev\").",
        pages: "106 - 115",
        pageList: [106, 107, 108, 109, 110, 111, 112, 113, 114, 115],
        topics: ["composant", "createElement", "Babel", "props.children", "structure de projet"],
        objectives: [
          "Definir un composant comme une fonction ou une classe retournant du JSX.",
          "Expliquer les etapes createRoot puis root.render.",
          "Lire l'objet produit par React.createElement.",
          "Utiliser une variable JavaScript dans le JSX avec des accolades.",
        ],
      },
      {
        id: "exemple-jsx-variables",
        type: "example",
        title: "Exemple - Variables et expressions JavaScript dans JSX",
        description:
          "Affichage d'un nom et calcul d'une remise de 2% lorsque le nombre d'articles depasse 5, sinon 0%.",
        pages: "116 - 118",
        pageList: [116, 117, 118],
        topics: ["JSX", "variable", "expression", "ternaire", "remise"],
        note:
          "Les pages 116 a 118 presentent surtout des captures d'ecran. Le code est reconstruit a partir des enonces visibles (variable nom, exemple 2, remise 2% / 0%) et signale comme tel dans la demonstration.",
      },
      {
        id: "exercice-jsx-age",
        type: "exercise",
        title: "Exercice d'entrainement - Afficher nom, prenom et age",
        description:
          "Afficher le nom, le prenom et l'age dans l'element p du composant App. L'age est calcule avec la fonction getAge(). Reprendre ensuite l'exercice avec une classe.",
        pages: "119 - 121",
        pageList: [119, 120, 121],
        topics: ["JSX", "getAge", "composant fonction", "composant classe", "exercice"],
        objectives: [
          "Afficher des variables dans un paragraphe JSX.",
          "Calculer l'age avec getAge().",
          "Rendre <App/> avec root.render.",
          "Reecrire le composant sous forme de classe.",
        ],
        note:
          "Le PDF fournit deux solutions, une fonction et une classe, mais uniquement sous forme d'images (pages 120 et 121). Le code affiche est une reconstitution fidele a l'enonce et aux captures ; il est identifie comme reconstitution, pas comme copie du texte original.",
      },
    ],
  },
  {
    id: "pre-ch6",
    number: 6,
    title: "Manipuler les proprietes et gerer les etats",
    part: "Partie 2 - Chapitre 3",
    pages: "122 - 148",
    summary:
      "Props avec composant fonction ou classe, passage de valeurs, objets et tableaux, props.children, puis state et setState dans un composant classe.",
    items: [
      {
        id: "lesson-props-fonction",
        type: "lesson",
        title: "Manipulation des props dans un composant fonction",
        description:
          "L'objet props rend un composant dynamique et reutilisable. Il est immuable et peut contenir une valeur, un objet ou une liste.",
        pages: "124 - 133",
        pageList: [124, 125, 126, 127, 128, 129, 130, 131, 132, 133],
        topics: ["props", "composant fonction", "immuable", "destructuring", "tableau"],
        objectives: [
          "Creer Presentation.js et l'utiliser plusieurs fois.",
          "Lire props.nom et props.prenom.",
          "Comprendre que props est immuable.",
          "Passer un objet ou un tableau dans props.",
          "Destructurer props.personne et afficher un tableau de diplomes.",
        ],
        codeKey: "propsFonction",
      },
      {
        id: "exemple-props-presentation",
        type: "example",
        title: "Exemple - Composant Presentation avec props",
        description:
          "Trois personnes affichees par le meme composant, puis passage d'objets, d'un tableau de diplomes et destructuration.",
        pages: "125 - 133",
        pageList: [125, 126, 127, 128, 129, 130, 131, 132, 133],
        topics: ["props", "Presentation", "objet", "tableau", "destructuring"],
      },
      {
        id: "lesson-props-classe",
        type: "lesson",
        title: "Manipulation des props dans un composant classe",
        description:
          "Dans une classe, les props sont accessibles avec this.props. Une instance est creee lors du rendu de <Salutation ... />.",
        pages: "135 - 138",
        pageList: [135, 136, 137, 138],
        topics: ["props", "classe", "this.props", "Salutation", "instance"],
        objectives: [
          "Ecrire Salutation extends React.Component.",
          "Lire this.props.nom et this.props.prenom.",
          "Passer un objet et un tableau a un composant classe.",
          "Comprendre le cycle creation -> render -> JSX.",
        ],
        codeKey: "propsClasse",
      },
      {
        id: "exemple-props-salutation",
        type: "example",
        title: "Exemple - Composant Salutation avec props",
        description:
          "Trois salutations rendues par un composant classe, puis affichage d'un objet personne et d'un tableau de diplomes.",
        pages: "135 - 138",
        pageList: [135, 136, 137, 138],
        topics: ["props", "classe", "this.props", "diplomes"],
      },
      {
        id: "exemple-children",
        type: "example",
        title: "Exemple - Passer un contenu dynamique avec props.children",
        description:
          "Presentation affiche le paragraphe ou le bouton place entre ses balises ouvrantes et fermantes grace a props.children.",
        pages: "140 - 141",
        pageList: [140, 141],
        topics: ["children", "props", "contenu dynamique", "composition"],
      },
      {
        id: "lesson-state-classe",
        type: "lesson",
        title: "Utiliser l'objet state dans un composant classe",
        description:
          "Le state contient les donnees qui controlent le comportement du composant. Il se modifie uniquement avec this.setState(), ce qui declenche un nouveau render.",
        pages: "143 - 148",
        pageList: [143, 144, 145, 146, 147, 148],
        topics: ["state", "setState", "constructor", "render", "composant classe"],
        objectives: [
          "Initialiser this.state dans le constructeur apres super().",
          "Modifier l'etat avec this.setState().",
          "Comprendre que setState provoque un nouveau rendu.",
          "Ne jamais modifier this.state directement.",
        ],
        codeKey: "stateClasse",
      },
      {
        id: "exemple-message-classe",
        type: "example",
        title: "Exemple - Composant Message et mise a jour du state",
        description:
          "Le clic sur « inscription » remplace le message d'accueil et le libelle du bouton par « merci ».",
        pages: "143 - 146",
        pageList: [143, 144, 145, 146],
        topics: ["state", "setState", "Message", "onClick", "classe"],
      },
    ],
  },
  {
    id: "pre-ch7",
    number: 7,
    title: "Gerer les evenements et personnaliser les composants",
    part: "Partie 3 - Chapitre 1",
    pages: "150 - 181",
    summary:
      "Evenements React, communication entre composants, cycle de vie, styles, affichage conditionnel, listes et cles.",
    items: [
      {
        id: "lesson-evenements",
        type: "lesson",
        title: "Gestion des evenements",
        description:
          "Les evenements React sont en camelCase et recoivent une fonction en callback, unlike les chaines HTML. preventDefault evite le rechargement du formulaire.",
        pages: "152 - 154",
        pageList: [152, 153, 154],
        topics: ["onClick", "onSubmit", "onChange", "camelCase", "preventDefault"],
        objectives: [
          "Comparer onclick HTML et onClick JSX.",
          "Passer une callback ou une arrow function.",
          "Utiliser event.preventDefault() dans onSubmit.",
          "Gerer onChange sur un input.",
        ],
        codeKey: "evenements",
      },
      {
        id: "exercice-inscription",
        type: "exercise",
        title: "Exercice d'application 1 - Afficher nom et prenom",
        description:
          "L'utilisateur saisit nom et prenom puis clique sur Afficher : le message « nom:... prenom:... » s'affiche en majuscules.",
        pages: "154 - 155",
        pageList: [154, 155],
        topics: ["useState", "onChange", "onClick", "evenement", "exercice"],
        objectives: [
          "Creer trois etats nom, prenom et information.",
          "Convertir les saisies en majuscules avec toUpperCase.",
          "Afficher le message au clic sur Afficher.",
          "Ne pas ecrire onClick={envoyer()}.",
        ],
      },
      {
        id: "exercice-validator",
        type: "exercise",
        title: "Exercice d'application 2 - Validateur de mot de passe",
        description:
          "Un champ password doit contenir au moins 4 caracteres, sinon le message « Password doit avoir au moins t 4 caracteres » s'affiche.",
        pages: "156 - 157",
        pageList: [156, 157],
        topics: ["useState", "input controle", "validation", "classe", "exercice"],
        objectives: [
          "Controler la valeur du champ avec value et onChange.",
          "Afficher un message conditionnel si password.length < 4.",
          "Implementer la version fonctionnelle et la version classe.",
        ],
      },
      {
        id: "lesson-communication",
        type: "lesson",
        title: "Communication inter-composant",
        description:
          "Le parent passe une callback a l'enfant ; l'enfant transmet la valeur saisie ; le parent filtre la liste et la transmet a ResultatList.",
        pages: "159 - 164",
        pageList: [159, 160, 161, 162, 163, 164],
        topics: ["communication", "parent", "enfant", "callback", "props", "filter"],
        objectives: [
          "Passer onChercheSubmit de App vers ChercheBar.",
          "Appeler props.onChercheSubmit(term) depuis l'enfant.",
          "Filtrer list selon le type saisi.",
          "Transmettre resultas a ResultatList via props.",
        ],
        codeKey: "communicationApp",
      },
      {
        id: "exemple-communication",
        type: "example",
        title: "Exemple - App, ChercheBar et ResultatList",
        description:
          "Recherche par type (fruit ou legume) avec remontee de la saisie de l'enfant vers le parent et affichage des resultats filtres.",
        pages: "159 - 164",
        pageList: [159, 160, 161, 162, 163, 164],
        topics: ["communication", "callback", "filter", "ChercheBar", "ResultatList"],
      },
      {
        id: "lesson-cycle-vie",
        type: "lesson",
        title: "Cycle de vie des composants",
        description:
          "Un composant classe peut definir componentDidMount, componentDidUpdate et componentWillUnmount ; useEffect permet les memes effets dans un composant fonction.",
        pages: "166 - 170",
        pageList: [166, 167, 168, 169, 170],
        topics: ["cycle de vie", "componentDidMount", "componentDidUpdate", "componentWillUnmount", "useEffect"],
        objectives: [
          "Identifier l'ordre constructor, render, componentDidMount.",
          "Observer componentDidUpdate apres setState.",
          "Observer componentWillUnmount lors du demontage.",
          "Retrouver ces etapes avec useEffect et un tableau vide.",
        ],
        codeKey: "cycleVieClasse",
      },
      {
        id: "exemple-cycle-vie",
        type: "example",
        title: "Exemple - Compteur et journal du cycle de vie",
        description:
          "Compteur monte et demonte par AppCompteur ; chaque etape du cycle est journalisee a l'ecran et dans la console.",
        pages: "167 - 169",
        pageList: [167, 168, 169],
        topics: ["cycle de vie", "Compteur", "AppCompteur", "componentWillUnmount"],
      },
      {
        id: "lesson-styliser",
        type: "lesson",
        title: "Styliser les composants React",
        description:
          "Inline CSS avec un objet JavaScript, modules CSS avec className, composants styles (styled-components) et autres solutions CSS-in-JS.",
        pages: "172 - 174",
        pageList: [172, 173, 174],
        topics: ["style", "inline CSS", "module CSS", "styled-components", "CSS-in-JS"],
        objectives: [
          "Ecrire un style inline avec des doubles accolades.",
          "Utiliser une classe CSS externe avec className.",
          "Comprendre l'interet des modules CSS et des composants styles.",
          "Citer Sass/SCSS et Less.",
        ],
        codeKey: "stylesInline",
      },
      {
        id: "exemple-styliser",
        type: "example",
        title: "Exemple - Trois facons de styliser un bouton",
        description:
          "Le meme bouton est affiche avec un style inline, une classe CSS et un composant style simule sans dependance supplementaire.",
        pages: "172 - 174",
        pageList: [172, 173, 174],
        topics: ["style inline", "className", "styled-components", "bouton"],
      },
      {
        id: "lesson-affichage-conditionnel",
        type: "lesson",
        title: "Affichage conditionnel",
        description:
          "React affiche un composant ou un autre selon une condition JavaScript : if, operateur ternaire ou expression dans le JSX.",
        pages: "176 - 177",
        pageList: [176, 177],
        topics: ["affichage conditionnel", "if", "ternaire", "isLoggedIn"],
        objectives: [
          "Afficher Connecte ou Anonymous selon isLoggedIn.",
          "Utiliser if et return dans un composant.",
          "Comprendre que React met a jour l'interface selon l'etat courant.",
        ],
        codeKey: "affichageConditionnel",
      },
      {
        id: "exemple-affichage-conditionnel",
        type: "example",
        title: "Exemple - Connecte ou Anonymous",
        description:
          "Un bouton bascule isLoggedIn et affiche « Bienvenue ! » ou « Veuillez vous inscrire. ».",
        pages: "176 - 177",
        pageList: [176, 177],
        topics: ["conditionnel", "isLoggedIn", "Connecte", "Anonymous"],
      },
      {
        id: "lesson-listes-cles",
        type: "lesson",
        title: "Listes et cles",
        description:
          "map construit une collection d'elements JSX ; chaque element doit recevoir une cle stable, souvent l'id de la donnee.",
        pages: "179 - 181",
        pageList: [179, 180, 181],
        topics: ["liste", "map", "key", "id", "rendu"],
        objectives: [
          "Transformer un tableau en elements <li> avec map.",
          "Ajouter une cle key unique.",
          "Comprendre le role des cles lors des ajouts et suppressions.",
        ],
        codeKey: "listesCles",
      },
      {
        id: "exemple-listes-cles",
        type: "example",
        title: "Exemple - Liste de nombres et liste de taches",
        description:
          "Une liste de nombres avec key={number.toString()} et une liste de taches avec key={todo.id}.",
        pages: "179 - 181",
        pageList: [179, 180, 181],
        topics: ["map", "key", "liste", "todo"],
      },
    ],
  },
  {
    id: "pre-ch8",
    number: 8,
    title: "Creer des formulaires et consommer des API",
    part: "Partie 3 - Chapitre 2",
    pages: "182 - 219",
    summary:
      "Composants controles, textarea, select, radio, checkbox, AJAX, then consumption d'API avec Axios et fetch en composants fonctionnels et classes.",
    items: [
      {
        id: "lesson-composants-controles",
        type: "lesson",
        title: "Composants controles",
        description:
          "En React, la valeur d'un champ est stockee dans le state et mise a jour avec setState : le composant est la source unique de verite.",
        pages: "184 - 187",
        pageList: [184, 185, 186, 187],
        topics: ["composant controle", "state", "onChange", "setState", "formulaire"],
        objectives: [
          "Comparer formulaire HTML et formulaire controle React.",
          "Lier value au state et onChange au setter.",
          "Empecher le rechargement avec preventDefault.",
          "Ecrire la version fonction avec useState et la version classe.",
        ],
        codeKey: "nameFormClasse",
      },
      {
        id: "exemple-nameform",
        type: "example",
        title: "Exemple - Formulaire controle NameForm",
        description:
          "Le nom saisi est affiche au moment de la soumission ; les versions fonction et classe sont proposees.",
        pages: "185 - 187",
        pageList: [185, 186, 187],
        topics: ["formulaire", "controle", "useState", "classe", "submit"],
      },
      {
        id: "lesson-textarea",
        type: "lesson",
        title: "Gerer les champs de saisie multilignes",
        description:
          "Un textarea controle recoit value et onChange ; au focus, le composant du PDF efface le texte initial.",
        pages: "189 - 191",
        pageList: [189, 190, 191],
        topics: ["textarea", "multiligne", "onFocus", "onChange", "composant controle"],
        objectives: [
          "Initialiser le state avec props.value.",
          "Mettre a jour le texte avec onChange.",
          "Vider le champ avec onFocus.",
          "Ecrire la version fonction et la version classe.",
        ],
        codeKey: "textareaClasse",
      },
      {
        id: "exemple-textarea",
        type: "example",
        title: "Exemple - Composant TextArea",
        description:
          "Zone de texte de 40 colonnes et 10 lignes, videe au focus, avec compteur de caracteres.",
        pages: "189 - 191",
        pageList: [189, 190, 191],
        topics: ["textarea", "onFocus", "onChange", "state"],
      },
      {
        id: "lesson-select",
        type: "lesson",
        title: "Gerer les listes de selection",
        description:
          "Un select contient des options ; onChange permet de lire event.target.value. defaultValue selectionne une option au depart.",
        pages: "193 - 197",
        pageList: [193, 194, 195, 196, 197],
        topics: ["select", "option", "onChange", "defaultValue", "value"],
        objectives: [
          "Generer les options avec map et une cle.",
          "Lire la valeur selectionnee avec event.target.value.",
          "Ecrire la version fonction et la version classe.",
          "Selectionner une option par defaut.",
        ],
        codeKey: "selectClasse",
      },
      {
        id: "exemple-select",
        type: "example",
        title: "Exemple - Liste de selection Select",
        description:
          "Cinq options Element1 a Element5 ; la valeur choisie est affichee a l'ecran et dans le journal.",
        pages: "193 - 197",
        pageList: [193, 194, 195, 196, 197],
        topics: ["select", "option", "onChange", "defaultValue"],
      },
      {
        id: "lesson-radio",
        type: "lesson",
        title: "Gerer les boutons radio",
        description:
          "Un groupe de boutons radio partage le meme name : selectionner un bouton deselectionne le precedent.",
        pages: "199 - 200",
        pageList: [199, 200],
        topics: ["radio", "name", "checked", "groupe", "formulaire"],
        objectives: [
          "Generer les boutons avec map.",
          "Partager le meme attribut name.",
          "Utiliser checked pour l'option par defaut.",
          "Comprendre la selection exclusive.",
        ],
        codeKey: "radioClasse",
      },
      {
        id: "exemple-radio",
        type: "example",
        title: "Exemple - Groupe de boutons radio",
        description:
          "Quatre boutons radio dont radio3 est selectionne au depart ; la selection est affichee.",
        pages: "199 - 200",
        pageList: [199, 200],
        topics: ["radio", "checked", "selection", "groupe"],
      },
      {
        id: "lesson-checkbox",
        type: "lesson",
        title: "Gerer les cases a cocher",
        description:
          "CheckBox gere une case avec this.state.checked ; CheckBoxGroup affiche l'ensemble. Plusieurs cases peuvent etre cochees.",
        pages: "202 - 203",
        pageList: [202, 203],
        topics: ["checkbox", "checked", "state", "groupe", "formulaire"],
        objectives: [
          "Initialiser checked depuis props.checked.",
          "Mettre a jour avec event.target.checked.",
          "Afficher plusieurs cases avec map.",
          "Comprendre la difference avec les boutons radio.",
        ],
        codeKey: "checkbox",
      },
      {
        id: "exemple-checkbox",
        type: "example",
        title: "Exemple - Groupe de cases a cocher",
        description:
          "Quatre cases dont check2 et check3 sont cochees au depart ; la liste des cases cochees est affichee.",
        pages: "202 - 203",
        pageList: [202, 203],
        topics: ["checkbox", "checked", "state", "groupe"],
      },
      {
        id: "lesson-ajax",
        type: "lesson",
        title: "React et AJAX",
        description:
          "React n'integre pas d'API AJAX : on utilise fetch() du navigateur ou une bibliotheque comme Axios pour interroger jsonplaceholder.typicode.com.",
        pages: "205 - 208",
        pageList: [205, 206, 207, 208],
        topics: ["AJAX", "fetch", "axios", "API", "jsonplaceholder", "JSON"],
        objectives: [
          "Definir AJAX et son interet.",
          "Comprendre que React n'est pas responsable de la consommation d'API.",
          "Identifier l'endpoint https://jsonplaceholder.typicode.com/todos.",
          "Distinguer fetch et Axios.",
        ],
        codeKey: "ajaxAxios",
      },
      {
        id: "exemple-axios-fonctionnel",
        type: "example",
        title: "Exemple - API users avec Axios (composant fonctionnel)",
        description:
          "useEffect avec [] charge les utilisateurs une seule fois ; le nombre et la liste des users sont affiches avec axios.get.",
        pages: "210 - 215",
        pageList: [210, 211, 212, 213, 214, 215],
        topics: ["axios", "useEffect", "useState", "users", "API", "async await"],
      },
      {
        id: "exemple-fetch-fonctionnel",
        type: "example",
        title: "Exemple - API users avec fetch (composant fonctionnel)",
        description:
          "fetch renvoie une reponse qu'il faut convertir avec response.json() avant de mettre a jour l'etat utilisateurs.",
        pages: "217",
        pageList: [217],
        topics: ["fetch", "response.json", "useEffect", "users", "async await"],
      },
      {
        id: "exemple-axios-classe",
        type: "example",
        title: "Exemple - API users avec Axios (composant classe)",
        description:
          "Dans un composant classe, l'appel Axios se place dans componentDidMount et met a jour this.state.utilisateurs.",
        pages: "219",
        pageList: [219],
        topics: ["axios", "componentDidMount", "classe", "state", "users"],
      },
    ],
  },
];

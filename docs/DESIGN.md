# Direction de design — PrepReact

## Constat de départ (audit)

L'ancien design était propre mais générique : héros en dégradé bleu nuit avec six tuiles
de statistiques identiques, 13 pastilles de chapitre aux titres longs (quatre lignes de
chips), 115 cartes identiques, bleu « SaaS » partout, police système, deux boutons
« Retour à l'accueil » par fiche, boutons redondants dans l'espace code/résultat, ombres et
flous décoratifs. Rien ne reliait l'interface à ce qu'est le produit : un manuel de cours
de 322 pages.

## Direction retenue : « cahier de cours »

Trois pistes étudiées : (1) cockpit de développeur sombre façon éditeur de code, (2) interface
produit claire et neutre façon Linear, (3) **manuel éditorial annoté**. La 3 est retenue : le
numéro de page du PDF est l'axe organisateur du produit, et une mise en page d'édition le met
naturellement en valeur ; elle se distingue des sites « SaaS » et rend le code lisible par
contraste (blocs sombres sur papier).

## Système

- **Couleurs** : papier `#f4f0e6`, encre `#1b1812`, un seul accent vermillon `#bf3416`
  (liens actifs, marqueur de position, boutons principaux). Les types de fiche se
  distinguent par un point coloré discret, pas par des pastilles remplies. Thème sombre
  automatique via `prefers-color-scheme`.
- **Typographie** : Fraunces (titres, chiffres), Instrument Sans (interface), JetBrains Mono
  (méta-données, code). Auto-hébergées.
- **Espacement** : base 4 px, sections séparées par des filets (1 px) plutôt que des cartes.
- **Signature** : la *règle des pages* — 13 segments proportionnels aux pages du PDF. Filtre
  sur l'accueil, repère de position sur chaque fiche.
- **Mouvement** : transitions de 150–180 ms sur survol et focus uniquement ;
  `prefers-reduced-motion` respecté.

## Accessibilité

Lien d'évitement, focus visible, `aria-pressed` sur les segments, `role="status"` sur le
résumé de filtre, onglets code/résultat navigables aux flèches, cibles tactiles ≥ 24 px,
contrastes calculés pour le texte courant (clair et sombre).

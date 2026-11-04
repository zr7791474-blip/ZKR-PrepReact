import Ex01FetchUserById from "./exercises/Ex01FetchUserById";
import Ex02Compteur from "./exercises/Ex02Compteur";
import Ex03Salutation from "./exercises/Ex03Salutation";
import Ex04ReduxUsers from "./exercises/Ex04ReduxUsers";
import AtelierRedux from "./exercises/AtelierRedux";
import QuizUseEffect from "./exercises/QuizUseEffect";
import ExempleAutreMessage from "./examples/ExempleAutreMessage";
import ExempleFetchClasse from "./examples/ExempleFetchClasse";
import ExempleCompteurUseEffect from "./examples/ExempleCompteurUseEffect";
import ExempleSalutation from "./examples/ExempleSalutation";
import ExemplePostsFetch from "./examples/ExemplePostsFetch";
import ExempleUsePosts from "./examples/ExempleUsePosts";
import ExempleRouting from "./examples/ExempleRouting";
import ExempleReduxThunk from "./examples/ExempleReduxThunk";
import ExempleToolkitCounter from "./examples/ExempleToolkitCounter";
import ExempleToolkitCrud from "./examples/ExempleToolkitCrud";
import ExempleAsyncThunkUsers from "./examples/ExempleAsyncThunkUsers";

import {
  DemoClasses,
  DemoTemplateLiterals,
  DemoTernaire,
  DemoTernaireNull,
  DemoDestructuring,
  DemoMap,
  DemoFilter,
  DemoFind,
  DemoReduce,
  DemoSwap,
  DemoRecursivite,
  DemoClosure,
  DemoHorloge,
  DemoPureAppend,
  DemoPureInsert,
  DemoPureDelete,
  DemoPureUpdate,
  DemoPureObjet,
} from "./examples/JsAvanceDemos";

import {
  DemoJsxListe,
  DemoListeFonction,
  DemoListeClasse,
  DemoReglesJsx,
  DemoJsxVariables,
  ExerciceJsxAge,
} from "./examples/JsxDemos";

import {
  DemoPropsPresentation,
  DemoPropsClasse,
  DemoChildren,
  DemoStateClasse,
} from "./examples/PropsStateDemos";

import {
  ExerciceInscription,
  ExerciceValidator,
  DemoCommunication,
  DemoCycleVie,
  DemoStylisation,
  DemoConditionnel,
  DemoListesCles,
} from "./examples/EvenementsDemos";

import {
  DemoNameForm,
  DemoTextArea,
  DemoSelect,
  DemoRadio,
  DemoCheckBox,
  DemoAxiosUsers,
  DemoFetchUsers,
  DemoAxiosClasse,
} from "./examples/FormulairesDemos";

/**
 * Association entre l'identifiant d'une fiche du catalogue et son composant.
 * Les lecons sans composant dedie utilisent LessonView.
 */
const registry = {
  /* ---------- Pages 4 a 219 ---------- */
  "exemple-classes-js": DemoClasses,
  "exemple-template-literals": DemoTemplateLiterals,
  "exemple-ternaire": DemoTernaire,
  "exemple-ternaire-null": DemoTernaireNull,
  "exemple-destructuring": DemoDestructuring,
  "exemple-map": DemoMap,
  "exemple-filter": DemoFilter,
  "exemple-find": DemoFind,
  "exemple-reduce": DemoReduce,
  "exemple-swap": DemoSwap,
  "exemple-recursivite": DemoRecursivite,
  "exemple-closure": DemoClosure,
  "exemple-horloge": DemoHorloge,
  "exemple-pure-append": DemoPureAppend,
  "exemple-pure-insert": DemoPureInsert,
  "exemple-pure-delete": DemoPureDelete,
  "exemple-pure-update": DemoPureUpdate,
  "exemple-pure-objet": DemoPureObjet,

  "exemple-jsx-liste": DemoJsxListe,
  "exemple-jsx-composant": DemoListeFonction,
  "exemple-jsx-classe": DemoListeClasse,
  "exemple-jsx-regles": DemoReglesJsx,
  "exemple-jsx-variables": DemoJsxVariables,
  "exercice-jsx-age": ExerciceJsxAge,

  "exemple-props-presentation": DemoPropsPresentation,
  "exemple-props-salutation": DemoPropsClasse,
  "exemple-children": DemoChildren,
  "exemple-message-classe": DemoStateClasse,

  "exercice-inscription": ExerciceInscription,
  "exercice-validator": ExerciceValidator,
  "exemple-communication": DemoCommunication,
  "exemple-cycle-vie": DemoCycleVie,
  "exemple-styliser": DemoStylisation,
  "exemple-affichage-conditionnel": DemoConditionnel,
  "exemple-listes-cles": DemoListesCles,

  "exemple-nameform": DemoNameForm,
  "exemple-textarea": DemoTextArea,
  "exemple-select": DemoSelect,
  "exemple-radio": DemoRadio,
  "exemple-checkbox": DemoCheckBox,
  "exemple-axios-fonctionnel": DemoAxiosUsers,
  "exemple-fetch-fonctionnel": DemoFetchUsers,
  "exemple-axios-classe": DemoAxiosClasse,

  /* ---------- Pages 220 a 322 ---------- */
  "lesson-fetch-classe": ExempleFetchClasse,
  "ex01-fetch-user": Ex01FetchUserById,
  "exemple-autre-message": ExempleAutreMessage,
  "ex02-compteur": Ex02Compteur,
  "exemple-compteur-useeffect": ExempleCompteurUseEffect,
  "exemple-salutation": ExempleSalutation,
  "ex03-salutation": Ex03Salutation,
  "quiz-useeffect": QuizUseEffect,
  "exemple-posts-fetch": ExemplePostsFetch,
  "exemple-use-posts": ExempleUsePosts,
  "exemple-routing": ExempleRouting,
  "atelier-redux": AtelierRedux,
  "exemple-redux-thunk": ExempleReduxThunk,
  "ex04-redux-users": Ex04ReduxUsers,
  "exemple-toolkit-counter": ExempleToolkitCounter,
  "exemple-toolkit-crud": ExempleToolkitCrud,
  "exemple-async-thunk": ExempleAsyncThunkUsers,
};

export default registry;

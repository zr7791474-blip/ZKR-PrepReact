import { createStore } from "redux";
import { Etablissment } from "./reducers";

/**
 * Store de l'atelier - PDF page 289.
 * Un store local est cree pour chaque montage du composant afin que
 * l'atelier reste independant du reste de l'application.
 */
export default function createAtelierStore() {
  return createStore(Etablissment);
}

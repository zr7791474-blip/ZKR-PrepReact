import { combineReducers } from "redux";
import * as types from "./types";

// Reducer inscription - PDF page 288
export function inscriptionHistory(listInscription = [], action) {
  if (action.type === types.ADD_INSCRIPTION) {
    return [...listInscription, action.payload];
  }
  if (action.type === types.REMOVE_INSCRIPTION) {
    return listInscription.filter((insc) => insc.id !== action.payload.id);
  }
  return listInscription;
}

// Reducer notation - PDF page 288
export function notationHistory(listNotation = [], action) {
  if (action.type === types.ADD_NOTE) {
    return [...listNotation, action.payload];
  }
  if (action.type === types.REMOVE_NOTE) {
    return listNotation.filter(
      (note) =>
        !(note.id === action.payload.id && note.module === action.payload.module)
    );
  }
  if (action.type === types.UPDATE_NOTE) {
    const { id, module, note } = action.payload;
    return [
      ...listNotation.filter(
        (item) => !(item.id === id && item.module === module)
      ),
      { id, module, note },
    ];
  }
  return listNotation;
}

// combineReducers - PDF page 289
export const Etablissment = combineReducers({
  inscriptionHistory: inscriptionHistory,
  notationHistory: notationHistory,
});

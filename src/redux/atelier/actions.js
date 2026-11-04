import * as types from "./types";

// Créateurs d'actions - PDF pages 286 et 287
export function add_inscription(id, nom, filiere) {
  return {
    type: types.ADD_INSCRIPTION,
    payload: { id: id, nom: nom, filiere: filiere },
  };
}

export function remove_inscription(id) {
  return {
    type: types.REMOVE_INSCRIPTION,
    payload: { id: id },
  };
}

export function add_note(id, module, note) {
  return {
    type: types.ADD_NOTE,
    payload: { id: id, module: module, note: note },
  };
}

export function remove_note(id, module) {
  return {
    type: types.REMOVE_NOTE,
    payload: { id: id, module: module },
  };
}

export function update_note(id, module, note) {
  return {
    type: types.UPDATE_NOTE,
    payload: { id: id, module: module, note: note },
  };
}

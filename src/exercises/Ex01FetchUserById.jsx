import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

/**
 * Exercice 1 - PDF pages 221 a 224
 * L'utilisateur saisit un id, les informations de l'utilisateur s'affichent.
 * Message si le champ est vide ou si l'id n'existe pas.
 */
export default function Ex01FetchUserById() {
  const [id, setId] = useState("1");
  const [utilisateur, setUtilisateur] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id || String(id).trim() === "") {
      setUtilisateur(null);
      setAddress(null);
      setLoading(false);
      return;
    }

    let annule = false;
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          return null;
        }
        return response.json();
      })
      .then((user) => {
        if (annule) return;
        if (user && user.id) {
          setUtilisateur(user);
          setAddress(user.address || {});
        } else {
          setUtilisateur(null);
          setAddress(null);
        }
      })
      .catch(() => {
        if (annule) return;
        setUtilisateur(null);
        setAddress(null);
      })
      .finally(() => {
        if (!annule) setLoading(false);
      });

    return () => {
      annule = true;
    };
  }, [id]);

  function handelChangeId(event) {
    setId(event.target.value);
  }

  return (
    <div className="exercise">
      <div className="objectives">
        <h2>Objectifs de l'exercice</h2>
        <ul>
          <li>Appeler l'endpoint <code>/users/&#123;id&#125;</code> avec fetch.</li>
          <li>Gérer la saisie avec un input contrôlé et l'événement onChange.</li>
          <li>Afficher les informations de l'utilisateur et son adresse.</li>
          <li>Afficher un message si l'id est vide ou n'existe pas.</li>
        </ul>
      </div>

      <DemoWorkspace
        title="Rechercher un utilisateur par son id"
        code={
          <>
            <CodeBlock
              code={snippets.ex01Solution}
              title="Éléments de solution - PDF page 223"
            />
            <CodeBlock
              code={snippets.ex01Css}
              title="CSS du composant - PDF page 224"
              language="css"
            />
          </>
        }
        result={
          <div className="demo-card">
            <div className="demo-card__head">
              <h2>Démonstration</h2>
              <span className="demo-card__hint">
                Essayez 1, 3, 10... puis un id inexistant comme 999 ou videz le champ.
              </span>
            </div>

            <div className="field-row">
              <label htmlFor="user-id">Donner le id :</label>
              <input
                id="user-id"
                type="text"
                inputMode="numeric"
                value={id}
                onChange={handelChangeId}
                placeholder="Exemple : 3"
              />
            </div>

            {loading && <p className="state state--loading">Chargement...</p>}

            {!loading && utilisateur && address && (
              <div className="user-card" key={utilisateur.id}>
                <h3>
                  id : {utilisateur.id} — nom : {utilisateur.name} ({utilisateur.username})
                </h3>
                <p><strong>Email :</strong> {utilisateur.email}</p>
                <p><strong>Téléphone :</strong> {utilisateur.phone}</p>
                <p><strong>Site web :</strong> {utilisateur.website}</p>
                <p><strong>Rue :</strong> {address.street}</p>
                <p><strong>Ville :</strong> {address.city}</p>
              </div>
            )}

            {!loading && !utilisateur && (
              <p className="state state--error">svp choisir un id valide !!!!</p>
            )}
          </div>
        }
        resultHint="Modifiez le champ : une requête réelle part à chaque changement d'id."
        notes={
          <div className="callout">
            <strong>Correction apportée :</strong> dans le PDF, la condition{" "}
            <code>utilisateur && address</code> est toujours vraie car l'API renvoie un
            objet vide pour un id inexistant. La démonstration teste donc{" "}
            <code>user.id</code> pour afficher réellement le message demandé par l'énoncé.
          </div>
        }
      />
    </div>
  );
}

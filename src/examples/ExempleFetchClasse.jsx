import React, { Component } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

/**
 * Exemple composant classe - PDF page 221
 * On change seulement le code de la methode componentDidMount.
 */
export default class ExempleFetchClasse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utilisateurs: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((users) => {
        this.setState({ utilisateurs: users, loading: false });
      })
      .catch(() => {
        this.setState({ utilisateurs: [], loading: false });
      });
  }

  render() {
    return (
      <div className="exercise">
        <DemoWorkspace
          title="Consommation d'un API par fetch - classe composant"
          code={
            <CodeBlock
              code={snippets.fetchClasse}
              title="Extrait componentDidMount - PDF page 221"
            />
          }
          result={
            <div className="demo-card">
              <div className="demo-card__head">
                <h2>Utilisateurs chargés au montage</h2>
                <span className="demo-card__hint">
                  {this.state.utilisateurs.length} utilisateur(s)
                </span>
              </div>
              {this.state.loading && <p className="state state--loading">Chargement...</p>}
              {!this.state.loading && this.state.utilisateurs.length === 0 && (
                <p className="state state--error">
                  Aucun utilisateur reçu. Vérifiez la connexion réseau.
                </p>
              )}
              {!this.state.loading && this.state.utilisateurs.length > 0 && (
                <ul className="simple-list">
                  {this.state.utilisateurs.map((utilisateur) => (
                    <li key={utilisateur.id}>
                      <strong>{utilisateur.name}</strong> — {utilisateur.email}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          }
          resultHint="La requête part dans componentDidMount, puis l'état est mis à jour avec setState."
          notes={
            <div className="callout callout--info">
              Cette fiche illustre le titre du PDF « Consommation d'un API par fetch -
              classe composant ». La solution de l'exercice 1, elle, utilise un composant
              fonctionnel avec <code>useState</code> et <code>useEffect</code>.
            </div>
          }
        />
      </div>
    );
  }
}

import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { decrement, increment, incrementByAmount } from "../features/counterSlice";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";
import { snippets } from "../data/snippets";

function CounterDemo() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [montant, setMontant] = useState(5);

  return (
    <div className="demo-card demo-card--center">
      <h2 className="counter-value">compteur : {value}</h2>
      <div className="button-row">
        <button type="button" className="btn btn--primary" onClick={() => dispatch(increment())}>
          increment
        </button>
        <button type="button" className="btn btn--danger" onClick={() => dispatch(decrement())}>
          decrement
        </button>
      </div>
      <div className="field-row">
        <label htmlFor="montant">montant :</label>
        <input
          id="montant"
          type="number"
          value={montant}
          onChange={(e) => setMontant(Number(e.target.value))}
        />
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => dispatch(incrementByAmount(montant))}
        >
          incrementByAmount
        </button>
      </div>
      <p className="demo-card__hint">
        Les reducers modifient directement <code>state.value</code> : c'est Immer, intégré
        à Redux Toolkit, qui produit un nouvel état immuable.
      </p>
    </div>
  );
}

/**
 * Exemple - PDF pages 312 et 313
 */
export default function ExempleToolkitCounter() {
  const [store] = useState(() =>
    configureStore({
      reducer: { counter: counterReducer },
    })
  );

  return (
    <div className="exercise">
      <DemoWorkspace
        title="Redux Toolkit : compteur avec createSlice"
        code={
          <>
            <CodeBlock
              code={snippets.toolkitCounter}
              title="counterSlice.js - PDF page 312"
            />
            <CodeBlock
              code={snippets.toolkitStore}
              title="Configuration du store - configureStore"
            />
          </>
        }
        result={
          <Provider store={store}>
            <CounterDemo />
          </Provider>
        }
        resultHint="Chaque bouton dispatch une action du slice ; useSelector affiche le nouvel état."
        notes={
          <div className="callout callout--info">
            <strong>Immer :</strong> dans <code>createSlice</code>, le code semble modifier
            l'état directement (<code>state.value++</code>). Redux Toolkit utilise Immer
            pour produire un nouvel état immuable à partir de cette écriture.
          </div>
        }
      />
    </div>
  );
}

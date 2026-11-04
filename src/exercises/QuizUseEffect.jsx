import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import DemoWorkspace from "../components/DemoWorkspace";

const questions = [
  {
    id: "q1",
    page: 245,
    title: "Question 1",
    code: `import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log('TEST!');
  }, []);

  return <div>test composant</div>;
};`,
    question:
      "Après l'exécution, combien de console.log 'TEST!' verriez-vous, et quand ?",
    options: [
      { id: "a", text: "Un log de 'TEST', affiché après le rendu du composant." },
      { id: "b", text: "Aucun log." },
      { id: "c", text: "Un log de 'TEST', affiché avant le rendu du composant." },
      { id: "d", text: "Deux logs de 'TEST', affichés après le rendu du composant." },
    ],
    correct: "a",
    explanation:
      "Avec un tableau vide [], useEffect s'exécute une seule fois, après le premier rendu.",
  },
  {
    id: "q2",
    page: 246,
    title: "Question 2",
    code: `const [count, setCount] = useState(0);

useEffect(() => {
  console.log('TEST!');
}, []);

const onClick = () => { setCount(count + 1); };`,
    question:
      "Un utilisateur clique trois fois sur le bouton. Combien de logs 'TEST!' sont imprimés ?",
    options: [
      { id: "a", text: "Trois logs." },
      { id: "b", text: "Quatre logs." },
      { id: "c", text: "Un seul log." },
    ],
    correct: "c",
    explanation:
      "Le tableau de dépendances est vide : l'effet ne dépend d'aucune valeur et ne se réexécute pas après les clics.",
  },
  {
    id: "q3",
    page: 246,
    title: "Question 3",
    code: `const [count, setCount] = useState(0);

useEffect(() => {
  console.log('TEST!');
}, [count]);

const onClick = () => { setCount(count + 1); };`,
    question:
      "Même code, mais useEffect possède [count]. Combien de logs après trois clics ?",
    options: [
      { id: "a", text: "Un log." },
      { id: "b", text: "Deux logs." },
      { id: "c", text: "Trois logs." },
      { id: "d", text: "Quatre logs." },
    ],
    correct: "d",
    explanation:
      "L'effet s'exécute au premier rendu (1 log), puis après chaque modification de count : 3 clics = 3 exécutions supplémentaires, soit 4 logs.",
  },
];

/**
 * Quiz - PDF pages 245 et 246
 */
export default function QuizUseEffect() {
  const [reponses, setReponses] = useState({});

  function repondre(questionId, optionId) {
    if (reponses[questionId]) return;
    setReponses((anciennes) => ({ ...anciennes, [questionId]: optionId }));
  }

  const nombreReponses = Object.keys(reponses).length;
  const score = questions.filter((q) => reponses[q.id] === q.correct).length;

  return (
    <div className="exercise">
      <div className="objectives">
        <h2>Objectif du quiz</h2>
        <p>
          Vérifier la compréhension du deuxième argument de <code>useEffect</code> :
          aucun tableau, <code>[]</code> ou <code>[valeur]</code>.
        </p>
      </div>

      <DemoWorkspace
        title="Quiz : quand useEffect s'exécute-t-il ?"
        code={
          <>
            {questions.map((q) => (
              <CodeBlock
                key={q.id}
                code={q.code}
                title={`${q.title} - PDF page ${q.page}`}
              />
            ))}
          </>
        }
        result={
          <>
            <div className="quiz-score">
              <span>{nombreReponses} / {questions.length} question(s) répondue(s)</span>
              <strong>Score : {score} / {questions.length}</strong>
            </div>

            {questions.map((q) => {
              const choix = reponses[q.id];
              return (
                <div className="demo-card quiz-card" key={q.id}>
                  <div className="quiz-card__head">
                    <h2>{q.title}</h2>
                    <span className="quiz-card__page">PDF p. {q.page}</span>
                  </div>
                  <p className="quiz-card__question">{q.question}</p>

                  <div className="quiz-options">
                    {q.options.map((option) => {
                      let className = "quiz-option";
                      if (choix) {
                        if (option.id === q.correct) className += " quiz-option--correct";
                        else if (option.id === choix) className += " quiz-option--wrong";
                      }
                      return (
                        <button
                          key={option.id}
                          type="button"
                          className={className}
                          onClick={() => repondre(q.id, option.id)}
                          disabled={Boolean(choix)}
                        >
                          <span className="quiz-option__letter">{option.id}</span>
                          <span>{option.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {choix && (
                    <p className={`quiz-feedback ${choix === q.correct ? "quiz-feedback--ok" : "quiz-feedback--ko"}`}>
                      {choix === q.correct ? "Bonne réponse. " : "Réponse incorrecte. "}
                      {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </>
        }
        resultHint="Lisez le code de chaque question à gauche, puis choisissez une réponse."
        notes={
          <div className="callout callout--info">
            <strong>Rappel :</strong> sans deuxième argument, l'effet s'exécute après chaque
            rendu. Avec <code>[]</code>, il s'exécute une seule fois après le premier rendu.
            Avec <code>[count]</code>, il s'exécute aussi à chaque changement de{" "}
            <code>count</code>.
          </div>
        }
      />
    </div>
  );
}

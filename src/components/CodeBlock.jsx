import React, { useState } from "react";

export default function CodeBlock({ code, title = "Code du cours (PDF)", language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      setCopied(false);
    }
  }

  return (
    <section className="code-panel">
      <div className="code-panel__head">
        <span className="code-panel__title">{title}</span>
        <div className="code-panel__actions">
          <span className="code-panel__lang">{language}</span>
          <button type="button" className="btn btn--ghost btn--small" onClick={copyCode}>
            {copied ? "Copié !" : "Copier"}
          </button>
        </div>
      </div>
      <pre className="code-panel__body">
        <code>{code}</code>
      </pre>
    </section>
  );
}

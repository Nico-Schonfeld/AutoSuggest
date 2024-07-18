import React from "react";

const AutoSuggest = ({ onSearch, results, search }: any) => {
  return (
    <div>
      <span>search:</span>
      <input
        type="text"
        placeholder="Buscar..."
        name="search"
        style={{
          background: "transparent",
          border: "1px solid #f1f1f1",
          padding: "1rem 1.5rem",
        }}
        onInput={onSearch}
        value={search}
      />

      <div>
        {!search ? null : results.length === 0 ? (
          <div>No hay resultados.</div>
        ) : (
          results.map((name: string, index: number) => (
            <div key={index}>
              <button>- {name} -</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AutoSuggest;

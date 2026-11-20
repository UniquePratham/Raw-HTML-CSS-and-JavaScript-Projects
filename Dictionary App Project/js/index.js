// index.js - Pratham's Urban Dictionary
// Uses the free Dictionary API (https://dictionaryapi.dev) - no key required.

const form = document.getElementById("search-form");
const input = document.getElementById("word-input");
const results = document.getElementById("results");
const status = document.getElementById("status");

function setStatus(message, isError = false) {
  status.textContent = message;
  status.className = isError ? "status error" : "status";
}

function renderEntry(entry) {
  const card = document.createElement("article");
  card.className = "result";

  const title = document.createElement("h2");
  title.textContent = entry.word;
  card.appendChild(title);

  (entry.meanings || []).forEach((meaning) => {
    const pos = document.createElement("div");
    pos.className = "pos";
    pos.textContent = meaning.partOfSpeech || "";
    card.appendChild(pos);

    (meaning.definitions || []).slice(0, 3).forEach((def) => {
      const p = document.createElement("p");
      p.textContent = def.definition;
      card.appendChild(p);

      if (def.example) {
        const ex = document.createElement("p");
        ex.className = "example";
        ex.textContent = `"${def.example}"`;
        card.appendChild(ex);
      }
    });
  });

  return card;
}

async function lookup(word) {
  results.innerHTML = "";
  setStatus("Searching...");

  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!res.ok) {
      setStatus(`No definition found for "${word}".`, true);
      return;
    }

    const data = await res.json();
    data.forEach((entry) => results.appendChild(renderEntry(entry)));
    setStatus(`${data.length} entr${data.length === 1 ? "y" : "ies"} found.`);
  } catch {
    setStatus("Could not reach the dictionary service. Check your connection.", true);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const word = input.value.trim();
  if (!word) {
    setStatus("Type a word first.", true);
    return;
  }
  lookup(word);
});

// Load a sample word so the page is never empty on first visit.
lookup("serendipity");
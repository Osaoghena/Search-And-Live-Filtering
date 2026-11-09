const glossary = [
  {
    term: "HTML",
    definition: "The markup language used to structure content on a web page."
  },
  {
    term: "CSS",
    definition: "A language for styling the appearance of HTML elements."
  },
  {
    term: "JavaScript",
    definition: "The programming language that makes web pages interactive."
  },
  {
    term: "DOM",
    definition: "The Document Object Model — the browser's live, editable tree of the page."
  },
  {
    term: "Element",
    definition: "A single node in the page, such as a heading, paragraph, or button."
  },
  {
    term: "Event",
    definition: "Something that happens on the page, like a click or keypress, that code can respond to."
  },
  {
    term: "Function",
    definition: "A reusable block of code that performs a task and can return a value."
  },
  {
    term: "Variable",
    definition: "A named container that stores a value for later use."
  },
  {
    term: "Array",
    definition: "An ordered list of values, written with square brackets."
  },
  {
    term: "Object",
    definition: "A collection of key/value pairs, written with curly braces."
  },
  {
    term: "JSON",
    definition: "A text format for storing and exchanging data, based on objects and arrays."
  },
  {
    term: "Fetch",
    definition: "A browser function for loading data from a file or server."
  },
  {
    term: "Selector",
    definition: "A pattern used to find and target elements, e.g. by class or id."
  },
  {
    term: "Attribute",
    definition: "Extra information on an element, such as src, href, or alt."
  },
  {
    term: "Callback",
    definition: "A function passed to another function to run at a later time."
  }
];

//sort glossary alphabetically
glossary.sort((a, b) =>
  a.term.localeCompare(b.term)
);

//get HTML elements
const searchInput = document.getElementById("searchInput");
const glossaryList = document.getElementById("glossaryList");
const resultCount = document.getElementById("resultCount");
const noMatches = document.getElementById("noMatches");

//renders glossary
function renderGlossary(searchText = "") {

  //normalize search text
  const search = searchText.trim().toLowerCase();

  //filter the glossary
  const filteredGlossary = glossary.filter(item => {
    const term = item.term.toLowerCase();
    const definition = item.definition.toLowerCase();

    return term.includes(search) ||
      definition.includes(search);
  });

  //update result #
  resultCount.textContent =
    `Showing ${filteredGlossary.length} of ${glossary.length} terms`;

  //clear results
  glossaryList.innerHTML = "";

  //no matches message
  if (filteredGlossary.length === 0) {
    noMatches.style.display = "block";
    return;
  }

  noMatches.style.display = "none";

  //show matching terms
  filteredGlossary.forEach(item => {
    const card = document.createElement("div");
    card.className = "term-card";

    const heading = document.createElement("h2");
    heading.textContent = item.term;

    const definition = document.createElement("p");
    definition.textContent = item.definition;

    card.appendChild(heading);
    card.appendChild(definition);

    glossaryList.appendChild(card);
  });
}

//live search on every keystroke
searchInput.addEventListener("input", function() {
  renderGlossary(this.value);
});

//display all terms initially
renderGlossary();

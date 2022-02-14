`use strict`;

alert(
  `'Images' and 'I'm Feeling Lucky' is still underprogress please dont check those out. `
);

const searchButton = document.querySelector(".search");
searchButton.addEventListener("click", function () {
  const search = prompt(`What are you looking for ?`);
  search.replaceAll("", "-");

  searchButton.href = `https://www.google.com/search?q${search}`;
});

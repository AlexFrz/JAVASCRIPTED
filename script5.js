const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

// Exercice n°1.
console.log("Tous les livres ont-ils été empruntés au moins une fois?");

let hasAllBooksBeenRentedOnce;
books.forEach((book) => {
  if (book.rented === 0) {
    hasAllBooksBeenRentedOnce = false;
  } else {
    hasAllBooksBeenRentedOnce = true;
  }
});

if (hasAllBooksBeenRentedOnce === true) {
  console.log("Oui");
} else {
  console.log("Non");
}

// Exercice n°2.
console.log("Quel est le livre le plus emprunté?");
let booksByRental = books.sort(function (a, b) {
  return a.rented - b.rented;
});

console.log(booksByRental[booksByRental.length - 1].title);

// Exercice n°3.
console.log("Le livre avec l'id: 873495 est");
let bookById = books.find((book) => {
  return book.id === 873495;
});

console.log(bookById.title);

// Exercice n°4.
console.log("Je supprime le livre avec l'ID: 133712.");

let bookToDelete = books.findIndex((book) => {
  return book.id === 133712;
});

books.splice(bookToDelete, 1);
console.log(books);

// Exercice n°5.
console.log("Les livres par ordre alphabétique sont:");
let booksByAlphabeticalOrder = books.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});

console.log(booksByAlphabeticalOrder);

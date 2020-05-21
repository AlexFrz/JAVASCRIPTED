userInput = prompt("Wesh alors?");

if (userInput.match(/[?]/g)) {
  console.log("Ouais, ouais...");
  // Si toute la phrase est en majuscules
} else if (userInput.match(/^[^a-z]+$/)) {
  console.log("Pwah, calme-toi...");
  // Si il y a "Fortnite" dans la phrase
} else if (userInput.match(/fortnite/gi)) {
  console.log("On s'fait une partie soum-soum ?");
  // Si l'user input est vide
} else if (userInput === "") {
  console.log("T'es en PLS?");
  // Pour toute autre réponse
} else {
  console.log("Balek!");
}

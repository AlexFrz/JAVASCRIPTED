number = prompt(
  "Saluuuuut, bienvenue dans ma pyramide de vatos locos, mon pote. Tu veux combien d'étages?"
);

number = Number(number);

function pyramid(number) {
  let result = "";
  let i = 1;
  let j = 0;

  while (i <= number) {
    j = 0;
    while (j < number) {
      if (j < number - i) result += " ";
      else result += "#";
      j++;
    }
    result += "\n";
    i++;
  }
  return result;
}

let result = pyramid(number);

console.log(result);

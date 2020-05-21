/*
CCGUCGUUGCGCUACAGC
CCUCGCCGGUACUUCUCG
UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine 
CCU ou CCC ou CCA ou CCG => Proline 
UUA ou UUG => Leucine 
UUU ou UUC => Phénylalanine 
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine 
UAU ou UAC => Tyrosine
*/

// EXERCICE 6

// On crée une fonction qui nous permettra de décrypter l'ARN donné et d'afficher
// les acides aminés correspondants.
function decrypt(base) {
  // Grâce à match() et aux Regex, on crée un array qui a une entrée
  // par suite de 3 caractères.
  let chuncks = base.match(/.{1,3}/g);

  chuncks.forEach((chunck, index) => {
    if (
      "UCU" === chunck ||
      "UCC" === chunck ||
      "UCA" === chunck ||
      "UCG" === chunck ||
      "AGU" === chunck ||
      "AGC"
    )
      chuncks[index] = "Sérine";
    if (
      "CCU" === chunck ||
      "CCC" === chunck ||
      "CCA" === chunck ||
      "CCG" === chunck
    )
      chuncks[index] = "Proline";
    if ("UUA" === chunck || "UUG" === chunck) chuncks[index] = "Leucine";
    if ("UUU" === chunck || "UUC" === chunck) chuncks[index] = "Phénylalanine";
    if (
      "CGU" === chunck ||
      "CGC" === chunck ||
      "CGA" === chunck ||
      "CGG" === chunck ||
      "AGA" === chunck ||
      "AGG" === chunck
    )
      chuncks[index] = "Arginine";
    if ("UAU" === chunck || "UAC" === chunck) chuncks[index] = "Tyrosine";
  });

  // On return le tableau sous forme de string, chaque entrée est liée par
  // un - grâce à join()
  return chuncks.join("-");
}

console.log("Voici les acides aminés pour l'ARN CCGUCGUUGCGCUACAGC:");
console.log(decrypt("CCGUCGUUGCGCUACAGC"));

console.log("Voici les acides aminés pour l'ARN CCUCGCCGGUACUUCUCG:");
console.log(decrypt("CCUCGCCGGUACUUCUCG"));

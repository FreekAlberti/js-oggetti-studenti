// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


$(document).ready(function() {
  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

  var studente = {
    "nome" : "Federico",
    "cognome" : "Alberti",
    "eta" : 23
  };

  for (var key in studente) {
    console.log(key + " : " +studente[key]);
  }

});

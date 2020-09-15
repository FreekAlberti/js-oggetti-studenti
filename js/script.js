$(document).ready(function() {
  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

  var studente = {
    "nome" : "Federico",
    "cognome" : "Alberti",
    "eta" : 23
  };

  for (var key in studente) {
    console.log(key + " : " + studente[key]);
  }

  console.log("***********************");

  // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

  var studenti = [
    {
      "nome" : "Matteo",
      "cognome" : "Papalia",
      "eta" : 25
    },
    {
      "nome" : "Luca",
      "cognome" : "Corcione",
      "eta" : 19
    },
    {
      "nome" : "Damiano",
      "cognome" : "Secondino",
      "eta" : 24
    },
    {
      "nome" : "Leonardo",
      "cognome" : "Arragoni",
      "eta" : 22
    }
  ];

  for (var i = 0; i < studenti.length; i++) {
    console.log("***** Studente " + (i + 1) + " :");
    for (var k in studenti[i]) {
      if (k == "nome" || k == "cognome") {
        console.log(k + " : " + studenti[i][k]);
      }
    }
  }

  console.log("***********************");

  // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

  var nome = prompt("Inserisci il nome dello studente");
  var cognome = prompt("Inserisci il cognome dello studente");
  var eta = parseInt(prompt("Inserisci l'età dello studente"));

  var nuovoOggetto = {
    "nome" : nome,
    "cognome" : cognome,
    "eta" : eta
  };

  studenti.push(nuovoOggetto);

  for (var i = 0; i < studenti.length; i++) {
    console.log("***** Studente " + (i + 1) + " :");
    for (var k in studenti[i]) {
      console.log(k + " : " + studenti[i][k]);
    }
  }

  console.log("***********************");

  //HANDLEBARS

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < studenti.length; i++) {
    var conteggio = "***** Studente " + (i + 1) + " :";
    var context = {
      "header" : conteggio
    };
    var html = template(context);
    $("#app").append(html);
    for (var k in studenti[i]) {
      var context = {
        "body" : k + " : " + studenti[i][k]
      };
      var html = template(context);
      $("#app").append(html);
    }
  }
  var context = {
    "stelline" : "***********************"
  };
  var html = template(context);
  $("#app").append(html);
});

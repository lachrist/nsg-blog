
var Compets = require("./compets.js");

function translate (word) { return translations[word] || word }
var translations = {
  "schedule.pdf": "Horaire.pdf",
  "inscription.pdf": "Inscriptions.pdf",
  "startlist.pdf": "Départs.pdf",
  "result.pdf": "Résultats.pdf"
};

function sort (x, y) {
  if (ordering.indexOf(x) === -1 && ordering.indexOf(y) === -1)
    return x.localeCompare(y);
  if (ordering.indexOf(x) === -1)
    return 1;
  if (ordering.indexOf(y) === -1)
    return -1;
  return ordering.indexOf(x) > ordering.indexOf(y) ? 1 : -1;
}
var ordering = ["schedule.pdf", "inscription.pdf", "startlist.pdf", "result.pdf"];

module.exports = function (date, div1) {
  if (date in Compets) {
    var div2 = document.createElement("div");
    div2.className = "compet";
    div2.textContent = Compets[date].name;
    Compets[date].docs.sort(sort).forEach(function (doc) {
      var a = document.createElement("a");
      a.textContent = translate(doc);
      a.href = "compet/"+date+" "+Compets[date].name+"/"+doc;
      div2.appendChild(a);
    });
    div1.appendChild(div2);
  }
};

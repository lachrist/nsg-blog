
window.Compet = (function (compets) {

  var translations = {
    "schedule": "Horaire",
    "inscription": "Inscriptions",
    "startlist": "Départs",
    "result": "Résultats"
  };

  function translate (word) { return translations[word] || word }

  return function (date, div1) {
    if (date in compets) {
      var div2 = document.createElement("div");
      div2.className = "compet";
      div2.textContent = compets[date].name;
      compets[date].docs.forEach(function (doc) {
        var a = document.createElement("a");
        a.textContent = translate(doc.split(".")[0])+"["+doc.split(".")[1]+"]";
        a.href = "compet/"+date+" "+compets[date].name+"/"+doc;
        div2.appendChild(a);
      });
      div1.appendChild(div2);
    }
  }

} (@COMPETS));
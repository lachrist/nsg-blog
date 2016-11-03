
window.Event = (function () {

  function link (innerText, href) {
    var div = document.createElement("div");
    var req = new XMLHttpRequest();
    req.addEventListener("load", function () {
      if (req.status === 200) {
        var a = document.createElement("a");
        a.textContent = innerText
        a.href = href;
        div.appendChild(a);
      }
    });
    req.open("HEAD", href);
    req.send();
    return div;
  }

  function workout (date, div) {
    if (date in Workouts) {
      var a = document.createElement("a");
      a.textContent = "Muscu";
      a.className = "workout";
      a.href = Workouts[date];
      div.append(a);
    }
  }

  function compet (date, div1) {
    if (date in Compets) {
      var div2 = document.createElement("div");
      div2.className = "compet";
      div2.textContent = Compets[date];
      div2.appendChild(link("Horaire", "compet/"+Compets[date]+"/schedule.pdf"));
      div2.appendChild(link("Inscriptions", "compet/"+Compets[date]+"/inscription.pdf"));
      div2.appendChild(link("Départs", "compet/"+Compets[date]+"/startlist.pdf"));
      div2.appendChild(link("Resultats", "compet/"+Compets[date]+"/result.pdf"));
      div1.appendChild(div2);
    }
  }

  return function (date) {
    var div = document.createElement("div");
    workout(date, div);
    compet(date, div);
    return div;
  };

} ());


var Event = (function () {

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

  function compet (date, div1) {
    if (date in Compets) {
      var div2 = document.createElement("div");
      div2.className = "compet";
      div2.textContent = Compets[date];
      div2.appendChild(link("Schedule", "schedule/"+date+".pdf"));
      div2.appendChild(link("Startlist", "startlist/"+date+".pdf"));
      div2.appendChild(link("Result", "result/"+date+".pdf"));
      div1.appendChild(div2);
    }
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

  return function (date) {
    console.log(date);
    var div = document.createElement("div");
    compet(date, div);
    workout(date, div);
    return div;
  };

} ());

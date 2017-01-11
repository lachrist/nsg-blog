
var Compet = require("./compet.js");
var Workout = require("./workout");
var Documents = require("./documents.js");


window.addEventListener("load", function () {

  Documents.forEach(function (doc) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = doc;
    a.innerText = doc.replace(/^document\//, "");
    li.appendChild(a);
    document.getElementById("documents").appendChild(li);
  });

  var months = [
    null,
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ];

  var month = new Date().getMonth()+1;
  var year = new Date().getFullYear();

  document.getElementById("calendar-next").onclick = function () {
    if (month === 12) {
      month = 1;
      year++;
    } else {
      month++;
    }
    update();
  };

  document.getElementById("calendar-previous").onclick = function () {
    if (month === 1) {
      month = 12;
      year--;
    } else {
      month--;
    }
    update();
  };

  var tds = [];
  (function () {
    var table = document.getElementById("calendar");
    for (var i=0; i<6; i++) {
      var tr = document.createElement("tr");
      table.appendChild(tr);
      for (var j=0; j<7; j++) {
        var td = document.createElement("td");
        tds.push(td);
        tr.appendChild(td);
      }
    }
  } ());

  function empty (td) {
    while (td.firstChild)
      td.removeChild(td.firstChild);
  }

  function cell (day) {
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    div2.className = "date";
    div2.textContent = day;
    div1.appendChild(div2);
    var date = year+"-"+pad(month)+"-"+pad(day);
    Compet(date, div1);
    Workout(date, div1);
    return div1;
  }

  function pad (i) { return i < 10 ? "0"+i : i }

  function update () {
    document.getElementById("calendar-title").textContent = months[month] + " " + year;
    var offset = ((new Date(year, month, 1).getDay()) + 2) % 6;
    var max = new Date(year, month, 0).getDate();
    tds.forEach(empty);
    for (var i=1; i<=max; i++)
      tds[i+offset].appendChild(cell(i));
    var today = new Date();
    if (year === today.getFullYear() && month === today.getMonth()+1) {
      console.log(today.getDate()+offset);
      tds[today.getDate()+offset].firstChild.className += " today";
    }
  }

  update();

});

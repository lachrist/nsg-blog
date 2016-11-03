
var Calendar = function () {

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
    if (month === 1) {
      month = 12;
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

  function pad (i) { return i < 10 ? "0"+i : i }

  function update () {
    document.getElementById("calendar-title").textContent = months[month] + " " + year;
    var offset = ((new Date(year, month, 1).getDay()) + 2) % 6;
    var max = new Date(year, month, 0).getDate();
    tds.forEach(empty);
    for (var i=1; i<=max; i++) {
      var div = document.createElement("div");
        div.class = "date";
        div.textContent = i;
      tds[i+offset].appendChild(div);
      tds[i+offset].appendChild(Event(year+"-"+pad(month)+"-"+pad(i)));
    }
    var today = new Date();
    if (year === today.getFullYear() && month === today.getMonth()+1)
      tds[today.getDate()+offset].class += " today";
  }

  update();

};

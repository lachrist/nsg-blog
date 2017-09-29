(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var Compets = require("./compets.js");
var Season = require("./season.js");

var translate = (function (translations) {
  return function (word) { return translations[word] || word };
} ({
  "invitation.pdf": "Invitation.pdf",
  "inscription.pdf": "Inscriptions.pdf",
  "schedule.pdf": "Horaire.pdf",
  "startlist.pdf": "Départs.pdf",
  "result.pdf": "Résultats.pdf"
}));

var sort = (function (ordering) {
  return function (x, y) {
    if (ordering.indexOf(x) === -1 && ordering.indexOf(y) === -1)
      return x.localeCompare(y);
    if (ordering.indexOf(x) === -1)
      return 1;
    if (ordering.indexOf(y) === -1)
      return -1;
    return ordering.indexOf(x) > ordering.indexOf(y) ? 1 : -1;
  };
} ([
  "invitation.pdf",
  "inscription.pdf",
  "schedule.pdf",
  "startlist.pdf",
  "result.pdf"
]));

module.exports = function (date, div1) {
  if (date in Compets) {
    var div2 = document.createElement("div");
    div2.className = "compet";
    div2.textContent = Compets[date].name;
    Compets[date].docs.sort(sort).forEach(function (doc) {
      var a = document.createElement("a");
      a.textContent = translate(doc);
      a.href = "compet/"+Season+"/"+date+" "+Compets[date].name+"/"+doc;
      div2.appendChild(a);
    });
    div1.appendChild(div2);
  }
};

},{"./compets.js":2,"./season.js":6}],2:[function(require,module,exports){
module.exports = {
  "2017-10-08": {
    "name": "BCBW I @Poseidon",
    "docs": [
      "171008_bcbw1.lxf",
      "RBP08102017.pdf"
    ]
  },
  "2017-10-21": {
    "name": "BCBW II @Waterloo",
    "docs": [
      "BWST21102017.pdf"
    ]
  },
  "2017-10-22": {
    "name": "BCBW III @Rixensart",
    "docs": [
      "SCR22102017pm.pdf",
      "scr22102017am.pdf"
    ]
  },
  "2017-11-04": {
    "name": "Burny @Laeken",
    "docs": []
  },
  "2017-11-05": {
    "name": "Burny @Laeken",
    "docs": []
  },
  "2017-11-11": {
    "name": "Ch Bel 25m @Gent",
    "docs": []
  },
  "2017-11-12": {
    "name": "Ch Bel 25m @Gent",
    "docs": []
  },
  "2017-11-18": {
    "name": "Richard Anis @Blocry",
    "docs": []
  },
  "2017-11-19": {
    "name": "Richard Anis @Blocry",
    "docs": []
  },
  "2017-11-24": {
    "name": "BCBW Relais I @Poseidon",
    "docs": []
  },
  "2017-12-01": {
    "name": "BCBW Relais II @Poseidon",
    "docs": []
  },
  "2017-12-29": {
    "name": "Derniere Chance @Mons",
    "docs": []
  }
};
},{}],3:[function(require,module,exports){
module.exports = [
  "document/licence.pdf",
  "document/minima/2016-BCBW.pdf",
  "document/minima/2016-BE-50m.pdf",
  "document/minima/2016-BE-25m.pdf",
  "document/minima/2017-FR-JEUNES-50m.pdf",
  "document/minima/2017-FR-OPEN-50m.pdf"
];
},{}],4:[function(require,module,exports){

var days = [
  "2016-09-27",
  "2016-11-11",
  "2017-04-17",
  "2017-05-01",
  "2017-05-25",
  "2017-06-05"
];

var spans = [
  ["2016-10-31", "2016-11-04"],
  ["2016-12-26", "2017-01-06"],
  ["2017-02-27", "2017-03-03"],
  ["2017-04-03", "2017-04-14"],
  ["2017-07-01", "2017-08-31"]
];

module.exports = function (date) {
  var day = (new Date(date)).getDay();
  if (day === 0 || day === 6)
    return true;
  if (days.indexOf(date) !== -1)
    return true;
  for (var i=0; i<spans.length; i++)
    if (date >= spans[i][0] && date <= spans[i][1])
      return true;
  return false;
};

},{}],5:[function(require,module,exports){

var Compet = require("./compet.js");
var Workout = require("./workout");
var Documents = require("./documents.js");
var Holliday = require("./holliday.js");

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
    td.className = "";
    while (td.firstChild)
      td.removeChild(td.firstChild);
  }

  function cell (day) {
    var date = year+"-"+pad(month)+"-"+pad(day);
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    div2.className = "date";
    div2.textContent = day;
    Holliday(date) && (div2.className = "holliday")
    div1.appendChild(div2);
    Compet(date, div1);
    Workout(date, div1);
    return div1;
  }

  function pad (i) { return i < 10 ? "0"+i : i }

  function update () {
    document.getElementById("calendar-title").textContent = months[month] + " " + year;
    var offset = ((new Date(year, month-1, 1).getDay()) -1);
    (offset === -1) && (offset = 6)
    var max = new Date(year, month, 0).getDate();
    tds.forEach(empty);
    for (var i=0; i<max; i++)
      tds[i+offset].appendChild(cell(i+1));
    var today = new Date();
    if (year === today.getFullYear() && month-1 === today.getMonth())
      tds[today.getDate()+offset-1].className = "today";
  }

  update();

});

},{"./compet.js":1,"./documents.js":3,"./holliday.js":4,"./workout":8}],6:[function(require,module,exports){

var augustus = 7; 
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();

if (month >= augustus)
  module.exports = year+"-"+(year+1)
else
  module.exports = (year-1)+"-"+year

},{}],7:[function(require,module,exports){

var Templates = require("./templates.js");

var url = "https://cdn.rawgit.com/lachrist/abi-dalzim/9de34a4ed5a4a5f61e8373535e25501e4472627c/index.html"

function signal (message) {
  alert(message);
  throw new Error(message);
}

module.exports = function (workout) {
  return url+"?set="+encodeURIComponent(workout.replace(/\$([^\(]+)\(([^\)]*)\)/g, function (match, name, args) {
    if (!Templates[name])
      signal("Could not find template: "+name);
    args = args.split(",");
    args.unshift(name);
    return Templates[name].replace(/\$([0-9])/g, function (match, idx) {
      if (!args[idx])
        signal("Argument #"+idx+" is undefined");
      return args[idx];
    });
  }));
};

},{"./templates.js":9}],8:[function(require,module,exports){

var Workouts = require("./workouts.js");
var Build = require("./build.js");

module.exports = function (date, div) {
  if (date in Workouts) {
    var a = document.createElement("a");
    a.textContent = Workouts[date].length < 100 ? Workouts[date] : "Muscu";
    a.className = "workout";
    a.href = Build(Workouts[date]);
    div.appendChild(a);
  }
};

},{"./build.js":7,"./workouts.js":10}],9:[function(require,module,exports){
module.exports = {
  "butterfly1": "$1 * (120s elastic-butterfly + 30s rest)",
  "rotator1": "$1 * (30s elastic-rotator-external-left +\n      30s elastic-rotator-internal-left +\n      60s elbow-plank-left +\n      30s rest +\n      30s elastic-rotator-external-right +\n      30s elastic-rotator-internal-right +\n      60s elbow-plank-right +\n      30s rest)",
  "warmup1": "$1 * ($2 high-knee +\n      $2 butt-kicker +\n      $2 burpee-1 +\n      $2 burpee-2 +\n      $2 pushup-serratus +\n      $2 flutter-kick +\n      $2 rest)",
  "warmup2": "30s arm-circle-large-forward +\n30s arm-circle-large-backward +\n30s arm-circle-small-forward +\n30s arm-circle-small-backward +\n30s burpee-1 +\n30s burpee-2 +\n30s burpee"
};
},{}],10:[function(require,module,exports){
module.exports = {
  "2016-09-10": "  3 * (45s mountain-climbing + 15s rest)\n+ 60s rest\n+ 6 * (20s burpee + 10s rest)\n+ 60s rest\n+ 3 * (45s plank-front + 15s rest)\n+ 60s rest\n+ 3 * (30s plank-left + 30s plank-right)\n+ 60s rest\n+ 3 * (30s plank-front + 30s plank-back)\n+ 60s rest\n+ 3 * (20s plank-leg-left + 10s rest + 20s plank-leg-right + 10s rest)\n+ 60s rest\n+ 6 * (3 pushup-close in 15s + 3 pushup-large in 15s)\n+ 60s rest\n+ 3 * (45s elastic-butterfly + 15s rest)\n+ 60s rest\n+ 3 * (45s elastic-butterfly + 15s rest)",
  "2016-09-13": "  3 * (30s butt-kicker + 30s high-knee)\n+ 60s rest\n+ 3 * (  20s mountain-climbing + 10s rest\n       + 20s burpee            + 10s rest)\n+ 60s rest\n+ 3 * (   20s burpee-1 + 10s rest\n        + 20s burpee-2 + 10s rest)\n+ 60s rest\n+ 12 * (4 squat in 15s)\n+ 60s rest\n+ 3 * (40s plank-front + 20s rest)\n+ 60s rest\n+ 3 * (30s plank-left + 30s plank-right)\n+ 60s rest\n+ 6 * (3 pushup-close in 15s + 3 pushup-large in 15s)\n+ 60s rest\n+ 3 * (45s elastic-butterfly + 15s rest)\n+ 60s rest\n+ 3 * (45s elastic-butterfly + 15s rest)",
  "2016-09-20": "  3 * (30s butt-kicker + 30s high-knee)\n+ 3 * (45s mountain-climbing + 15s rest)\n+ 9 * (4 burpee-pushup in 20s)\n+ 15s  elastic-butterfly + 15s rest\n+ 30s  elastic-butterfly + 15s rest\n+ 45s  elastic-butterfly + 15s rest\n+ 60s  elastic-butterfly + 15s rest\n+ 75s  elastic-butterfly + 15s rest\n+ 90s  elastic-butterfly + 15s rest\n+ 105s elastic-butterfly + 15s rest\n+ 120s elastic-butterfly + 15s rest\n+ 105s elastic-butterfly + 15s rest\n+ 90s  elastic-butterfly + 15s rest\n+ 75s  elastic-butterfly + 15s rest\n+ 60s  elastic-butterfly + 15s rest\n+ 45s  elastic-butterfly + 15s rest\n+ 30s  elastic-butterfly + 15s rest\n+ 15s  elastic-butterfly + 15s rest",
  "2016-09-22": "  3 * (30s butt-kicker + 30s high-knee)\n+ 60s rest\n+ 3 * (45s mountain-climbing + 15s rest)\n+ 60s rest\n+ 3 * (  20s burpee-1 + 10s rest\n       + 20s burpee-2 + 10s rest)\n+ 60s rest\n+ 3 * (  20s lunge + 10s rest\n       + 20s squat + 10s rest)\n+ 60s rest\n+ 3 * (  12s pushup-plank-high\n       + 12s pushup-plank-left\n       + 12s pushup-plank-right\n       + 12s pushup-plank-back\n       + 12s rest)\n+ 60s rest\n+ 3 * (  12s elbow-plank-front\n       + 12s elbow-plank-left\n       + 12s elbow-plank-right\n       + 12s elbow-plank-back\n       + 12s rest)\n+ 60s rest\n+ 3 * (  12s pushup-plank-arm-left\n       + 12s pushup-plank-arm-right\n       + 12s pushup-plank-leg-left\n       + 12s pushup-plank-leg-right\n       + 12s rest)\n+ 60s rest\n+ 3 * (40s superman-plank + 20s rest)\n+ 60s rest\n+ 3 * (  20s walkup-left + 10s rest\n       + 20s walkup-right + 10s rest)\n+ 60s rest\n+ 3 * (  20s superman + 10s rest\n       + 20s superman-alternate + 10s rest)\n+ 60s rest",
  "2016-09-27": "  (  45s arm-circle-large-1\n   + 45s arm-circle-large-2\n   + 45s arm-circle-small-1\n   + 45s arm-circle-small-2)\n+ 60s rest\n+ 3 * 45s mountain-climbing\n+ 60s rest\n+ 6 * (20s burpee-pushup + 10s rest)\n+ 60s rest\n+ 3 * (  20s walkup-right + 10s rest\n       + 20s walkup-left  + 10s rest)\n+ 60s rest\n+ 6 * (20s superman + 10s rest)\n+ 60s rest\n+ 12 * (3 pushup-serratus in 15s)\n+ 60s rest\n+ 12 * (5 elastic-row in 15s)\n+ 60s rest\n+ 12 * (5 elastic-uprow in 15s)\n+ 180s elastic-butterfly\n+ 60s rest\n+ 180s elastic-butterfly",
  "2016-09-29": "  3 * (30s butt-kicker + 30s high-knee)\n+ 3 * (45s mountain-climbing + 15s rest)\n+ 9 * (4 burpee-pushup in 20s)\n+ 15s  elastic-butterfly + 15s rest\n+ 30s  elastic-butterfly + 15s rest\n+ 45s  elastic-butterfly + 15s rest\n+ 60s  elastic-butterfly + 15s rest\n+ 75s  elastic-butterfly + 15s rest\n+ 90s  elastic-butterfly + 15s rest\n+ 105s elastic-butterfly + 15s rest\n+ 120s elastic-butterfly + 15s rest\n+ 105s elastic-butterfly + 15s rest\n+ 90s  elastic-butterfly + 15s rest\n+ 75s  elastic-butterfly + 15s rest\n+ 60s  elastic-butterfly + 15s rest\n+ 45s  elastic-butterfly + 15s rest\n+ 30s  elastic-butterfly + 15s rest\n+ 15s  elastic-butterfly + 15s rest",
  "2016-10-02": "  3 * (30s high-knee + 30s butt-kicker)\n+ 60s rest\n+ 3 * (45s mountain-climbing + 15s rest)\n+ 60s rest\n+ 3 * (  25s lunge + 5s rest\n       + 25s squat + 5s rest)\n+ 60s rest\n+ 6 * (20s burpee-pushup + 10s rest)\n+ 60s rest\n+ 6 * (  25s flutter-kick + 5s rest\n       + 25s superman-plank + 5s rest)\n+ 60s rest\n+\n  (  45s arm-circle-large-1\n   + 45s arm-circle-large-2\n   + 45s arm-circle-small-1\n   + 45s arm-circle-small-2)\n+ 60s rest\n+ 3 * (  25s dip + 5s rest\n       + 25s pushup-plank-low + 5s rest)\n+ 60s rest\n+ 3 * (  25s dip + 5s rest\n       + 25s pushup-serratus + 5s rest)\n+ 60s rest\n+ 180s elastic-butterfly\n+ 60s rest\n+ 180s elastic-butterfly",
  "2016-10-11": "3 * (30s butt-kicker + 30s high-knee) +\n3 * (25s burpee-1 + 5s rest +\n     25s burpee-2 + 5s rest) +\n30s arm-circle-large-forward +\n30s arm-circle-large-backward +\n30s arm-circle-small-forward +\n30s arm-circle-small-backward +\n2 * (60s elastic-butterfly +\n     60s elastic-row +\n     30s rest +\n     60s elastic-butterfly +\n     60s elastic-uprow +\n     30s rest) +\n2 * (60s elastic-butterfly +\n     60s elastic-rotator-internal-left +\n     30s rest +\n     60s elastic-butterfly +\n     60s elastic-rotator-internal-right +\n     30s rest) +\n2 * (60s elastic-butterfly +\n     60s elastic-rotator-external-left +\n     30s rest +\n     60s elastic-butterfly +\n     60s elastic-rotator-external-right +\n     30s rest) +\n2 * (180s elastic-butterfly + 60s rest)",
  "2016-10-16": "30s arm-circle-large-forward +\n30s arm-circle-large-backward +\n30s arm-circle-small-forward +\n30s arm-circle-small-backward +\n30s shoulder-circle-forward +\n30s shoulder-circle-backward +\n2 * (30s butt-kicker + 30s high-knee) +\n2 * (25s burpee-1 + 5s rest +\n     25s burpee-2 + 5s rest) +\n4 * (60s elastic-butterfly              + 5s rest +\n     30s elastic-rotator-internal-left  + 5s rest +\n     30s elastic-rotator-external-left  + 5s rest +\n     60s elastic-butterfly              + 5s rest +\n     30s elbow-plank-left               + 5s rest +\n     30s pushup-plank-left              + 5s rest +\n     60s rest +\n     60s elastic-butterfly              + 5s rest +\n     30s elastic-rotator-internal-right + 5s rest +\n     30s elastic-rotator-external-right + 5s rest +\n     60s elastic-butterfly              + 5s rest +\n     30s elbow-plank-right              + 5s rest +\n     30s pushup-plank-right             + 5s rest +\n     60s rest)",
  "2016-10-18": "3 * (30s butt-kicker + 30s high-knee) +\n60s rest +\n3 * (45s mountain-climbing + 15s rest) +\n60s rest +\n3 * (22s burpee-1 + 8s rest +\n     22s burpee-2 + 8s rest) +\n60s rest +\n3 * (22s burpee + 8s rest +\n     22s burpee-pushup + 8s rest) +\n60s rest +\n3 * (45s elbow-plank-front + 15s rest) +\n60s rest +\n3 * (45s superman-plank + 15s rest) +\n60s rest +\n3 * (30s elbow-plank-left + 30s elbow-plank-right) +\n60s rest +\n6 * (5 dip in 15s + 3 pushup-serratus in 15s) +\n60s rest +\n6 * (5 dip in 15s + 3 pushup-close in 15s) +\n60s rest +\n6 * (5 dip in 15s + 3 pushup-large in 15s)",
  "2016-10-20": "60s arm-circle-small-backward +\n30s arm-circle-large-backward +\n60s arm-circle-small-forward +\n30s arm-circle-large-forward +\n60s rest +\n3 * (30s butt-kicker + 30s high-knee) +\n60s rest +\n120s elastic-butterfly +\n60s elastic-rotator-external-left +\n30s rest +\n120s elastic-butterfly +\n60s elastic-rotator-external-right +\n30s rest +\n120s elastic-butterfly +\n60s elastic-rotator-internal-left +\n120s elastic-butterfly +\n60s elastic-rotator-internal-right +\n30s rest +\n120s elastic-butterfly +\n60s elastic-row +\n30s rest +\n120s elastic-butterfly +\n60s elastic-row +\n30s rest +\n120s elastic-butterfly +\n60s elastic-uprow +\n30s rest +\n120s elastic-butterfly +\n60s elastic-uprow +\n30s rest",
  "2016-10-25": "4 * (15s butt-kicker + 15s high-knee) +\n30s rest +\n4 * (22s mountain-climbing + 8s rest) +\n30s rest +\n4 * (22s burpee-1 + 8s rest) +\n30s rest +\n4 * (22s burpee-2 + 8s rest) +\n30s rest +\n4 * (22s burpee + 8s rest) +\n30s rest +\n4 * (22s burpee-pushup + 8s rest) +\n30s rest +\n2 * (22s walkup-right + 8s rest +\n     22s walkup-left + 8s rest) +\n30s rest +\n2 * (55s superman-alternate + 5s rest) +\n30s rest +\n4 * (22s flutter-kick + 8s rest) +\n30s rest +\n4 * (22s superman + 8s rest) +\n30s rest +\n2 * (50s lunge + 10s rest) +\n30s rest +\n4 * (22s squat + 8s rest) +\n30s rest +\n4 * (22s dip + 8s rest) +\n30s rest +\n4 * (22s pushup-serratus + 8s rest)\n\n",
  "2016-10-27": "4 * (15s butt-kicker + 15s high-knee) +\n30s rest +\n4 * (22s mountain-climbing + 8s rest) +\n30s rest +\n4 * (22s burpee + 8s rest) +\n30s rest +\n2 * (55s superman-alternate + 5s rest) +\n30s rest +\n4 * (22s superman + 8s rest) +\n30s rest +\n2 * (2 * (60s elastic-butterfly +\n          60s elastic-row) +\n     30s rest +\n     60s elastic-rotator-internal-left +\n     60s elastic-rotator-internal-right +\n     60s elastic-rotator-external-left +\n     60s elastic-rotator-external-right +\n     30s rest +\n     2 * (60s elastic-butterfly +\n          60s elastic-row) +\n     30s rest +\n     4 * (50s elastic-uprow + 10s rest) +\n     30s rest)",
  "2016-11-02": "  3 * (30s high-knee + 30s butt-kicker)\n+ 60s rest\n+ 3 * (45s mountain-climbing + 15s rest)\n+ 60s rest\n+ 3 * (  25s lunge + 5s rest\n       + 25s squat + 5s rest)\n+ 60s rest\n+ 6 * (20s burpee-pushup + 10s rest)\n+ 60s rest\n+ 6 * (  25s flutter-kick + 5s rest\n       + 25s superman-plank + 5s rest)\n+ 60s rest\n+\n  (  45s arm-circle-large-1\n   + 45s arm-circle-large-2\n   + 45s arm-circle-small-1\n   + 45s arm-circle-small-2)\n+ 60s rest\n+ 3 * (  25s dip + 5s rest\n       + 25s pushup-plank-low + 5s rest)\n+ 60s rest\n+ 3 * (  25s dip + 5s rest\n       + 25s pushup-serratus + 5s rest)\n+ 60s rest\n+ 180s elastic-butterfly\n+ 60s rest\n+ 180s elastic-butterfly\n+ 60s rest\n+ 180s elastic-butterfly\n+ 60s rest\n+ 180s elastic-butterfly\n+ 60s rest\n+ 180s elastic-butterfly",
  "2016-11-03": "30s arm-circle-large-forward +\n30s arm-circle-large-backward +\n30s arm-circle-small-forward +\n30s arm-circle-small-backward +\n30s shoulder-circle-forward +\n30s shoulder-circle-backward +\n2 * (30s butt-kicker + 30s high-knee) +\n2 * (25s burpee-1 + 5s rest +\n     25s burpee-2 + 5s rest) +\n4 * (60s elastic-butterfly              + 5s rest +\n     30s elastic-rotator-internal-left  + 5s rest +\n     30s elastic-rotator-external-left  + 5s rest +\n     60s elastic-butterfly              + 5s rest +\n     30s elbow-plank-left               + 5s rest +\n     30s pushup-plank-left              + 5s rest +\n     60s rest +\n     60s elastic-butterfly              + 5s rest +\n     30s elastic-rotator-internal-right + 5s rest +\n     30s elastic-rotator-external-right + 5s rest +\n     60s elastic-butterfly              + 5s rest +\n     30s elbow-plank-right              + 5s rest +\n     30s pushup-plank-right             + 5s rest +\n     60s rest)",
  "2016-11-04": "  3 * (30s high-knee + 30s butt-kicker)\n+ 60s rest\n+ 3 * (45s mountain-climbing + 15s rest)\n+ 60s rest\n+ 3 * (  25s lunge + 5s rest\n       + 25s squat + 5s rest)\n+ 60s rest\n+ 6 * (20s burpee-pushup + 10s rest)\n+ 60s rest\n+ 6 * (  25s flutter-kick + 5s rest\n       + 25s superman-plank + 5s rest)\n+ 60s rest\n+\n  (  45s arm-circle-large-1\n   + 45s arm-circle-large-2\n   + 45s arm-circle-small-1\n   + 45s arm-circle-small-2)\n+ 60s rest\n+ 3 * (  25s dip + 5s rest\n       + 25s pushup-plank-low + 5s rest)\n+ 60s rest\n+ 3 * (  25s dip + 5s rest\n       + 25s pushup-serratus + 5s rest)\n+ 60s rest\n+ 180s elastic-butterfly\n+ 60s rest\n+ 180s elastic-butterfly\n+ 60s rest\n+ 180s elastic-butterfly\n+ 60s rest\n+ 180s elastic-butterfly",
  "2016-11-10": "3 * (30s butt-kicker + 30s high-knee) +\n60s rest +\n3 * (45s mountain-climbing + 15s rest) +\n60s rest +\n3 * (22s burpee-1 + 8s rest +\n     22s burpee-2 + 8s rest) +\n60s rest +\n3 * (22s burpee + 8s rest +\n     22s burpee-pushup + 8s rest) +\n60s rest +\n3 * (45s elbow-plank-front + 15s rest) +\n60s rest +\n3 * (45s superman-plank + 15s rest) +\n60s rest +\n3 * (30s elbow-plank-left + 30s elbow-plank-right) +\n60s rest +\n6 * (5 dip in 15s + 3 pushup-serratus in 15s) +\n60s rest +\n6 * (5 dip in 15s + 3 pushup-close in 15s) +\n60s rest +\n6 * (5 dip in 15s + 3 pushup-large in 15s)",
  "2016-11-15": "  30s arm-circle-large-forward\n+ 30s arm-circle-large-backward\n+ 30s arm-circle-small-forward\n+ 30s arm-circle-small-backward\n+ 6 * (22s burpee + 8s rest)\n+ 60s rest\n+ 4 * (  60s elastic-butterfly\n       + 10s rest\n       + 30s elastic-rotator-internal-left\n       + 10s rest\n       + 60s elastic-butterfly\n       + 10s rest\n       + 30s elastic-rotator-internal-right\n       + 10s rest\n       + 60s elastic-butterfly\n       + 10s rest\n       + 30s elastic-rotator-external-left\n       + 10s rest\n       + 60s elastic-butterfly\n       + 10s rest\n       + 30s elastic-rotator-external-right)",
  "2016-11-22": "3 * (30s arm-circle-large-forward +\n     5s rest +\n     30s arm-circle-large-backward +\n     5s rest) +\n3 * (30s arm-circle-small-forward +\n     5s rest +\n     30s arm-circle-small-backward +\n     5s rest) +\n60s rest +\n2 * (3 * (30s elbow-plank-front +\n          5s rest +\n          30s elbow-plank-back +\n          5s rest) +\n     60s rest +\n     3 * (30s elbow-plank-left +\n          5s rest +\n          30s elbow-plank-right +\n          5s rest) +\n     60s rest +\n     3 * (30s superman-alternate +\n          5s rest +\n          30s superman +\n          5s rest +\n          30s superman-alternate +\n          5s rest +\n          30s superman-plank) +\n     60s rest)\n",
  "2016-11-27": "  30s arm-circle-large-forward\n+ 30s arm-circle-large-backward\n+ 30s arm-circle-small-forward\n+ 30s arm-circle-small-backward\n+ 6 * (22s burpee + 8s rest)\n+ 60s rest\n+ 4 * (  60s elastic-butterfly\n       + 10s rest\n       + 30s elastic-rotator-internal-left\n       + 10s rest\n       + 60s elastic-row\n       + 10s rest\n       + 30s elastic-rotator-internal-right\n       + 10s rest\n       + 60s elastic-butterfly\n       + 10s rest\n       + 30s elastic-rotator-external-left\n       + 10s rest\n       + 60s elastic-row\n       + 10s rest\n       + 30s elastic-rotator-external-right)",
  "2016-12-06": "4 * (2 * (45s elbow-plank-front + 15s rest +\n          45s elbow-plank-back + 15s rest) +\n     4 * (45s elastic-butterfly + 15s rest) +\n     2 * (45s elbow-plank-left + 15s rest +\n          45s elbow-plank-right + 15s rest))",
  "2017-01-04": "4 * (30s high-knee +\n     30s elbow-plank-front +\n     30s squat +\n     30s elbow-plank-back +\n     30s burpee) +\n4 * (60s rest +\n     30s pushup-serratus +\n     30s elastic-row +\n     60s elastic-butterfly +\n     30s elastic-rotator-internal-right +\n     30s elastic-rotator-internal-left +\n     60s rest +\n     30s pushup-serratus +\n     30s elastic-row +\n     60s elastic-butterfly +\n     30s elastic-rotator-external-right +\n     30s elastic-rotator-external-left)",
  "2017-01-10": "4 * (30s high-knee +\n     30s butt-kicker +\n     30s burpee-1 +\n     30s burpee-2 +\n     30s pushup-serratus +\n     30s flutter-kick +\n     30s rest)  +\n120s rest +\n4 *  (45s elastic-butterfly + 15s rest +\n      45s superman-plank + 15s rest +\n      45s elastic-row + 15s rest +\n      45s superman + 15s rest +\n      45s flutter-kick + 15s rest +\n      45s dip + 15s rest)",
  "2017-01-15": "30s arm-circle-large-forward +\n30s arm-circle-large-backward +\n30s arm-circle-small-forward +\n30s arm-circle-small-backward +\n2 * (2 * (30s elastic-rotator-internal-left +\n          30s elastic-rotator-internal-right +\n          30s elastic-rotator-external-left +\n          30s elastic-rotator-external-right) +\n     4 * (180s elastic-butterfly + 60s rest) +\n     4 * (60s elastic-row + 30s rest) +\n     6 * (20s pushup-serratus + 10s rest))",
  "2017-01-17": "30s high-knee +\n30s butt-kicker +\n30s lunge +\n30s mountain-climbing +\n30s burpee-1 +\n30s burpee-2 +\n30s squat +\n60s rest +\n6 * (30s elbow-plank-left +\n     30s elbow-plank-right +\n     30s elbow-plank-left +\n     30s elbow-plank-right +\n     30s rest +\n     180s elastic-butterfly +\n     30s rest +\n     30s pushup-plank-arm-left +\n     30s pushup-plank-arm-right +\n     30s pushup-plank-leg-left +\n     30s pushup-plank-leg-right)",
  "2017-01-24": "30s arm-circle-large-forward +\n30s arm-circle-large-backward +\n30s arm-circle-small-forward +\n30s arm-circle-small-backward +\n30s burpee-1 +\n30s burpee-2 +\n30s burpee +\n30s rest +\n4 * (30s flutter-kick +\n     60s elbow-plank-left +\n     90s superman-alternate +\n     120s elastic-butterfly +\n     60s rest +\n     30s flutter-kick +\n     60s elbow-plank-right +\n     90s superman-alternate +\n     120s elastic-butterfly +\n     60s rest) +\n240s elastic-butterfly +\n60s rest +\n240s elastic-butterfly",
  "2017-02-04": "$warmup2() +\n$rotator1(5) +\n$butterfly1(10)",
  "2017-02-28": "30s arm-circle-large-forward +\n30s arm-circle-large-backward +\n30s arm-circle-small-forward +\n30s arm-circle-small-backward +\n30s burpee-1 +\n30s mountain-climbing +\n30s burpee-2 +\n30s mountain-climbing +\n30s burpee +\n30s rest +\n10 * (10 pull-over in 30s +\n      5 dumbbell-row-left in 15s + \n      5 dumbbell-row-right in 15s +\n      5 dumbbell-row-left in 15s + \n      5 dumbbell-row-right in 15s +\n      10 bench-press in 30s +\n      10 pull-down in 30s +\n      10 dumbbell-lateral-raise in 30s +\n      10 pull-down in 30s +\n      10 ab-wheel in 30s)",
  "2017-03-15": "30s arm-circle-large-forward +\n30s arm-circle-large-backward +\n30s arm-circle-small-forward +\n30s arm-circle-small-backward +\n30s burpee-1 +\n30s mountain-climbing +\n30s burpee-2 +\n30s mountain-climbing +\n30s burpee +\n30s rest +\n10 * (15 pull-over in 45s +\n      15 bench-press in 45s +\n      15 pull-down in 45s +\n      15 row in 45s +\n      15 dumbbell-lateral-raise in 45s +\n      15 ab-wheel in 45s)"
};
},{}]},{},[5]);

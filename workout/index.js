
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

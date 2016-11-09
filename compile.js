
var Fs = require("fs");

var ordering = ["schedule", "inscription", "startlist", "result"];
function sort (x, y) { return ordering.indexOf(x.split(".")[0]) > ordering.indexOf(y.split(".")[0]) }

function clean (filename) { return filename !== ".DS_Store" }

var compets = {};
Fs.readdirSync(__dirname+"/compet").filter(clean).forEach(function (filename) {
  var parts = /^([0-9]{4}-[0-9]{2}-[0-9]{2}) (.*)$/.exec(filename);
  if (parts === null) {
    process.stderr.write("Wrong competition format: "+filename+"\n");
    process.exit(1);
  }
  compets[parts[1]] = {
    name: parts[2],
    docs: Fs.readdirSync(__dirname+"/compet/"+filename).filter(clean).sort(sort)
  };
});

var workouts = {};
Fs.readdirSync(__dirname+"/workout").filter(clean).forEach(function (filename) {
  workouts[filename.split(".")[0]] = Fs.readFileSync(__dirname+"/workout/"+filename, "utf8");
});

var bundle = [
  Fs.readFileSync(__dirname+"/workout.js", "utf8").replace("@WORKOUTS", function () { return JSON.stringify(workouts, null, 2) }),
  Fs.readFileSync(__dirname+"/compet.js", "utf8").replace("@COMPETS", function () { return JSON.stringify(compets, null, 2) }),
  Fs.readFileSync(__dirname+"/calendar.js", "utf8")
].join("\n");

Fs.writeFileSync(__dirname+"/bundle.js", bundle, "utf8");


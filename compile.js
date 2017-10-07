
var Fs = require("fs");
var Browserify = require("browserify");
var RecursiveReaddir = require("recursive-readdir");
var Season = require("./season.js");

function clean (filename) { return filename !== ".DS_Store" }

function collect (path) {
  var data = {};
  Fs.readdirSync(path).filter(clean).forEach(function (filename) {
    data[filename.replace(/\.[a-z]+$/, "")] = Fs.readFileSync(path+"/"+filename, "utf8");
  });
  return data;
}

Fs.writeFileSync(__dirname+"/workout/templates.js", "module.exports = "+JSON.stringify(collect(__dirname+"/workout/templates"), null, 2)+";", "utf8");
Fs.writeFileSync(__dirname+"/workout/workouts.js", "module.exports = "+JSON.stringify(collect(__dirname+"/workout/workouts"), null, 2)+";", "utf8");

(function (compets) {
  Fs.readdirSync(__dirname+"/compet/"+Season).filter(clean).forEach(function (filename) {
    var parts = /^([0-9]{4}-[0-9]{2}-[0-9]{2}) (.*)$/.exec(filename);
    if (parts === null)
      throw "Wrong competition format: "+filename+"\n";
    compets[parts[1]] = {
      name: parts[2],
      docs: Fs.readdirSync(__dirname+"/compet/"+Season+"/"+filename).filter(clean)
    };
  });
  Fs.writeFileSync(__dirname+"/compets.js", "module.exports = "+JSON.stringify(compets, null, 2)+";", "utf8");
} ({}));

 
RecursiveReaddir(__dirname+"/document", [".DS_Store"], function (err, files) {
  if (err)
    throw err;
  for (var i=0; i<files.length; i++)
    files[i] = files[i].substring(__dirname.length+1);
  Fs.writeFileSync(__dirname+"/documents.js", "module.exports = "+JSON.stringify(files, null, 2)+";", "utf8");
  Browserify().add(__dirname+"/main.js").bundle().pipe(Fs.createWriteStream("./script.js"));
});

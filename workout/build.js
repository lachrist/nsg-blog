
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

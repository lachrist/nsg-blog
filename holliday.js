
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

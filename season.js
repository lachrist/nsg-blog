
var augustus = 7; 
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();

if (month >= augustus)
  module.exports = year+"-"+(year+1)
else
  module.exports = (year-1)+"-"+year

window.onload = function () {
  var cache = {};
  (function () {
    var elements = document.getElementsByTagName("*");
    for (var i=0; i<elements.length; i++)
      elements[i].id && (cache[elements[i].id] = elements[i]);
  } ());
  function A (innerText, href) {
    var a = document.createElement("a");
    a.innerText = innerText;
    a.href = href;
    return a;
  }
  function link (innerText, href, cb) {
    var req = new XMLHttpRequest();
    req.addEventListener("load", function () { (req.status === 200) && cb(A(innerText, href)) });
    req.open("HEAD", href);
    req.send();
  }
  var compets = {
    "2016-10-08": "BCBW I",
    "2016-10-09": "BCBW II",
    "2016-10-15": "Gosselie I",
    "2016-10-16": "Gosselie II",
    "2016-10-22": "BCBW III",
    "2016-10-23": "BCBW VI",
    "2016-11-05": "Burny I",
    "2016-11-06": "Burny II",
    "2016-11-19": "Richard Anis I",
    "2016-11-20": "Richard Anis II"
  }
  Object.keys(compets).sort().forEach(function (date) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = date;
    tr.appendChild(td1);
    var td2 = document.createElement("td");
    td2.innerText = compets[date];
    tr.appendChild(td2);
    var td3 = document.createElement("td");
    link("Schedule", "schedule/"+date+".pdf", function (a) { td3.appendChild(a) });
    tr.appendChild(td3);
    var td4 = document.createElement("td");
    link("Startlist", "startlist/"+date+".pdf", function (a) { td4.appendChild(a) });
    tr.appendChild(td4);
    var td5 = document.createElement("td");
    link("Result", "result/"+date+".pdf", function (a) { td5.appendChild(a) });
    tr.appendChild(td5);
    cache.compets.appendChild(tr);
  });
};
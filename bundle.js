
window.Workout = (function (workouts) {

  return function workout (date, div) {
    if (date in workouts) {
      var a = document.createElement("a");
      a.textContent = "Muscu";
      a.className = "workout";
      a.href = workouts[date];
      div.appendChild(a);
    }
  }

} ({
  "2016-09-10": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=%20%203%20*%20(45s%20mountain-climbing%20%2B%2015s%20rest)%0A%2B%2060s%20rest%0A%2B%206%20*%20(20s%20burpee%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(45s%20plank-front%20%2B%2015s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(30s%20plank-left%20%2B%2030s%20plank-right)%0A%2B%2060s%20rest%0A%2B%203%20*%20(30s%20plank-front%20%2B%2030s%20plank-back)%0A%2B%2060s%20rest%0A%2B%203%20*%20(20s%20plank-leg-left%20%2B%2010s%20rest%20%2B%2020s%20plank-leg-right%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%206%20*%20(3%20pushup-close%20in%2015s%20%2B%203%20pushup-large%20in%2015s)%0A%2B%2060s%20rest%0A%2B%203%20*%20(45s%20elastic-butterfly%20%2B%2015s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(45s%20elastic-butterfly%20%2B%2015s%20rest)",
  "2016-09-13": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=%20%203%20*%20(30s%20butt-kicker%20%2B%2030s%20high-knee)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2020s%20mountain-climbing%20%2B%2010s%20rest%0A%20%20%20%20%20%20%20%2B%2020s%20burpee%20%20%20%20%20%20%20%20%20%20%20%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%20%2020s%20burpee-1%20%2B%2010s%20rest%0A%20%20%20%20%20%20%20%20%2B%2020s%20burpee-2%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%2012%20*%20(4%20squat%20in%2015s)%0A%2B%2060s%20rest%0A%2B%203%20*%20(40s%20plank-front%20%2B%2020s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(30s%20plank-left%20%2B%2030s%20plank-right)%0A%2B%2060s%20rest%0A%2B%206%20*%20(3%20pushup-close%20in%2015s%20%2B%203%20pushup-large%20in%2015s)%0A%2B%2060s%20rest%0A%2B%203%20*%20(45s%20elastic-butterfly%20%2B%2015s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(45s%20elastic-butterfly%20%2B%2015s%20rest)",
  "2016-09-20": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=%20%203%20*%20(30s%20butt-kicker%20%2B%2030s%20high-knee)%0A%2B%203%20*%20(45s%20mountain-climbing%20%2B%2015s%20rest)%0A%2B%209%20*%20(4%20burpee-pushup%20in%2020s)%0A%2B%2015s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2030s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2045s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2060s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2075s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2090s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%20105s%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%20120s%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%20105s%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2090s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2075s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2060s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2045s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2030s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2015s%20%20elastic-butterfly%20%2B%2015s%20rest",
  "2016-09-22": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=%20%203%20*%20(30s%20butt-kicker%20%2B%2030s%20high-knee)%0A%2B%2060s%20rest%0A%2B%203%20*%20(45s%20mountain-climbing%20%2B%2015s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2020s%20burpee-1%20%2B%2010s%20rest%0A%20%20%20%20%20%20%20%2B%2020s%20burpee-2%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2020s%20lunge%20%2B%2010s%20rest%0A%20%20%20%20%20%20%20%2B%2020s%20squat%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2012s%20pushup-plank-high%0A%20%20%20%20%20%20%20%2B%2012s%20pushup-plank-left%0A%20%20%20%20%20%20%20%2B%2012s%20pushup-plank-right%0A%20%20%20%20%20%20%20%2B%2012s%20pushup-plank-back%0A%20%20%20%20%20%20%20%2B%2012s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2012s%20elbow-plank-front%0A%20%20%20%20%20%20%20%2B%2012s%20elbow-plank-left%0A%20%20%20%20%20%20%20%2B%2012s%20elbow-plank-right%0A%20%20%20%20%20%20%20%2B%2012s%20elbow-plank-back%0A%20%20%20%20%20%20%20%2B%2012s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2012s%20pushup-plank-arm-left%0A%20%20%20%20%20%20%20%2B%2012s%20pushup-plank-arm-right%0A%20%20%20%20%20%20%20%2B%2012s%20pushup-plank-leg-left%0A%20%20%20%20%20%20%20%2B%2012s%20pushup-plank-leg-right%0A%20%20%20%20%20%20%20%2B%2012s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(40s%20superman-plank%20%2B%2020s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2020s%20walkup-left%20%2B%2010s%20rest%0A%20%20%20%20%20%20%20%2B%2020s%20walkup-right%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2020s%20superman%20%2B%2010s%20rest%0A%20%20%20%20%20%20%20%2B%2020s%20superman-alternate%20%2B%2010s%20rest)%0A%2B%2060s%20rest",
  "2016-09-27": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=%20%20(%20%2045s%20arm-circle-large-1%0A%20%20%20%2B%2045s%20arm-circle-large-2%0A%20%20%20%2B%2045s%20arm-circle-small-1%0A%20%20%20%2B%2045s%20arm-circle-small-2)%0A%2B%2060s%20rest%0A%2B%203%20*%2045s%20mountain-climbing%0A%2B%2060s%20rest%0A%2B%206%20*%20(20s%20burpee-pushup%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2020s%20walkup-right%20%2B%2010s%20rest%0A%20%20%20%20%20%20%20%2B%2020s%20walkup-left%20%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%206%20*%20(20s%20superman%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%2012%20*%20(3%20pushup-serratus%20in%2015s)%0A%2B%2060s%20rest%0A%2B%2012%20*%20(5%20elastic-row%20in%2015s)%0A%2B%2060s%20rest%0A%2B%2012%20*%20(5%20elastic-uprow%20in%2015s)%0A%2B%20180s%20elastic-butterfly%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly",
  "2016-09-29": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=%20%203%20*%20(30s%20butt-kicker%20%2B%2030s%20high-knee)%0A%2B%203%20*%20(45s%20mountain-climbing%20%2B%2015s%20rest)%0A%2B%209%20*%20(4%20burpee-pushup%20in%2020s)%0A%2B%2015s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2030s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2045s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2060s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2075s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2090s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%20105s%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%20120s%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%20105s%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2090s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2075s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2060s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2045s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2030s%20%20elastic-butterfly%20%2B%2015s%20rest%0A%2B%2015s%20%20elastic-butterfly%20%2B%2015s%20rest",
  "2016-10-02": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=%20%203%20*%20(30s%20high-knee%20%2B%2030s%20butt-kicker)%0A%2B%2060s%20rest%0A%2B%203%20*%20(45s%20mountain-climbing%20%2B%2015s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2025s%20lunge%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20squat%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%206%20*%20(20s%20burpee-pushup%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%206%20*%20(%20%2025s%20flutter-kick%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20superman-plank%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%0A%20%20(%20%2045s%20arm-circle-large-1%0A%20%20%20%2B%2045s%20arm-circle-large-2%0A%20%20%20%2B%2045s%20arm-circle-small-1%0A%20%20%20%2B%2045s%20arm-circle-small-2)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2025s%20dip%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20pushup-plank-low%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2025s%20dip%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20pushup-serratus%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly",
  "2016-10-11": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=3%20*%20(30s%20butt-kicker%20%2B%2030s%20high-knee)%20%2B%0A3%20*%20(25s%20burpee-1%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2025s%20burpee-2%20%2B%205s%20rest)%20%2B%0A30s%20arm-circle-large-forward%20%2B%0A30s%20arm-circle-large-backward%20%2B%0A30s%20arm-circle-small-forward%20%2B%0A30s%20arm-circle-small-backward%20%2B%0A2%20*%20(60s%20elastic-butterfly%20%2B%0A%20%20%20%20%2060s%20elastic-row%20%2B%0A%20%20%20%20%2030s%20rest%20%2B%0A%20%20%20%20%2060s%20elastic-butterfly%20%2B%0A%20%20%20%20%2060s%20elastic-uprow%20%2B%0A%20%20%20%20%2030s%20rest)%20%2B%0A2%20*%20(60s%20elastic-butterfly%20%2B%0A%20%20%20%20%2060s%20elastic-rotator-internal-left%20%2B%0A%20%20%20%20%2030s%20rest%20%2B%0A%20%20%20%20%2060s%20elastic-butterfly%20%2B%0A%20%20%20%20%2060s%20elastic-rotator-internal-right%20%2B%0A%20%20%20%20%2030s%20rest)%20%2B%0A2%20*%20(60s%20elastic-butterfly%20%2B%0A%20%20%20%20%2060s%20elastic-rotator-external-left%20%2B%0A%20%20%20%20%2030s%20rest%20%2B%0A%20%20%20%20%2060s%20elastic-butterfly%20%2B%0A%20%20%20%20%2060s%20elastic-rotator-external-right%20%2B%0A%20%20%20%20%2030s%20rest)%20%2B%0A2%20*%20(180s%20elastic-butterfly%20%2B%2060s%20rest)",
  "2016-10-16": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=30s%20arm-circle-large-forward%20%2B%0A30s%20arm-circle-large-backward%20%2B%0A30s%20arm-circle-small-forward%20%2B%0A30s%20arm-circle-small-backward%20%2B%0A30s%20shoulder-circle-forward%20%2B%0A30s%20shoulder-circle-backward%20%2B%0A2%20*%20(30s%20butt-kicker%20%2B%2030s%20high-knee)%20%2B%0A2%20*%20(25s%20burpee-1%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2025s%20burpee-2%20%2B%205s%20rest)%20%2B%0A4%20*%20(60s%20elastic-butterfly%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elastic-rotator-internal-left%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elastic-rotator-external-left%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2060s%20elastic-butterfly%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elbow-plank-left%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20pushup-plank-left%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2060s%20rest%20%2B%0A%20%20%20%20%2060s%20elastic-butterfly%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elastic-rotator-internal-right%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elastic-rotator-external-right%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2060s%20elastic-butterfly%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elbow-plank-right%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20pushup-plank-right%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2060s%20rest)",
  "2016-10-18": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=3%20*%20(30s%20butt-kicker%20%2B%2030s%20high-knee)%20%2B%0A60s%20rest%20%2B%0A3%20*%20(45s%20mountain-climbing%20%2B%2015s%20rest)%20%2B%0A60s%20rest%20%2B%0A3%20*%20(22s%20burpee-1%20%2B%208s%20rest%20%2B%0A%20%20%20%20%2022s%20burpee-2%20%2B%208s%20rest)%20%2B%0A60s%20rest%20%2B%0A3%20*%20(22s%20burpee%20%2B%208s%20rest%20%2B%0A%20%20%20%20%2022s%20burpee-pushup%20%2B%208s%20rest)%20%2B%0A60s%20rest%20%2B%0A3%20*%20(45s%20elbow-plank-front%20%2B%2015s%20rest)%20%2B%0A60s%20rest%20%2B%0A3%20*%20(45s%20superman-plank%20%2B%2015s%20rest)%20%2B%0A60s%20rest%20%2B%0A3%20*%20(30s%20elbow-plank-left%20%2B%2030s%20elbow-plank-right)%20%2B%0A60s%20rest%20%2B%0A6%20*%20(5%20dip%20in%2015s%20%2B%203%20pushup-serratus%20in%2015s)%20%2B%0A60s%20rest%20%2B%0A6%20*%20(5%20dip%20in%2015s%20%2B%203%20pushup-close%20in%2015s)%20%2B%0A60s%20rest%20%2B%0A6%20*%20(5%20dip%20in%2015s%20%2B%203%20pushup-large%20in%2015s)",
  "2016-10-20": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=60s%20arm-circle-small-backward%20%2B%0A30s%20arm-circle-large-backward%20%2B%0A60s%20arm-circle-small-forward%20%2B%0A30s%20arm-circle-large-forward%20%2B%0A60s%20rest%20%2B%0A3%20*%20(30s%20butt-kicker%20%2B%2030s%20high-knee)%20%2B%0A60s%20rest%20%2B%0A120s%20elastic-butterfly%20%2B%0A60s%20elastic-rotator-external-left%20%2B%0A30s%20rest%20%2B%0A120s%20elastic-butterfly%20%2B%0A60s%20elastic-rotator-external-right%20%2B%0A30s%20rest%20%2B%0A120s%20elastic-butterfly%20%2B%0A60s%20elastic-rotator-internal-left%20%2B%0A120s%20elastic-butterfly%20%2B%0A60s%20elastic-rotator-internal-right%20%2B%0A30s%20rest%20%2B%0A120s%20elastic-butterfly%20%2B%0A60s%20elastic-row%20%2B%0A30s%20rest%20%2B%0A120s%20elastic-butterfly%20%2B%0A60s%20elastic-row%20%2B%0A30s%20rest%20%2B%0A120s%20elastic-butterfly%20%2B%0A60s%20elastic-uprow%20%2B%0A30s%20rest%20%2B%0A120s%20elastic-butterfly%20%2B%0A60s%20elastic-uprow%20%2B%0A30s%20rest",
  "2016-10-25": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=4%20*%20(15s%20butt-kicker%20%2B%2015s%20high-knee)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20mountain-climbing%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20burpee-1%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20burpee-2%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20burpee%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20burpee-pushup%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A2%20*%20(22s%20walkup-right%20%2B%208s%20rest%20%2B%0A%20%20%20%20%2022s%20walkup-left%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A2%20*%20(55s%20superman-alternate%20%2B%205s%20rest)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20flutter-kick%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20superman%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A2%20*%20(50s%20lunge%20%2B%2010s%20rest)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20squat%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20dip%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20pushup-serratus%20%2B%208s%20rest)%0A%0A",
  "2016-10-27": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=4%20*%20(15s%20butt-kicker%20%2B%2015s%20high-knee)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20mountain-climbing%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20burpee%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A2%20*%20(55s%20superman-alternate%20%2B%205s%20rest)%20%2B%0A30s%20rest%20%2B%0A4%20*%20(22s%20superman%20%2B%208s%20rest)%20%2B%0A30s%20rest%20%2B%0A2%20*%20(2%20*%20(60s%20elastic-butterfly%20%2B%0A%20%20%20%20%20%20%20%20%20%2060s%20elastic-row)%20%2B%0A%20%20%20%20%2030s%20rest%20%2B%0A%20%20%20%20%2060s%20elastic-rotator-internal-left%20%2B%0A%20%20%20%20%2060s%20elastic-rotator-internal-right%20%2B%0A%20%20%20%20%2060s%20elastic-rotator-external-left%20%2B%0A%20%20%20%20%2060s%20elastic-rotator-external-right%20%2B%0A%20%20%20%20%2030s%20rest%20%2B%0A%20%20%20%20%202%20*%20(60s%20elastic-butterfly%20%2B%0A%20%20%20%20%20%20%20%20%20%2060s%20elastic-row)%20%2B%0A%20%20%20%20%2030s%20rest%20%2B%0A%20%20%20%20%204%20*%20(50s%20elastic-uprow%20%2B%2010s%20rest)%20%2B%0A%20%20%20%20%2030s%20rest)",
  "2016-11-02": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=%20%203%20*%20(30s%20high-knee%20%2B%2030s%20butt-kicker)%0A%2B%2060s%20rest%0A%2B%203%20*%20(45s%20mountain-climbing%20%2B%2015s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2025s%20lunge%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20squat%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%206%20*%20(20s%20burpee-pushup%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%206%20*%20(%20%2025s%20flutter-kick%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20superman-plank%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%0A%20%20(%20%2045s%20arm-circle-large-1%0A%20%20%20%2B%2045s%20arm-circle-large-2%0A%20%20%20%2B%2045s%20arm-circle-small-1%0A%20%20%20%2B%2045s%20arm-circle-small-2)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2025s%20dip%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20pushup-plank-low%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2025s%20dip%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20pushup-serratus%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly",
  "2016-11-03": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=30s%20arm-circle-large-forward%20%2B%0A30s%20arm-circle-large-backward%20%2B%0A30s%20arm-circle-small-forward%20%2B%0A30s%20arm-circle-small-backward%20%2B%0A30s%20shoulder-circle-forward%20%2B%0A30s%20shoulder-circle-backward%20%2B%0A2%20*%20(30s%20butt-kicker%20%2B%2030s%20high-knee)%20%2B%0A2%20*%20(25s%20burpee-1%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2025s%20burpee-2%20%2B%205s%20rest)%20%2B%0A4%20*%20(60s%20elastic-butterfly%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elastic-rotator-internal-left%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elastic-rotator-external-left%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2060s%20elastic-butterfly%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elbow-plank-left%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20pushup-plank-left%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2060s%20rest%20%2B%0A%20%20%20%20%2060s%20elastic-butterfly%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elastic-rotator-internal-right%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elastic-rotator-external-right%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2060s%20elastic-butterfly%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20elbow-plank-right%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2030s%20pushup-plank-right%20%20%20%20%20%20%20%20%20%20%20%20%20%2B%205s%20rest%20%2B%0A%20%20%20%20%2060s%20rest)",
  "2016-11-04": "http://cdn.rawgit.com/lachrist/abi-dalzim/661d8a3368d524665d8776d9905d295fc129bad7/index.html?set=%20%203%20*%20(30s%20high-knee%20%2B%2030s%20butt-kicker)%0A%2B%2060s%20rest%0A%2B%203%20*%20(45s%20mountain-climbing%20%2B%2015s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2025s%20lunge%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20squat%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%206%20*%20(20s%20burpee-pushup%20%2B%2010s%20rest)%0A%2B%2060s%20rest%0A%2B%206%20*%20(%20%2025s%20flutter-kick%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20superman-plank%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%0A%20%20(%20%2045s%20arm-circle-large-1%0A%20%20%20%2B%2045s%20arm-circle-large-2%0A%20%20%20%2B%2045s%20arm-circle-small-1%0A%20%20%20%2B%2045s%20arm-circle-small-2)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2025s%20dip%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20pushup-plank-low%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%203%20*%20(%20%2025s%20dip%20%2B%205s%20rest%0A%20%20%20%20%20%20%20%2B%2025s%20pushup-serratus%20%2B%205s%20rest)%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly%0A%2B%2060s%20rest%0A%2B%20180s%20elastic-butterfly"
}));


window.Compet = (function (compets) {

  var translations = {
    "schedule": "Horaire",
    "inscription": "Inscriptions",
    "startlist": "Départs",
    "result": "Résultats"
  };

  function translate (word) { return translations[word] || word }

  return function (date, div1) {
    if (date in compets) {
      var div2 = document.createElement("div");
      div2.className = "compet";
      div2.textContent = compets[date].name;
      compets[date].docs.forEach(function (doc) {
        var a = document.createElement("a");
        a.textContent = translate(doc.split(".")[0])+"["+doc.split(".")[1]+"]";
        a.href = "compet/"+date+" "+compets[date].name+"/"+doc;
        div2.appendChild(a);
      });
      div1.appendChild(div2);
    }
  }

} ({
  "2016-10-08": {
    "name": "BCBW I",
    "docs": [
      "schedule.pdf",
      "startlist.pdf",
      "result.lxf",
      "result.pdf"
    ]
  },
  "2016-10-09": {
    "name": "BCBW II",
    "docs": [
      "schedule.pdf",
      "startlist.pdf",
      "result.lxf",
      "result.pdf"
    ]
  },
  "2016-10-22": {
    "name": "BCBW III",
    "docs": [
      "schedule.pdf",
      "startlist.pdf",
      "result.lxf",
      "result.pdf"
    ]
  },
  "2016-10-23": {
    "name": "BCBW IV",
    "docs": [
      "schedule.pdf",
      "startlist.pdf",
      "result.lxf",
      "result.pdf"
    ]
  },
  "2016-11-19": {
    "name": "Richard Anis I",
    "docs": [
      "schedule.pdf"
    ]
  },
  "2016-11-20": {
    "name": "Richard Anis II",
    "docs": [
      "schedule.pdf"
    ]
  },
  "2016-11-25": {
    "name": "BCBW Relais I",
    "docs": []
  },
  "2016-12-02": {
    "name": "BCBW Relais II",
    "docs": []
  },
  "2016-12-27": {
    "name": "Laatste Kans",
    "docs": [
      "schedule.pdf"
    ]
  },
  "2017-01-08": {
    "name": "Frank Pepermans",
    "docs": [
      "schedule.pdf"
    ]
  }
}));

window.addEventListener("load", function () {

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


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

} (@WORKOUTS));

// Fills every element marked with class "today" with the current date (yyyy/mm/dd).
(function () {
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  var d = new Date();
  var s = d.getFullYear() + "/" + pad(d.getMonth() + 1) + "/" + pad(d.getDate());
  var els = document.getElementsByClassName("today");
  for (var i = 0; i < els.length; i++) {
    els[i].textContent = s;
  }
})();

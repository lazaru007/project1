var shownPageId = "";
window.onload = function () {
  document.getElementById("home").classList.remove("hidden");
  shownPageId = "home";
};

function showPage(newPageID) {
  document.getElementById(shownPageId).classList.add("hidden");
  document.getElementById(newPageID).classList.remove("hidden");
  shownPageId = newPageID;
}

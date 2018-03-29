var menuButton = document.getElementById("menu");
menuButton.addEventListener("click", expandMenu);
document.getElementById("drop-down-menu").style.display = "none"
function expandMenu() {
  if (document.getElementById("drop-down-menu").style.display == "none") {
    document.getElementById("drop-down-menu").style.display = "inherit";
  }
  else {
    document.getElementById("drop-down-menu").style.display = "none";
  }

}

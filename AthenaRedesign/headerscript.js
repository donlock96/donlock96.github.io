var dropmenu;

window.onload = function() {
    console.log('hey');
    dropmenu = document.getElementsByClassName('drop-menu').item(0);
    dropmenu.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == dropmenu) {
        dropmenu.style.display = "none";
    }
}

var openmenu = function() {
    if (dropmenu.style.display == "none") {
        console.log('Opened the menu');
        dropmenu.style.display = "inline";
    } else {
        console.log('Closed the menu');
        dropmenu.style.display = "none";
    }
}
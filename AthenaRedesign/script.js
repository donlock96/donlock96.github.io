var schedule = [
  ["","mon","tue","wed","thu","fri"] ,
  ["8","","","","",""] ,
  ["9","","","","",""] ,
  ["10","","","","",""] ,
  ["11","","","","",""] ,
  ["12","","","","",""] ,
  ["1","","","","",""] ,
  ["2","","","","",""] ,
  ["3","","","","",""] ,
  ["4","","","","",""] ,
  ["5","","","","",""] ,
  ["6","","","","",""] ,
  ["7","","","","",""]
]

function clearSchedule() {
  var table = document.getElementById("scheduleTable");
  for (var i=1; i<12; i++) {
    for (var j=1; j<5; j++) {
      var x = table.rows[i].cells;
      x[j].innerHTML = schedule[i][j];
      if (schedule[i][j] == "") {
        x[j].style.backgroundColor = "white";
      }
    }
  }
}

function enablePrefix() {
  if (document.getElementById('term').value == 'register') {
    document.getElementById('prefix').disabled = false;
    clearSchedule();
  }
  else if(document.getElementById('term').value == 'Sp18') {
    location.reload();
  }
  else {
    document.getElementById('prefix').disabled = true;
  }
}

function disableCourse() {
  document.getElementById('CSCI').style.display = "none";
  document.getElementById('AAEC').style.display = "none";
}

function enableCourse() {

  if (document.getElementById('prefix').value == 'CSCI') {
    disableCourse();
    document.getElementById('CSCI').disabled = false;
    document.getElementById('CSCI').style.display = "block";
  }
  else if (document.getElementById('prefix').value == 'AAEC') {
    disableCourse();
    document.getElementById('AAEC').style.display = "block";
  }
  else {
    disableCourse();
    document.getElementById('CSCI').disabled = true;
    document.getElementById('CSCI').style.display = "block";
  }
}

function hideClasses() {
  document.getElementById("CSCI2720").style.display = "none";
  document.getElementById("CSCI3030").style.display = "none";
  document.getElementById("CSCI3360").style.display = "none";
  document.getElementById("CSCI4060").style.display = "none";
  document.getElementById("AAEC2580").style.display = "none";
  document.getElementById("AAEC3690").style.display = "none";
}

function showClasses(id) {
  if (id.value == '2720') {
    hideClasses();
    document.getElementById("CSCI2720").style.display = "block";
  }
  else if (id.value == '3030') {
    hideClasses();
    document.getElementById("CSCI3030").style.display = "block";
  }
  else if (id.value == '3360') {
    hideClasses();
    document.getElementById("CSCI3360").style.display = "block";
  }
  else if (id.value == '4060') {
    hideClasses();
    document.getElementById("CSCI4060").style.display = "block";
  }
  else if (id.value == '2580') {
    hideClasses();
    document.getElementById("AAEC2580").style.display = "block";
  }
  else if (id.value == '3690') {
    hideClasses();
    document.getElementById("AAEC3690").style.display = "block";
  }
  else {
    hideClasses();
  }
}

function addToTable(name, row, column) {
  var table = document.getElementById("scheduleTable");
  var x = table.rows[row].cells;
  x[column].innerHTML = name;
  x[column].style.backgroundColor = "#ff8080";
}

function addCourse(name) {
  if(name.id == "2720-1") {
    addToTable("CSCI 2720<br>12:20 - 1:10", 5, 1);
    addToTable("CSCI 2720<br>12:30 - 1:45", 5, 2);
    addToTable("CSCI 2720<br>12:30 - 1:45", 5, 4);
  }
  else if(name.id == "2720-2") {
    addToTable("CSCI 2720<br>3:35 - 4:25", 8, 1);
    addToTable("CSCI 2720<br>3:30 - 4:45", 8, 2);
    addToTable("CSCI 2720<br>3:30 - 4:45", 8, 4);
  }
  else if(name.id == "2720-3") {
    addToTable("CSCI 2720<br>11:15 - 12:05", 4, 1);
    addToTable("CSCI 2720<br>11:00 - 12:15", 4, 2);
    addToTable("CSCI 2720<br>11:30 - 12:15", 4, 4);
  }
  else if(name.id == "3360-1") {
    addToTable("CSCI 3360<br>2:30 - 3:20", 7, 1);
    addToTable("CSCI 3360<br>2:00 - 3:15", 7, 2);
    addToTable("CSCI 3360<br>2:00 - 3:15", 7, 4);
  }
  else if(name.id == "3030-1") {
    addToTable("CSCI 3030<br>8:00 - 8:50", 1, 1);
    addToTable("CSCI 3030<br>8:00 - 8:50", 1, 3);
    addToTable("CSCI 3030<br>9:05 - 9:55", 2, 1);
  }
  else if(name.id == "4060-1") {
    addToTable("CSCI 4060<br>9:30 - 10:45", 2, 2);
    addToTable("CSCI 4060<br>9:30 - 10:45", 2, 4);
    addToTable("CSCI 4060<br>10:10 - 11:00", 3, 3);
  }
  else if(name.id == "2580-1") {
    addToTable("AAEC 2580<br>2:30 - 3:20", 7, 1);
    addToTable("AAEC 2580<br>2:30 - 3:20", 7, 3);
    addToTable("AAEC 2580<br>2:30 - 3:20", 7, 5);
  }
  else if(name.id == "3690-1") {
    addToTable("AAEC 3690<br>2:30 - 3:20", 7, 1);
    addToTable("AAEC 3690<br>2:30 - 3:20", 7, 3);
    addToTable("AAEC 3690<br>2:30 - 3:20", 7, 5);
  }
}

// Get the modal
var modal = document.getElementById('detail');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
/*
btn.onclick = function() {
    modal.style.display = "block";
}
*/
function openModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function dropCourse() {
	modal.style.display="none";
	var row = document.getElementById("myRow");
  row.deleteCell(2);
  row.deleteCell(2);
  row.deleteCell(2);
  row.insertCell(2);
  row.insertCell(2);
  row.insertCell(2);
}

function showEdit(){
  document.getElementById("accnt").style.display = "none";
  document.getElementById("edit-accnt").style.display= "block";
}

function saveEdit(){
  document.getElementById("edit-accnt").style.display = "none";
  document.getElementById("accnt").style.display = "block";
}

function showName() {
    alert("A request to change your name in the University Administrative"
      + " System must be submitted to the Office of the Registrar."
      +" If you need to make changes to your name, you will need"
      +" to present the appropriate documentation to the Office of the Registrar."
      +" Different types of name changes require different types of legal documentation."
      +" You must complete, sign and submit the Change of Name form.");
}

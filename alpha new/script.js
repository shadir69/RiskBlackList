/****************************START SWAB COLUMN  */
var currentColumn;

function dragStart(event) {
  currentColumn = event.target;
}

function dragEnd(event) {
  currentColumn = null;
}

function dragOver(event) {
  event.preventDefault();
}


function drop(event) {
  event.preventDefault();
  if (currentColumn != event.target) {

    if (event.target.tagName == 'TH') {
      var index = Array.prototype.indexOf.call(currentColumn.parentNode.children, currentColumn);

      var targetIndex = Array.prototype.indexOf.call(event.target.parentNode.children, event.target);

      console.log(currentColumn);
      console.log(event.target);
      if (index < targetIndex) {
        event.target.parentNode.insertBefore(currentColumn, event.target.nextSibling);
      } else {
        event.target.parentNode.insertBefore(currentColumn, event.target);
      }

      
      var rows = document.querySelectorAll("#table tbody tr");
      rows.forEach(function (row) {
        var cells = row.children;
        var cell = cells[index];
        row.removeChild(cell);
        row.insertBefore(cell, cells[targetIndex]);

      });
    } else {

      var index = Array.prototype.indexOf.call(currentColumn.parentNode.children, currentColumn);

      var targetIndex = Array.prototype.indexOf.call((event.target.parentNode).parentNode.children, event.target.parentNode);




      if (index < targetIndex) {
        event.target.parentNode.parentNode.insertBefore(currentColumn, event.target.parentNode.nextSibling);
      } else {
        event.target.parentNode.parentNode.insertBefore(currentColumn, event.target.parentNode);
      }


     
      var rows = document.querySelectorAll("#table tbody tr");
      rows.forEach(function (row) {
        var cells = row.children;
        var cell = cells[index];
        row.removeChild(cell);
        row.insertBefore(cell, cells[targetIndex]);

      });

    }
  }
}

var columns = document.querySelectorAll("#table th");
columns.forEach(function (column) {
  column.addEventListener("dragstart", dragStart);
  column.addEventListener("dragend", dragEnd);
  column.addEventListener("dragover", dragOver);
  column.addEventListener("drop", drop);
});

/*****************************************end swap column */
/**********************day button setting start  */

const column = document.getElementById('column-setting');
const btnSetting = document.getElementById('column-setting-btn');
btnSetting.addEventListener('click', () => {
  console.log(column);
  column.classList.toggle('vesible');
})

/********************** day button setting end  */
/********************input type date start */

const input = document.querySelectorAll('input[type="date"]');
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}
input[0].value = year + "-" + month + "-" + day;
input[1].value = year + "-" + month + "-" + day;


console.log(input.values);

/********************input type date end */
/***************************checkbox start */
var checkbox = document.querySelectorAll('input[type="checkbox"]');
checkboxAll = checkbox[0];
checkboxAll.addEventListener("change", () => {
  if (checkboxAll.checked) {
    checkbox.forEach(check => {
      check.checked = true;
    }
    );
  } else {
    checkbox.forEach(check => {
      check.checked = false;
    })
  }
}

)
/**********************checkbox end */
/***************************drop list start */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    const clas=document.getElementById("myDropdown").classList;
   if(clas.length!=1){
    
    for (i = 0; i < dropdowns.length; i++) {
      console.log('one');
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }}
    }
  }
}    
/*********************drop list end */
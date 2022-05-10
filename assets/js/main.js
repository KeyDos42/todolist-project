ul = document.getElementById("myUL");
var cmp, taskElem;

// Click on a edit button to edit the current list item
var edit = document.getElementsByClassName("edit");

for (cmp = 0; cmp < edit.length; cmp++) {
    edit[cmp].onclick = function () {
        console.log("click on edit button !");
    }
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");


for (cmp = 0; cmp < close.length; cmp++) {
    close[cmp].onclick = function () {
        taskElem = this.parentElement;
        taskElem.style.display = "none";
    }
}


function searchTaskInList() {
    var searchField, filter, ul, taskElem, taskName, i, taskNameValue;
    searchField = document.getElementById("search");
    filter = searchField.value.toUpperCase();
    ul = document.getElementById("myUL");
    taskElem = ul.getElementsByTagName("li");
    for (i = 0; i < taskElem.length; i++) {
        taskName = taskElem[i].getElementsByTagName("a")[0];
        taskNameValue = taskName.textContent || taskName.innerText;

        if (taskNameValue.toUpperCase().indexOf(filter) > -1) {
            taskElem[i].style.display = "";
        } else {
            taskElem[i].style.display = "none";
        }
    }
}


// Create a new list item when clicking on the "Add" button
function newElementAddToDoList() {
    var searchField = document.getElementById("search");

    var task = document.createElement("li");

    var nameElem = document.createElement("a");

    var partTwoTable = document.createElement("div");
    var stateElem = document.createElement("input");
    var deleteElem = document.createElement("span");
    var editElem = document.createElement("span");
    var editIcon = document.createTextNode("\ud83d\udd89");
    var deleteIcon = document.createTextNode("\u00D7");
    var newContent = document.createTextNode(searchField.value);


    partTwoTable.className = "table-two-elem";

    stateElem.disabled = true;
    stateElem.value = "A faire"
    stateElem.style.backgroundColor = "rgb(0, 210, 238)";
    stateElem.style.textAlign = "center";
    stateElem.style.borderRadius = "10px";
    stateElem.style.color = "black";
    stateElem.style.height = "2.5em";
    stateElem.style.border = "none";
    stateElem.style.gridColumnStart = 1;

    editElem.style.fontSize = "1.5em";
    editElem.style.marginTop = "10px";
    editElem.style.gridColumnStart = 2;

    deleteElem.style.fontSize = "1.5em";
    deleteElem.style.marginTop = "10px";

    nameElem.style.color = "black";
    nameElem.style.cursor = "default";
    nameElem.style.textDecoration = "none";
    nameElem.style.textAlign = "left";
    nameElem.style.paddingLeft = "2em";

    nameElem.appendChild(newContent);
    task.appendChild(nameElem);


    editElem.className = "edit";
    editElem.appendChild(editIcon);


    deleteElem.className = "close";
    deleteElem.appendChild(deleteIcon);


    partTwoTable.appendChild(stateElem);
    partTwoTable.appendChild(editElem);
    partTwoTable.appendChild(deleteElem);

    if (searchField.value === '') {
        alert("Aucune lettre!");
    } else {
        document.getElementById("myUL").appendChild(task);
    }
    searchField.value = "";
    searchTaskInList();




    task.append(partTwoTable);

    for (cmp = 0; cmp < close.length; cmp++) {
        close[cmp].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }


    for (cmp = 0; cmp < edit.length; cmp++) {
        edit[cmp].onclick = function () {

        }
    }

}



/**
 * For the default list
*

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);

    myNodelist[i].appendChild(span);
}

*/
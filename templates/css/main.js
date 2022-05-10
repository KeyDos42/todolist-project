/**
 * link to main.js does not work so I had to put it in the html code
 */

function searchTaskInList() {
    var searchField, filter, ul, taskElem, taskName, i, taskNameValue;

    searchField = document.getElementById("search");
    filter = searchField.value.toUpperCase();
    ul = document.getElementById("theTasks");
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
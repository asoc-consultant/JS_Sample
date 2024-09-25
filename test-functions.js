
function aboutJSFunction() {
var Loc01 = document.getElementById("Location01");
Loc01.innerHTML="JavaScript is a simple language for coding";
}

function search() {
  var query = document.getElementById("searchBox").value;
  var resultsDiv=document.getElementById("results");
  resultsDiv.innerHTML = "Search results for:" + query;
}




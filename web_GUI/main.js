
document.getElementById("clearButton").onclick = function(e) {
	document.getElementById("textInput").value = "";
	}
	
	function eventForm(value){
		console.log(value)
		document.body.onload = addElement(value);
	}

	var my_div = newDiv = null;

	function addElement(anyText) {

		var newDiv = document.createElement("div");
			newDiv.innerHTML = "<h1>" + anyText + "</h1>";

		my_div = document.getElementById("org_div1");
		document.body.insertBefore(newDiv, my_div);
	}
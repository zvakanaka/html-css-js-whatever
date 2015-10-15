//load and parse url json file and build DOM with whatBuild
function jasonDom(url, whatBuild) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
   			var jsonParsed = JSON.parse(xmlhttp.responseText);
    		whatBuild(jsonParsed);
    	}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function saveLocalStorage(itemName, i) {
	var itemValue = document.getElementsByClassName("customWeight")[i].value;
	localStorage.setItem(itemName, itemValue);

	console.log('Set LocalStorage."'+itemName+'" => ', itemValue);
}

function resetLocalStorage() {
   localStorage.clear();
   //this is not ideal because it is better not to refresh the page
   location.reload();
}

jasonDom("cupboardContents.json", function buildForm(arr) {
   var out = "";
	var i;
   for(i = 0; i < arr.cupboardContents.length; i++) {
        //label item name
        out += '<label>' + arr.cupboardContents[i].itemName + '</label>';
        //input box weight
        out += '<input style="width: 3em" min="0" name="input-'+i+'" id="input-'+i
        	+'" class="customWeight" " type="number" value="';
			//only set custom box weight value if data has been set before            
			if (typeof localStorage.getItem(arr.cupboardContents[i].itemName) !== 'undefined'
			&& localStorage.getItem(arr.cupboardContents[i].itemName) !== null)
        		out += localStorage.getItem(arr.cupboardContents[i].itemName);
			else //if null, fill with original weight
				out += arr.cupboardContents[i].boxWeight;
			out += '"/>';//close input
        //label original box weight
        out += '<label>' + arr.cupboardContents[i].boxWeight + '</label>';
        //save button
        out += '<button onclick="saveLocalStorage(\''
        	+ arr.cupboardContents[i].itemName+'\',' + i
        	+ ')">Save</button><br/>';
   }
   //Reset button
   out += '<button onclick="resetLocalStorage()">Reset Local Storage</button><br/>';
   document.getElementById("divy").innerHTML = out;
});
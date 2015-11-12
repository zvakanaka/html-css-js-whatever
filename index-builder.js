function makeUL(nav) {
    // Create the list element:
    var list = document.createElement('ul');
	list.setAttribute("class", "nav-ul");

    for(var i = 0; i < nav.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        //TODO: put this in the JSON 
        item.setAttribute("title", nav[i].text);

		var a = document.createElement('a');
		a.setAttribute("href", nav[i].url);
		a.appendChild(document.createTextNode(nav[i].name));

        // Set its contents:
        item.appendChild(a);

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

//load and parse url json file and build DOM with builderMethod
function jasonDom(url, builderMethod) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
   			var jsonParsed = JSON.parse(xmlhttp.responseText);
    		builderMethod(jsonParsed);
    	}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

jasonDom("index-info.json", function buildPage(arr) {
    document.getElementById('heading').innerHTML = arr.title;
    //build list
	document.getElementById('nav-ul').appendChild(makeUL(arr.nav));

	//footing
    //document.getElementById("footing").innerHTML = '<a href=' + arr.linkUrl + '>' 
      //                                                        + arr.linkTitle + '</a>';
});
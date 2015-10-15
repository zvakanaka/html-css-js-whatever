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

jasonDom("pageInfo.json", function buildPage(arr) {
    document.getElementById("heading").innerHTML = '<h1>' + arr.title + '</h1>';
    
    document.getElementById("footing").innerHTML = '<a href=' + arr.linkUrl + '>' 
                                                              + arr.linkTitle + '</a>';
});
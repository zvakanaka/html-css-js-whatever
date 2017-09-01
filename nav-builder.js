function getPathStart() {//e.g. zvakanaka.github.io/html-css/css-vars/index.html -> /html-css
  var temp = location.pathname.substr(1);
  return '/'+num.substr(0, num.indexOf('/'));
}
var pathStart = getPathStart();
function makeUL(arr) {
    // create list element
    var list = document.createElement('ul');
	list.setAttribute("class", "nav-ul");

    for(var i = 0; i < arr.nav.length; i++) {
        // create li element
        var item = document.createElement('li');
        //TODO: put this in the JSON 
        item.setAttribute("title", arr.nav[i].text);

		var a = document.createElement('a');
		a.setAttribute("href", arr.baseUrl +'/'+ arr.nav[i].url);
		a.appendChild(document.createTextNode(arr.nav[i].name));

        // set li contents:
        item.appendChild(a);

        // add li to list
        list.appendChild(item);
    }
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

jasonDom(pathStart+"/modules/nav-info.json", function buildPage(arr) {
    //include style sheet
    var link = document.createElement('link');
    link.id = 'nav-css';
    link.rel = 'stylesheet';
    link.href = arr.baseUrl + '/' + 'style/hip.css';
    document.head.appendChild(link);

    //build containing elements for heading and nav
    var nav = document.createElement('div');
    nav.id = 'nav-ul';
    document.body.insertBefore(nav, document.body.firstChild);

    var heading = document.createElement('h1');
    heading.id = 'heading';
    var headingLink = document.createElement('a');
        headingLink.setAttribute("href", arr.baseUrl +'/');
        headingLink.appendChild(heading);
    document.body.insertBefore(headingLink, document.body.firstChild);

    //heading
    document.getElementById('heading').innerHTML = arr.title;
    
    //build list
	document.getElementById('nav-ul').appendChild(makeUL(arr));

    //footing
    //document.getElementById("footing").innerHTML = '<a href=' + arr.linkUrl + '>' 
      //                                                        + arr.linkTitle + '</a>';
});

//call php file that updates data, then display change on page
function upvote(url, str, displayContainer) {
    console.log("Str="+str);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
   			var numVotes = (xmlhttp.responseText);
    		//do stuff
            console.log(numVotes);
            displayContainer.innerHTML = ++numVotes;
            document.getElementById("up-icon").setAttribute.value = ++numVotes;
    	}
	}
	xmlhttp.open("GET", url+"?q="+str, true);
	xmlhttp.send();
}

var baseUrl = '/cit-261/html-css-js-whatever';
var requestUrl = baseUrl + '/modules/upvote.php';

    //include style sheet
    var link = document.createElement('link');
    link.id = 'upvote-css';
    link.rel = 'stylesheet';
    link.href = baseUrl + '/styles/hip.css';
    document.head.appendChild(link);

    var votesDiv = document.createElement('div');
    votesDiv.id = 'votes-div';
    document.body.insertBefore(votesDiv, document.body.lastChild);

    var upvoteDiv = document.createElement('div');
    upvoteDiv.id = 'upvote';
    var upIcon = document.createElement('button');
        upIcon.id = 'up-icon';
        upIcon.setAttribute("value", 199);
        upIcon.setAttribute("onclick", 'upvote(requestUrl, this.value++, document.getElementById("votes-div"))');
        upIcon.appendChild(upvoteDiv);
        upIcon.innerHTML = "+";
    document.body.insertBefore(upIcon, document.body.lastChild);

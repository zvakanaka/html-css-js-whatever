function saveLocalStorage() {
   favColor = document.getElementById("fav-color").value;
	localStorage.setItem("favoriteColor", favColor);

	console.log('Set LocalStorage."favoriteColor"'+' => "' + favColor + '"');
   
   document.getElementById("divy").style.background = favColor;
}

function resetColor() {
   localStorage.removeItem("favoriteColor");
   document.getElementById("divy").style.background = "";
   document.getElementById("fav-color").value = "";
}

   var out = "";
   out += '<label>Favorite Color</label>'; 
   out += '<input style="width: 5em" min="0" name="fav-color" id="fav-color" class="customWeight" type="text" value="';
	//only set if data has been set before            
	if (typeof localStorage.getItem("favoriteColor") !== 'undefined'
		&& localStorage.getItem("favoriteColor") !== null)
   	   out += localStorage.getItem("favoriteColor");
	out += '"/>';//close input
         
   //set onclick to execute saveLocalStorage function
   out += '<button onclick="saveLocalStorage()">Save</button><br/>';
   //add Reset button to clear local storage
   out += '<button onclick="resetColor()">Reset Color in Local Storage</button><br/>';
    
document.getElementById("divy").innerHTML = out;

console.log(typeof favColor);
if (typeof localStorage.getItem("favoriteColor") !== 'undefined') {
    document.getElementById("divy").style.background = localStorage.getItem("favoriteColor");
} 

//<>
/*
var SpielerName = "Steve";
const urlParms = new URLSearchParams(window.location.search);	// Holt URLParameter aus der URL		

if(urlParms.get('name') != null){				// Überprüft ob ein URL Paramter vorhanden ist (wenn kein Wert eingegeben wurde ist der const URLParms NULL)
    SpielerName = urlParms.get('name');			// Wenn ein Wert mit dem Key Name eingegeben wurde wird die Variable PlayerName mit dem Wert überschrieben
}else{	
    SpielerName = prompt("Gieb deinen Namen ein");		// Wenn der kein Wert vorhanden ist öffne ein Prompt Alert um PlayerName zu bekommen
}   

*/

function Snackbar(text){
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    document.getElementById("snackbarText").innerHTML = text;
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

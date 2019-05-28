// JavaScript Document

//Translate hjemmesiden
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'da'}, 'google_translate_element');
}

var whatToClose = 0;
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById('myModal');
	var btn = document.getElementById("WatchAgain");
	
	btn.onclick = function() {
  modal.style.display = "block";
	}
		
	span.onclick = function() {
	 modal.style.display = "none";
	}
		
	window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; 
	  
  }
	}
	function stopVideo() {
 document.getElementById('video').muted();
}
	
	window.addEventListener("scroll",function(){
  var target = document.getElementsByClassName('modal');
  if(window.pageYOffset > 300){
   target[0].style.display = "block"; 
  }
  
});
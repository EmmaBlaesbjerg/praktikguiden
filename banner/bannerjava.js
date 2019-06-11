var slideIndex = 0;
let hasScrolled = false;

function startSlide(){
	if(!hasScrolled){
		   hasScrolled = true;
	   setInterval(function() {
		   let images = ["../images/Motiveret ansøgning/ansøgning-illustrationer/ansøgnings_papir_motiveretansøgning.png", "../images/Motiveret ansøgning/ansøgning-illustrationer/lamp_coffe_motiveret_ansøgning.png","../images/Motiveret ansøgning/ansøgning-illustrationer/computer_coffe_ansøgning.png"]
		
		  document.getElementById("slideImage").src = images[slideIndex]
		   slideIndex++
		   if(slideIndex >= images.length) slideIndex = 0;
	   },2000)
	   }
}

$(document).ready(function(){
  //Take your div into one js variable
  var div = $("#divToShowHide");
  //Take the current position (vertical position from top) of your div in the variable
  var pos = div.position();
  //Now when scroll event trigger do following
  $(window).scroll(function () {
   var windowpos = $(window).scrollTop();
   //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
   // I am taking 100px scroll, you can take whatever you need
   if (windowpos >= (pos.top-100)) {
     div.addClass("AfterScroll");
	   startSlide()
   }
   //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
   else {
     div.removeClass("AfterScroll");
   }
   //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
 });
});
	
		// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}// JavaScript Document
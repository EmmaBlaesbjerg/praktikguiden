// JavaScript Document


//Google translate

function googleTranslateElementInit() {
				new google.translate.TranslateElement({pageLanguage: 'da'}, 'google_translate_element');}


//Read more knap
$(document).on("click", ".toggle-text-button", function() {

  // Check if text is more or less
  if ($(this).text() == "Læs mere") {

    // Change link text
    $(this).text("Læs mindre");
    
    // Travel up DOM tree to parent, then find any children with CLASS .toggle-text and slide down
    $(this).parent().children(".toggle-text").slideDown();
    
  } else {


    // Change link text
    $(this).text("Læs mere");
    
    // Travel up DOM tree to parent, then find any children with CLASS .toggle-text and slide up 
    $(this).parent().children(".toggle-text").slideUp();
    
  }
  });



//Fjern pil "til top" ved "forside billede"
window.addEventListener("scroll",function(){
  var target = document.getElementsByClassName('material-icons');
  if(window.pageYOffset > 400){
   target[0].style.display = "block";
  }
  else if(window.pageYOffset < 300){
    target[0].style.display = "none";
  }
  }
);




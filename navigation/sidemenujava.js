// JavaScript Document


window.addEventListener("scroll",function(){
  var target = document.getElementsByClassName('sidenav');
  if(window.pageYOffset > 400){
   target[0].style.display = "block";
  }
  else if(window.pageYOffset < 300){
    target[0].style.display = "none";
  }
  }
);

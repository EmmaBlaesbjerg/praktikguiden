// JavaScript Document
$(document).ready(function () {
	
	
//Måneder og dage opskrevet
	
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ];

	
	//Metoden setDate () indstiller datobjektets dag i forhold til begyndelsen af den aktuelt indstillede måned.
var newDate = new Date();
newDate.setDate(newDate.getDate()); //indsamler data fra jquery linket angående gyldende dato
	
	//Interval for hvornår timerne, minuter og sekunder skifter
setInterval( function() {
	var hours = new Date().getHours(); //
	$(".hour").html(( hours < 10 ? "0" : "" ) + hours); 
    var seconds = new Date().getSeconds();
	$(".second").html(( seconds < 10 ? "0" : "" ) + seconds);
    var minutes = new Date().getMinutes();
	$(".minute").html(( minutes < 10 ? "0" : "" ) + minutes);
    
	
	//reaktionen hvori informationerne fremkommer ved overeffekt
    $(".month span,.month2 span").text(monthNames[newDate.getMonth()]); //reaktionen hvori månede opstår/fremgår ved hoover effekt
    $(".date span,.date2 span").text(newDate.getDate()); //reaktionen hvori datoen opstår/fremgår ved hoover effekt
    $(".day span,.day2 span").text(dayNames[newDate.getDay()]); //reaktionen hvori ugedagen opstår/fremgår ved hoover effekt
    $(".year span").html(newDate.getFullYear()); //reaktionen hvori årstal opstår/fremgår ved hoover effekt
}, 1000);	






});
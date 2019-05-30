
	// først rammer man knappens ID som ligger i html'en, derefter tilføjer man en click + function til knappen. 
		// når man klikker på knappen, manipulerer man med CSS'en, Strict equality (===) siger at, displayet i CSSEN SKAL være sat til none ellers fungerer functionen ikke. derefter vil man kunne åbne og lukke chatbotten, ved hjælp af css manipulation.

		document.getElementById('chatBotButton').addEventListener('click', function(){
			let container = document.getElementById('container')
		   if(container.style.display === 'none') {
			   container.style.display = "block"; 
		   }else {
			   container.style.display = "none";
		   }
    })
	
 document.getElementById('textfelt').addEventListener('keyup' , function(event){
     if (event.keyCode === 13) {
     let text = document.getElementById('textfelt').value
     let magicText = showText(text)
    document.getElementById('magictekst').innerHTML =  magicText;
     }
 })
	// her komme chat funktionen til livs. Ved hjælp af 'toUpperCase' kan man sørge for at uanset hvilken størrelse bogstaver der skrives vil den ramme keywordet.
		// derefter kommer vores if / else, hvor alle vores keywords ligger i. Når man rammer keywordet 'Hjælp' vil den returne den skrevne tekst til keywordet hjælp.
function showText(text){
    let temp = text.toUpperCase();
    if(temp.includes('HJÆLP')) {
        return 'ligegyldig hjælp til chatbotten her'
    }else if(temp.includes('PRAKTIKVEJLEDER') || temp.includes('VEJLEDER')){
        return 'du finder praktik vejlederen "indsæt navn her" et eller andet sted på skolen'
    }else if(temp.includes('PRAKTIK')){
        return 'mega vigtig info omkring praktik her'
    }
    else{
        return  'Det kan jeg desværre ikke lige hjælpe dig med. Prøv med "hjælp", "praktik" eller "praktikvejleder"'
    }
}

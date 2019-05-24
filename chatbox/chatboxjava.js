// JavaScript Document
// først rammer man knappens ID som ligger i html'en, derefter tilføjer man en click + function til knappen.
		// når man klikker på knappen, manipulerer man med CSS'en, Strict equality (===) siger at, displayet i CSSEN SKAL være sat til none ellers fungerer functionen ikke. derefter vil man kunne åbne og lukke chatbotten, ved hjælp af css manipulation.
document.getElementById('chatBotButton').addEventListener('click', function(){
		let container = document.getElementById('container')
		if(container.style.display === 'none') {container.style.display = "block";}
		else {container.style.display = "none";}
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
        return 'Prøv med et mere specefikt søgeord, så kan jeg bedre hjælpe'
    }else if(temp.includes('PRAKTIKVEJLEDER') || temp.includes('VEJLEDER')){
        return 'Du finder information omkring din praktik vejlederen, på din specifikke uddannelse under fanen "Uddannelse" '
    }else if(temp.includes('PRAKTIK')){
        return 'Kan du være mere specifik omkring din søgning?'
    }
	else if(temp.includes('UDLANDET')){
        return 'Du kan finde information om praktik i udlandet under "Generel"'
    }
 	else if(temp.includes('LEGAT')){
        return 'Du finder en masse information omkring legater og fonde under "Legat"'
    }
	else if(temp.includes('BUDGET')){
        return 'Du finder en masse information omkring budget under "Legat"'
    }
	else if(temp.includes('ANSØGNING')){
        return 'Du finder en masse information omkring, hvordan du skriver din ansøgning, under "Motiveret ansøgning"'
    }
	else if(temp.includes('VIRKSOMHED')){
        return 'Du finder information omkring virksomheden under "Generel" eller mere specefikt under din egen uddannelse under fanen "Uddannelse"'
    }
	else if(temp.includes('RÅD')){
        return 'Du finder en masse gode råd under hver fane, som er specifikke tilegnet emnet'
    }
	else if(temp.includes('CV')){
        return 'Du finder information omkring CV under fanen "CV"'
    }
 	else{
        return  'Det kan jeg desværre ikke lige hjælpe dig med. Prøv med "hjælp", "praktik" eller "praktikvejleder"'
    }
}


 
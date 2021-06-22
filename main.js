function persoGet(url){
	let request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send();
	return request.responseText;
}

function main(){
	let masculino;
	let feminino;

	//validar todos os personagens que tem na api
	let recebeTXT = persoGet("https://rickandmortyapi.com/api/character/");
	let recebe = JSON.parse(recebeTXT);
	for(i = 0; i < 34; i++){
		recebe.results.forEach(function(validar){
			//validar o nome e ID de todos caso queira modificar os personagens
			//console.log("Nome: " + validar.name + " ID: " + validar.id);
			if(validar.id == 344){
				feminino = validar;
			}

			if(validar.id == 47){
				masculino = validar;
			}

			});
			if(recebe.info.next){
				recebe = JSON.parse(persoGet(recebe.info.next));
			}
		}

	//dados personagem masculino
	//Linha abaixo seta o ID do personagem que você quiser para não fazer toda a busca
	/*let personagemMasc = 47;
	let recebePerMasc = persoGet("https://rickandmortyapi.com/api/character/"+personagemMasc);
	let masculino = JSON.parse(recebePerMasc);*/
	document.getElementById("nomeMasc").innerHTML = masculino.name;
	document.getElementById("imgMasc").src = masculino.image;
	document.getElementById('statusMasc').innerHTML = masculino.status;
	document.getElementById('planetaMasc').innerHTML = masculino.location.name;
	let ep;
	for(i = 0; i<3; i++){
		ep = masculino.episode[i];
		let recebeEP = persoGet(ep);
		dadosEP = JSON.parse(recebeEP);
		document.getElementById('episodiosMasc').innerHTML += "Episodio: " + dadosEP.name + '<br />' + "Data de lançamento " + dadosEP.air_date +'<br/>';
	}

	//dados personagem feminino
	/*let personagemFem = 344;
	//let recebePerFem = persoGet("https://rickandmortyapi.com/api/character/"+personagemFem);
	//let feminino = JSON.parse(recebePerFem);*/
	document.getElementById("nomeFem").innerHTML = feminino.name;
	document.getElementById("imgFem").src = feminino.image;
	document.getElementById("statusFem").innerHTML = feminino.status;
	document.getElementById("planetaFem").innerHTML = feminino.location.name;
	for(i = 0; i<3; i++){
		ep = feminino.episode[i];
		let recebeEP = persoGet(ep);
		dadosEP = JSON.parse(recebeEP);
		document.getElementById('episodiosFem').innerHTML += "Episodio: " + dadosEP.name + '<br />' + "Data de lançamento " + dadosEP.air_date +'<br/>';
	}
}
main()
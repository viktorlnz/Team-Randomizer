
var listaSize = 0;

function addItemLista(idNome = 'nome', idLista = 'lista'){
	let lista = document.getElementById(idLista);
	let nome = document.getElementById(idNome).value;
	let nomeNode = document.createTextNode(nome);
	let elementoNome = document.createElement("option");

	elementoNome.appendChild(nomeNode);
	lista.appendChild(elementoNome);
	listaSize++;
	lista.size = listaSize;
}

function gerarEquipes(idListaParticipantes = 'lista' ,idNumEquipes = 'num-equipes', idLista = 'lista'){
	let numEquipes = document.getElementById(idNumEquipes).value;
	let listas = [numEquipes];
	for(let i = 0; i < numEquipes; i++){
		listas[i] = gerarLista('equipes' ,i+1);
	}

	let l = 0;
	let elementosLista = document.getElementById(idListaParticipantes).childNodes;
	let c = elementosLista.length;
	let tamanhoListas = c/numEquipes;
	for(let i = 0; i<numEquipes; i++){
		listas[i].size = tamanhoListas;
	}
	
	do{
		let sorteado;
		sorteado = Math.floor((Math.random() * c));
		alert(elementosLista[sorteado].value + ' para o time '+(l+1));
		listas[l].append(elementosLista[sorteado]);
		delete elementosLista[sorteado];
		l = l==(numEquipes-1)?0:l+1;
		c--;
	}
	while(c > 0);
	document.getElementById("entrada").style.display = "none";
	document.getElementById("saida").style.display = "block";
}

function gerarLista(idPos, numLista, nomeId = 'lista'){
	let pos = document.getElementById(idPos);
	let lista = document.createElement('select');
	lista.id = nomeId+numLista;
	pos.appendChild(lista);
	return lista;
}
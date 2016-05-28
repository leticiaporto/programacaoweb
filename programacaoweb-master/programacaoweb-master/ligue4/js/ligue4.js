	var vezDoJogador;
	
	//0 - Não utilizada
	//1 - Jogador 1 (a)
	//2 - Jogador 2 (v)
	var tab = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //array para salvar as posições ocupadas
	
    window.onload = function() {
         carregaImagens();
    }
	//iniciar jogo
    function carregaImagens(){//carrega imagens de b.png (branco) para iniciar o jogo
       var x = document.getElementsByTagName("img");
       for (i=1; i< x.length; i++){
			 x[i].src = "img/b.png";
			 tab[i]=0;
	   }
	   vezDoJogador=1;
    }
    
	//testa qual posição mais inferior da coluna, a qual pertence a posição que gerou o click, está vazia
    function jogar(i){ 
		var x = document.getElementsByTagName("img");
		var j=i;
		for(var k=35; k>=0; k=k-7){//for para percorrer cada posição da coluna
			if(tab[j+k]==0){ 
				if (vezDoJogador==1){
					x[j+k].src = "img/azul.png";
					vezDoJogador=2;
					tab[j+k]=1;
					break;
				}
				else{
					x[j+k].src = "img/vermelho.png";
					vezDoJogador=1;
					tab[j+k]=2;
					break;
				}
			}
		}
		alguemGanhou();
	}
		
	//Verificar se alguém ganhou
	function alguemGanhou(){
		//Verifica linhas
		for(var i=1; i<=36; i=i+7){//for para percorrer as linhas
			for(var k=i; k<=i+3; k++){//for para percorrer as posições da linha
				if(tab[k]==1 && tab[k+1]==1 && tab[k+2]==1 && tab[k+3]==1){
					alert("Jogador 1 ganhou!");
					carregaImagens();
					return;
				}
				if(tab[k]==2 && tab[k+1]==2 && tab[k+2]==2 && tab[k+3]==2){
					alert("Jogador 2 ganhou!");
					carregaImagens();
					return;
				}
			}
		}
		
		//Colunas
		for(var i=1; i<=7; i++){//for para percorrer as colunas
			for(var k=i; k<=i+14; k=k+7){//for para percorrer as posições da coluna
				if(tab[k]==1 && tab[k+7]==1 && tab[k+19]==1 && tab[k+21]==1){
					alert("Jogador 1 ganhou!");
					carregaImagens();
					
					return;
				}
				if(tab[k]==2 && tab[k+7]==2 && tab[k+19]==2 && tab[k+21]==2){
					alert("Jogador 2 ganhou!");
					carregaImagens();
					
					return;
				}
			}
		}

		//Diagonal Principal
		for(var i=1; i<=4; i++){//for para percorrer as posições de onde se originam diagonais principais
			for(var k=i; k<=i+14; k=k+7){//for para percorrer as posições que formam a diagonal principal
				if(tab[k]==1 && tab[k+8]==1 && tab[k+16]==1 && tab[k+24]==1){
					alert("Jogador 1 ganhou!");
					carregaImagens();
					return;
				}
				if(tab[k]==2 && tab[k+8]==2 && tab[k+16]==2 && tab[k+24]==2){
					alert("Jogador 2 ganhou!");
					carregaImagens();
					return;
				}
			}
		}

		//Diagonal Secundária
		for(var i=4; i<=7; i++){//for para percorrer as posições de onde se originam diagonais secundarias
			for(var k=i; k<=i+14; k=k+7){//for para percorrer as posições que formam a diagonal secundaria
				if(tab[k]==1 && tab[k+6]==1 && tab[k+12]==1 && tab[k+18]==1){
					alert("Jogador 1 ganhou!");
					carregaImagens();
					return;
				}
				if(tab[k]==2 && tab[k+6]==2 && tab[k+12]==2 && tab[k+18]==2){
					alert("Jogador 2 ganhou!");
					carregaImagens();
					return;
				}
			}
		}
		
		//Verificar empate
		var empate=true;
		for (var i=1; i<=42; i++){
			if(tab[i]==0)
				empate=false;
		}
		if (empate){
			alert("Empate");
			carregaImagens();
		}
	}
	
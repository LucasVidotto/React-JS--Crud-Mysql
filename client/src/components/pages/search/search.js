import React from 'react';

export default function Search(){
    return(
        <div class="principal">
			<div class="cabecalho">
				
				<div class="logo">
					<img src="imagem/logo/LogoUFSCar.jpg" width="15%" height="20%" align="right"/>
				</div>
			</div>
			<div class="menu">
				<ul>
					<li> <a href="index.html">Início</a> </li>
					<li> <a href="membros.html">Membros</a> </li>
					<li> <a href="pesquisa.html">Linha de Pesquisa </a> </li>
					<li> <a href="publicacao.html">Publicações </a></li>
					<li> <a href="contato.html">Contato</a> </li>

				</ul>
			</div>
			<div class="corpo">
				<div class="artigos">
					<div class="espacamento">
				         <ul>	
                            <li><p class="pub"> Busca por novos materiais poliméricos condutores para utilização como eletrodos flexíveis
                            <br /></p></li>
                            <li><p class="pub">Diminuição da dependência da umidade ambiente na atuação de polímeros eletroativos iônicos para uso 
                            como atuadores mecânicos<br /></p></li>
                           <li><p class="pub">Uso de reconhecimento de imagem para controle e medida de desempenho em músculos artificiais baseados
                            em polímeros eletroativos iônicos<br /></p></li>
                            <li><p class="pub">estudo eletroquímico de polímero eletroativos iônicos<br /></p></li>
                            <li><p class="pub">Sulfonação de polímeros para utilização como músculos artificiais e sensores de deformação.<br /></p></li>
				         </ul>		
					</div>
				</div>
			</div>
			<div class="rodape">
				<div class="inter">
					Copyright &copy; - Criado por Lucas Vidotto<br />
				</div>
			</div>
		</div>
    )
}
import React from 'react';
import {Link} from 'react-router-dom';

export default function Membros(){
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
						<div class="foto">
							<legend class="legen">Carlos Henrique Scuracchio<br />
								Coordenador</legend>
							<p><a href="#" onclick="Lcarlos();"><img src="imagem/carlos.jpg" class="image" title="lattes"align="left" style=" left:1px; top:200px; z-index: 1;"/></a>

								<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>:<br>
								<p class="texto">Graduação em Engenharia de Materiais(UFSCar)<br /></p>
								<p class="texto">Mestre em Engenharia dos Materiais(UFSCar)<br /></p>
								<p class="texto">Doutor em Ciência e Engenharia dos Materias(UFSCar)<br /></p>
								
								
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Atuação Profissional</b>: 
								<p class="texto">Professor do Magistério Superior da Universidade Federal de São Carlos<br /></p>
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Projetos</b>:<br />
								<p class="texto"> Materiais inteligentes baseados em polímeros eletroativos para utilização em músculos 
								artificiais, sensores de deformação e geração de energia<br /></p>
								<p class="texto"> Elastômeros condutores para uso em eletrodos flexíveis<br /></p>
								<p class="texto"> Reciclagem de borrachas vulcanizadas<br />
								</p>

								<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br>
								<p class="texto">carlos.scu@ufscar.br<br /></p>
                            
							</p>

							<div class="over">
								<div class="text"> Clique na imagem para abrir o Lattes </div>
							
							</div>
						</div>

						<div class="foto">
							<legend class="legen">Laos Alexandre Hirano<br /></legend>
							<p><a href="#" onclick="Llaos();"><img src="imagem/lao.jpg" class="image" title="lattes" align="left" style=" left:1px; top:200px; z-index: 2;" id="direita"/></a>
								
								<b>Formação</b>: <br>
									<p class="texto">Engenheiro de Controle e Automação (UFOP)<br /></p>
									<p class="texto">Mestre em Engenharia de Materiais (Redemat-UFOP)<br /></p>
									<p class="texto">Doutor em Nanociências e Materiais Avançados (UFABC)<br /></p>
									<b> Profissional</b>:<br> 
									<p class="texto">Professor do Magistério Superior da Universidade Federal de Alfenas<br /></p>
									<b>Projetos</b>:<br>
									<p class="texto">Desenvolvimento e Caracterização de Dispositivos Acionados por Polímeros Iônicos: Este projeto 
										tem como objetivo o 
									desenvolvimento e caracterização de atuadores e/ou sensores acionados por polímeros eletroativos (EAP). Atualmente, 
									os materiais de interesse de estudos são os compósitos polímero-metal contendo Nafion, Flemion ou outros polímeros 
									flexíveis com capacidade de de transporte iônico</p><br />
									<b>E-mail</b>:<br > 
									<p class="texto">laosdaserra@gmail.com<br /></p>
							</p>
							<div class="over">
								<div class="text"> Clique na imagem para abrir o Lattes </div>
							</div>
						</div>

						<div class="foto">
							<legend class="legen">Ariel Gustavo Zuquello<br /></legend>
							<p><a href="#" onclick="Lariel();"><img src="imagem/ariel.jpeg" class="image" title="lattes" align="left" style=" left:1px; top:200px; z-index: 2;"/></a>
								
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>: <br />
								<p class="texto">Graduação e mestrado na área da Computação<br /></p>
								<p class="texto">Atualmente aluno de doutorado no programa PPGCEM/UFSCAR <br />
								</p>

								<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br />
								<p class="texto">Desenvolve pesquisa na área de polímeros eletroativos, compósitos, atuadores, 
									músculos artificiais, visão computacional e aprendizagem de máquina</p><br />

								<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>: 
								<p class="texto">arielzuquello@gmail.com<br /></p>
							</p>
								<div class="over">
									<div class="text"> Clique na imagem para abrir o Lattes </div>
								</div>
							</div>

						<div class="foto">
							<legend class="legen">Cristiano Porporatti Zimmermann</legend>
							<p><a href="#" onclick="Lcristiano();"><img src="imagem/Cristiano.jpg" class="image" title="lattes"align="left" style=" left:1px; top:200px; z-index: 1;"/></a>
								

								,<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>:<br />
								<p class="texto">Graduação em Engenharia Elétrica pela Universidade Federal de Santa Maria – UFSM<br></p>
								<p class="texto">MBA em Gestão e Engenharia de Produção pela Universidade Regional de Blumenau.- FURB<br></p>
								<p class="texto">Mestrado em Engenharia Elétrica pela Universidade Federal Tecnológica do Paraná – UTFPR<br></p>
								<p class="texto">Doutorado em andamento em Engenharia de Materiais pela 
									Universidade Federal de São Carlos – UFSCar.<br /></p>
								

								<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br /> 
								<p class="texto">O projeto envolve a aplicação de polímeros condutores, ou junções 
									híbridas de metais nobres com 
								polímeros condutores, no desenvolvimento de eletrodos para aplicações em IPMCS. Entre os 
								principais objetivos 
								deste trabalho estão a otimização do tempo e custo de fabricação, redução de fadiga, 
								assim como aumentar a 
								contabilidade dos IPMCs. Eletrodos Híbridos de Platina e Compósitos de 
									Polianilina e Nanotubos de Carbono aplicados a 
								Compósitos Metal-Polímero Ionoméricos (IPMCs).<br /></p>
							
								<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br> 
								<p class="texto">zimmermann.eng@unochapeco.edu.br<br /></p>

							</p>
							<div class="over">
								<div class="text"> Clique na imagem para abrir o Lattes </div>
							
							</div>
						</div>

						<div class="foto">
							<legend class="legen">Iago Cordeiro Santa Bárbara</legend>
							<p><a href="#" onclick="Liago();"><img src="imagem/iago.jpg" class="image" title="lattes"align="left" style=" left:1px; top:200px; z-index: 1;"/></a>
								

								,<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>:<br />
								<p class="texto">Graduando em Engenharia de Materiais (UFSCar)<br /></p>
								

								<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br /> 
								<p class="texto">"Estudo da Influência do Cátion e da Umidade Relativa do 
									Ar na Resposta Elétrica de Sensores de Deformação Baseados em IPMC". 
									O projeto tem por objetivo geral investigar a influência do grau de hidratação
									 e o tipo e tamanho do cátion móvel no comportamento elétrico de um sensor de 
									 deformação baseado em IPMC.<br /></p>
							
								<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br /> 
								<p class="texto">iagocsb97@gmail.com<br /></p>

							</p>
							<div class="over">
								<div class="text"> Clique na imagem para abrir o Lattes </div>
							
							</div>
						</div>

						<div class="foto">
							<legend class="legen">Kaique Afonso Tozzi<br /></legend>
							<p><a href="#" onclick="Lkaique();"><img src="imagem/kaique.jpg" class="image" title="lattes" align="left" style=" left:1px; top:200px; z-index: 2;"/></a>
								
								
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>: <br />
								<p class="texto">Engenheiro de Materiais pela Universidade Federal de São Carlos (2014). <br></p>
								<p class="texto">Mestre em Ciência e Engenharia de Materiais pelo Programa de Pós Graduação em Ciência e 
									Engenharia de Materiais - PPGCEM/UFSCar (2017).<br /></p>
								<p class="texto">Doutorando em Ciência e	Engenharia de Materiais pelo Programa de Pós Graduação em Ciência e 
									Engenharia de Materiais (início 2018).<br /></p>
								
									<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br /> 
								<p class="texto">Tem experiência em desvulcanização através de Extrusão no Estado Sólido e 
									formulação de compostos de borracha. Atualmente é integrante do projeto Estudo e caracterização 
									de polímeros condutores iônicos utilizados como músculos artificiais: propostas para melhoria de 
									desempenho. Estuda o efeito de misturas de líquidos iônicos baseados de 
									alquil-imidazólio com contra-íons alcalinos (Li+, Na+) na 
									caracterização elétrica, térmica e reológica de dispositivos do 
									tipo IPMC baseados de Nafion/Pt, visando obter independência de condições 
									ambientais, estabilidade térmica e elétrica com melhoria de desempenho eletromecânico.</p><br>
									<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br /> 
								<p class="texto">kiqtozzi@hotmail.com<br /></p>
							</p>

							<div class="over">
									<div class="text"> Clique na imagem para abrir o Lattes </div>
							</div>

						</div>

						<div class="foto">
							<legend class="legen">Marina de Sousa de Paula<br /></legend>
							<p><a href="#" onclick="LMarina();"><img src="imagem/marina.png" class="image" title="lattes" align="left" style=" left:1px; top:200px; z-index: 2;" id="direita"/></a>
								
								<b>Formação</b>: <br />
								<p class="texto">Graduanda em engenharia de materiais (UFSCar) <br /></p>
								
								<b>Resumo</b>:<br />
								<p class="texto">Iniciando o projeto “Efeito da degradação do eletrodo metálico 
									no desempenho eletromecânico de atuadores baseados em compósitos de polímero 
									ionomérico e metal” no grupo SMaRT. O projeto tem por objetivo analisar o desgaste 
									do eletrodo em relação a diferença de potencial aplicada, amplitude de deflexão do 
									IPMC, e número de ciclos efetuados. </p><br />
								<b>E-mail</b>:<br> 
								<p class="texto">marinasousadepaula@gmail.com <br /></p>
							</p>
							<div class="over">
								<div class="text"> Clique na imagem para abrir o Lattes </div>
							</div>
						</div>

						<div class="foto">
							<legend class="legen">Matheus Colovati Saccardo</legend>
							<p><a href="#" onclick="Lmatheus();"><img src="imagem/Matheus.jpg" class="image" title="lattes"align="left" style=" left:1px; top:200px; z-index: 1;"/></a>
								
								
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>:<br />
								<p class="texto">Possui graduação em Engenharia de Materiais(UTFPR) com período Sanduiche de 18 meses na Universidade 
									do Tennessee (UTK), USA<br /></p>
								<p class="texto">Mestrando em Engenharia de Materiais (UFSCar)<br /></p>
								
									
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br /> 
								<p class="texto">Integrante do Grupo de Pesquisa em Macromoléculas Inteligentes (SMaRT) com interesse nas linhas 
									de pesquisas de polímeros, 
									polímeros eletroativos, compósitos, atuadores, músculos artificiais e sensores.
									 Atualmente desenvolve um estudo sobre o Comportamento Eletromecânico de Músculos Artificiais Baseados em 
									 Compósitos de Polímero 
									 Ionomérico e Metal por meio da Identificação de Padrões de Imagem, visando otimização destes dispositivos.  <br></p>
									
									<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br /> 
								<p class="texto">matheusaccardo@hotmail.com<br /></p>
							</p>	

							<div class="over">
								<div class="text"> Clique na imagem para abrir o Lattes </div>
							</p>
							</div>
						</div>
						
						<div class="foto">
							<legend class="legen">Rafael Barbosa</legend>
							<p><a href="#" onclick="Lrafael();"><img src="imagem/Rafa.jpg" class="image" title="lattes"align="left" style=" left:1px; top:200px; z-index: 1;"/></a>
								
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>:<br />
								<p class="texto">Engenheiro Mecânico(UNESP -2013)<br /></p>
								<p class="texto">Mestre em Ciência e Engenharia de Materiais pelo Programa de Pós-Graduação em Ciência e 
									Engenharia de Materiais - PPGCEM/UFSCar (2017). <br /></p>
								<p class="texto">Doutorando em Ciência e Engenharia de Materiais pelo Programa de Pós-Graduação 
										em Ciência e Engenharia de Materiais (início 2018) <br /></p>
									
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br /> 
								<p class="texto">É integrante do grupo SMART com o projeto “Desenvolvimento, caracterização e aplicação de novos 
									eletrodos para 
									IPMC baseados em nanotubos de carbono”, no qual procura alternativas para a substituição do eletrodo metálico 
									geralmente utilizado. 
									Mais especificamente, o projeto aborda a preparação de novos eletrodos a partir da adição de nanotubos de 
									carbono em compostos 
									elastoméricos e também a partir da preparação de bulkypapers (“membranas”) de nanotubos de carbono. Estes
									 novos eletrodos são 
									caracterizados quanto às suas características eletroquímicas e compósitos tipo sanduíche são feitos com o
									 Náfion localizado entre duas
									 camadas destes eletrodos. Por fim, o desempenho eletromecânico do novo IPMC é comparado ao tradicional 
									 fabricado por deposição de 
									 platina, buscando melhores atuações, com ciclo de vida mais longo e com menor dependência das condições 
									 ambientias.  <br /></p>
								
								 <b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br /> 
								<p class="texto">rafael.bar8@gmail.com<br /></p>

							</p>	
							<div class="over">
								<div class="text"> Clique na imagem para abrir o Lattes </div>
							</p>
							</div>
						</div>

						<div class="foto">
							<legend class="legen">Roger Gonçalves</legend>
							<p><a href="#" onclick="Lroger();"><img src="imagem/roger.jpg" class="image" title="lattes"align="left" style=" left:1px; top:200px; z-index: 1;"/></a>
								
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>:<br />
								<p class="texto">Mestre em Química (PPGQ-UFSCar - 2014)<br /></p>
								<p class="texto">Doutor em ciências com enfase em físico-química (PPGQ-UFSCar - 2018)<br /></p>
								
									
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br /> 
								<p class="texto">Atualmente atua como pós-doc no SMaRT (desde 2018) agregando uma visão eletroquímica e 
									mecânico-quantica na 
									descrição dos fenomenos eletromecânicos do IPMC. Também desenvolve eletrodos flexiveis baseados em 
									borracha natural e compostos 
									avançados de carbono. <br /></p>
								
									<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br /> 
								<p class="texto">roger.gabiru@gmail.com<br /></p>
							
							</p>
							<div class="over">
								<div class="text"> Clique na imagem para abrir o Lattes </div>
							</p>
							</div>
						</div>

						<div class="foto">
							<legend class="legen">Thaís Almeida Silveira </legend>
							<p><a href="#" onclick="Lthais();"><img src="imagem/thais.jpg" class="image" title="lattes"align="left" style=" left:1px; top:200px; z-index: 1;"/></a>
								
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>:<br />
								<p class="texto">Graduanda em Engenharia de Materiais(UFSCar)<br /></p>
									
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br /> 
								<p class="texto">Preparação do compósito polianilina/nanotubos de carbono, a fim de obter melhorias nas 
									propriedades destes materiais. 
									O objetivo principal é alcançar maior condutividade elétrica para que o compósito possa ser empregado nos 
									músculos artificiais.
									<br /></p>
								
									<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br /> 
								<p class="texto">thais.almeidasilveira@gmail.com<br /></p>
							
							</p>	
							<div class="over">
								<div class="text"> Clique na imagem para abrir o Lattes </div>
							</p>
							</div>
						</div> 

						<div class="foto">
							<legend class="legen">Thiago Maffei </legend>
							<p><a href="#" onclick="Lthiago();"><img src="imagem/thiago.jpeg" class="image" title="lattes"align="left" style=" left:1px; top:200px; z-index: 1;"/></a>
								
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>:<br>
								<p class="texto">Terceiranista de Engenharia de Materiais(UFSCar) e bolsista de iniciação científica 
									FAPESP desde Agosto de 2019<br /></p>
									
									<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br> 
								<p class="texto">Atualmente, desenvolve o projeto “Estudo da Cinética de absorção de água em compósitos de polímero 
									ionomérico e metal” 
									no grupo  SMaRT, visando investigar a cinética de absorção de água e comportamento eletromecânico de IPMCs, 
									utilizando diferentes 
									contra-íons e em diferentes umidades relativas em ambiente controlado.<br /></p>
							
									<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br /> 
								<p class="texto">thiagopmaffeid@gmail.com<br /></p>

							</p>	
							<div class="over">
								<div class="text"> Clique na imagem para abrir o Lattes </div>
							</p>
						</div>
					</div>
						
					
						


					</div>
				</div>
			</div>

			
			<a href="#topo" style="color: #F00" class="glyphicon glyphicon-chevron-up"> Voltar ao topo</a>
			<div class="rodape">
				<div class="inter">
					<a href="#" onclick="abreLink();" style="color: white">Copyright &copy; - Criado por Lucas Vidotto</a><br />
				</div>
			</div>

		</div>
    )
}
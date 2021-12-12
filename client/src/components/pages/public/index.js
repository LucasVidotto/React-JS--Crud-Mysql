import React from 'react';
import { Link } from 'react-router-dom';

import './styles/menu.css';
import './styles/fundo.css';
import './styles/space-para.css';

import Logo from '../../../assets/img/Logo.png';
import LogoUfscar from '../../../assets/img/LogoUFSCar.jpg';

export default function Page(){
    return(
        <div>
            <div className="principal">
                <div className="cabecalho">
                    <div className="logo">
                        <img src={LogoUfscar} alt="Logo Ufscar" width="15%" height="20%" align="right"/>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li> <Link to="/">Início</Link> </li>
                        <li> <Link to="/membros">Membros</Link> </li>
                        <li> <a href="pesquisa.html">Linha de Pesquisa </a> </li>
                        <li> <Link to="/publicacao">Publicações </Link></li>
                        <li> <a href="contato.html">Contato</a> </li>

                    </ul>
			    </div>
                <div class="corpo">
				<div class="artigos">
					<div class="espacamento">
						<p>
							<img src={Logo} />
						</p>
						<p class="resumo">
						
							Materiais inteligentes (Smart Materials) são materiais capazes de perceber alterações no ambiente ao qual estão inseridos 
							respondendo de maneira pré-determinada. Normalmente estas respostas ocorrem de maneira não óbvia, como, por exemplo, mudança de 
							módulo elástico em uma direção através de aplicação de campo magnético.
						</p><br />
						<p class="resumo">
							O grupo SMaRT (Smart Macromolecules Research Team), alocado no Departamento de Engenharia de Materiais da Universidade Federal de 
							São Carlos, tem com objetivo de pesquisa a síntese e caracterização de uma subclasse destes materiais, os polímeros eletroativos 
							(eletroactive polymers ou EAP).
						</p><br />
						 <p class="resumo">
							Os EAPs são polímeros que reagem a estímulos elétricos com mudanças em sua forma e/ou dimensões. 
							Dentre as aplicações de EAPs estão músculos artificiais e sensores de deformação.
						</p>
						
			
					</div>
				</div>
				<div className="barra-lateral">
					<div className="espacamento">
						Entrevista para o LAbI: <p className="resumo">Pesquisas da UFSCar desenvolvem materiais que atuam como músculos artificiais</p>
						<td className="f1" rowspan="6"><a href="http://www.labi.ufscar.br/2017/01/03/pesquisas-da-ufscar-desenvolvem-materiais-que-atuam-como-musculos-artificiais/  "><img title="" src="imagem/video.jpg" alt="poster"/></a></td>
						
						<p>
							<img src="imagem/menu/a1.jpeg" />
						</p>
						<p>
							<img src="imagem/menu/a2.jpeg" class="vertical-img" />
						</p>
						<p>
							<img src="imagem/menu/a3.jpeg" class="vertical-img" />
						</p>
					</div>
				</div>
			</div>
            </div>
            <div className="rodape">
				<div className="inter">
					Copyright &copy; - Criado por Lucas Vidotto<br></br>
				</div>
			</div>
        </div>
    )
}


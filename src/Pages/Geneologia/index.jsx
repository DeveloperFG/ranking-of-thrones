import React, {useContext} from 'react'

import { UserContext } from '../../Context/user'

import './index.css'

import casaStark from '../../brasao/casa-stark.webp'
import casaTargeryen from '../../brasao/casa-targaryen.webp'
import casaLannister from '../../brasao/casa-lannister.webp'
import casaBaratheon from '../../brasao/casa-baratheon.webp'
import casaGreyjoy from '../../brasao/casa-greyjoy.webp'
import casaLArryn from '../../brasao/casa-arryn1.webp'
import casaLTully from '../../brasao/casa-tully.webp'


const Geneologia = () => {


    return (
        <div className='divGene'>
           <h2>CASA STARK</h2>
           <img src={casaStark}/>
           <p>Os senhores do Norte são conhecidos pela honra – o que costuma colocá-los em situações complicadas. Foi o caso de Eddard, vulgo Ned, que perdeu a cabeça ao tentar fazer o certo. Pelo menos Sansa e Jon Snow (que, vimos no fim da sexta temporada, não é o filho bastardo de Ned, mas seu sobrinho, filho de Lyanna com, ao que tudo indica, Rhaegar Targaryen) retomaram o castelo que deixaram na primeira temporada. Enquanto isso, Bran, ao norte da Muralha, continua explorando seu poder de viajar no tempo, e Arya tornou-se uma assassina.</p>
           <div className='divSmall'>
            <small>Lema: “O inverno está chegando” <small> Símbolo: Lobo <small>Sede: Winterfell</small></small></small>
           </div>  

           <h2>CASA TARGARYEN</h2>
           <img src={casaTargeryen}/>
           <p>Os Targaryen dominaram os Sete Reinos durante séculos, até Aerys II ameaçar tacar fogo na população de Porto Real, sendo morto por Jaime Lannister, e uma rebelião liderada por Robert Baratheon assassinar seu herdeiro, Rhaegar. Casada com Rhaegar Targaryen, Elia Martell foi assassinada, junto com seus dois filhos, por dois soldados Lannister. Mas os Targaryen estão de volta com Daenerys, que depois de conquistar povos, queimar inimigos e comprar exércitos, navega em direção à Pedra do Dragão, como única herdeira. Isso até que o mundo saiba que Jon Snow, na verdade, é um Targaryen, e seu sobrinho.</p>
           <div className='divSmall'>
            <small>Lema: “Fogo e sangue” <small> Símbolo: Dragão <small>Sede: Pedra do Dragão</small></small></small>
           </div>  

           <h2>CASA LANNISTER</h2>
           <img src={casaLannister}/>
           <p>Arrogantes e sem escrúpulos, os Lannister são ricos, mas sempre pagam seus débitos. Filhos do poderoso Tywin, os gêmeos Cersei e Jaime, amantes, são os verdadeiros pais de Joffrey, Myrcella e Tommen, em tese filhos do rei Robert Baratheon – e todos já mortos. Cersei agora ocupa o Trono de Ferro depois de se livrar do Alto Pardal, líder da Fé dos Sete, e da rainha Margaery, mulher de Tommen, que por isso se suicidou. O irmão mais novo de Cersei e Jaime, Tyrion, é a Mão da Rainha Daenerys.</p>
           <div className='divSmall'>
            <small>Lema: “Ouça-me rugir <small> Símbolo: Leão <small>Sede: Rochedo Casterly</small></small></small>
           </div>  

           <h2>CASA BARATHEON</h2>
           <img src={casaBaratheon}/>
           <p>No início de Game of Thrones, o rei Robert Baratheon foi morto a mando de sua mulher, Cersei. Ned Stark, Mão do Rei, sabendo que Joffrey, supostamente filho mais velho do casal, não era um Baratheon, mas um Lannister, defendeu que Stannis, irmão do meio de Robert, ocupasse o trono. O irmão mais jovem, Renly, também queria a coroa. Ned foi morto a mando de Joffrey, o que causou o início da guerra entre os Lannister, Stannis, Renly, Balon Greyjoy e o filho mais velho de Ned, Robb. Stannis e Renly morreram, mas um dos bastardos de Robert, Gendry, está vivo.</p>
           <div className='divSmall'>
            <small>Lema: “Nossa é a fúria <small> Símbolo: Veado <small>Sede: Ponta Tempestade</small></small></small>
           </div>  

           <h2>CASA GREYJOY</h2>
           <img src={casaGreyjoy}/>
           <p>O retorno de Euron, o irmão exilado de Balon, transformou as coisas na Casa Greyjoy. Euron jogou Balon de uma ponte e foi declarado rei, em vez de seus sobrinhos Yara e Theon, de volta depois de anos como refém de Ned Stark em Winterfell, onde foi criado como um dos filhos, mas depois os traiu. Theon, que sofreu torturas nas mãos de Ramsay Bolton quando a família tomou Winterfell dos Stark, foge com sua irmã Yara e se alia a Daenerys, cedendo a ela seus navios e navegando em direção de Westeros. </p>
           <div className='divSmall'>
            <small>Lema: Nós não semeamos <small> Símbolo: Lula <small>Sede: Pyke</small></small></small>
           </div>  

           <h2>CASA ARRYN</h2>
           <img src={casaLArryn}/>
           <p>Jon Arryn, antiga Mão do Rei Robert Baratheon, foi morto quando descobriu que, na verdade, os filhos da rainha Cersei eram de seu irmão gêmeo Jaime e, portanto, não estavam na linha sucessória do Trono de Ferro. No Vale, a região que os Arryn dominam, sua viúva, a desequilibrada Lysa, irmã de Catelyn Stark, ficou no comando, enquanto o herdeiro, o mimadíssimo Robin, não tinha idade suficiente. Lysa se casou com o manipulador Petyr Baelish e acabou morta por ele. Baelish e os soldados do Vale, recrutados por Sansa Stark, foram a salvação de Jon Snow na Batalha dos Bastardos na sexta temporada. Agora, o homem conhecido como Mindinho conspira para criar uma briga entre os meio-irmãos (na verdade, primos) Jon Snow e Sansa.</p>
           <div className='divSmall'>
            <small>Lema: Tão Alto como a Honra <small> Símbolo: Falcão e Quarto Crescente <small>Sede: Ninho da Águia</small></small></small>
           </div>  

           <h2>CASA TULLY</h2>
           <img src={casaLTully}/>
           <p>Com sua aliança com os Lannisters, os Frey ajudaram a praticamente acabar com a Casa Tully. No Casamento Vermelho, entre Edmure Tully e uma das filhas de Walder Frey, assassinaram Catelyn Stark, originalmente uma Tully, seu filho Robb e sua nora Talisa. Depois, no cerco a Correrrio, mataram Brynden Tully, conhecido como Peixe Negro, após fazer Edmure de refém, e ficaram com suas terras. Mas Arya Stark vingou os Stark e os Tully ao servir a Walder Frey uma torta feita com seus próprios filhos e, depois, cortar sua garganta, no fim da sexta temporada.</p>
           <div className='divSmall'>
            <small>Lema: Família, dever, honra <small> Símbolo: Truta Crescente <small>Sede: Correrrio </small></small></small>
           </div>  
        </div>
    )
}

export default Geneologia
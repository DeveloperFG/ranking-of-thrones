import React, { useContext, useState, useEffect} from 'react';
import { UserContext } from '../../Context/user'
import firebase from '../../firebaseConnection';

import ReactAudioPlayer from 'react-audio-player';

import Scroll from '../../components/Scroll/Scroll';
import { Spinner } from '../../components/Spinner';

import Modal from '../../components/Modal/Modal';

import teste1 from '../../audio/game.mp3'

import './Home.css';



function Home() {

  const [isModalVisible, setIsModalVisible] = useState();
  const [select, setSelect] = useState();
  const [ativaAudio, setAtivaAudio] = useState(0);
  const [loading, setLoading] = useState(false)

   let {voto, votado, setVotado, votosComputados, setVotosComputados, listaStorage, setListaStorage } = useContext(UserContext);

   // funcão para fechar side bar tocando na tela
//    const closeSidebar = () => {
//     if (sidebar === true) {
//         setSidebar(!sidebar);

//     } else if (sidebar === false) {
//         console.log('nda')
//     }

// }

useEffect(() => {

  async function loadVotos() {
      await firebase.firestore().collection('participantes').onSnapshot((doc) => {
          let DataUser = [];

          doc.forEach((doc) => {
              DataUser.push({
                  id: doc.id,
                  casa: doc.data().casa,
                  nome: doc.data().nome,
                  votado: doc.data().votado,
                  votos: doc.data().votos,
                  sobre: doc.data().sobre,
                  img: doc.data().img,
              })

          })
          setVotosComputados(DataUser)
          
      })
          .catch(() => {
              console.log('Erro ao buscar no Banco!!!')
              console.log('DEU ALGUM ERRO ')
          })

  }

  loadVotos()

}, [])


handleStorage()

function handleStorage(){
   localStorage.setItem('thrones', JSON.stringify(votosComputados))
}



async function handleVoto(selecionado) {
          // setVotos(selecionado.votos + 1)
          // setVotado(true)
          setLoading(true)
  await firebase.firestore().collection('participantes')
      .doc(selecionado.id)
      .update({
          votos: selecionado.votos + 1,
          votado: votado,
      })

      .then(() => {
        alert(select.map((item) => 'Você votou em ' + item.nome))
          console.log('Dados salvos!')
          setLoading(false)
          // console.log(selecionado.votos)
      })
      .catch((error) => {
          console.log(error + 'Erro ao salvar!')
      })

      
}


  // function filtrarPontos(selecionado){
  //   let newPontos = votosComputados.filter((item)=>{
  //     return (item.nome === selecionado.nome)
  //   })
  //   setVotoRank(newPontos)
  // }


  function filtrar(selecionado) {
    let selectt = votosComputados.filter((item) => {
      return (item.nome === selecionado.nome)
    
      
    })

    setSelect(selectt)
    setIsModalVisible(!isModalVisible)

    // ativar musica ao clicar num personagens
    // setAtivaAudio(ativaAudio + 1)

    // if (ativaAudio === 0) {
    //   new Audio(teste1).play()
    // }
  }

  function playAudio() {
    new Audio(teste1).play()

  }


  return (
    <div className='geral'>
      <Scroll />
        <div className='divSmall'>
            <small>VOTE NO SEU PERSONAGEM PREFERIDO</small>
        </div> 
      <div className='divContainer'>
        {votosComputados.map((item, index) => {
          return (
            <div key={index} className='cont2'>
               <small><strong>{item.votos} {item.votos > 1 ? 'votos':'voto'}</strong> </small>
              <div className='dados'>
                <a href='#modalInfo'>
                  <img src={item.img} onClick={() => filtrar(item)} />
                  <h3>{item.nome}</h3>
                </a>
              </div>
            </div>
          )
        })}
      </div>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <div id='modalInfo'>
            {select.map((item, index) => {
              return (
                <a key={index} className='divModal'>
                  <h1>{item.nome}</h1>
                  <small> Casa:{item.casa}</small>
                  <img src={item.img} />
                  <section className='sobre'>
                    <textarea>{item.sobre}</textarea>
                  </section>
                  <div className='divBtn'>  
                        <button onClick={() => handleVoto(item)}>{!loading ? 'VOTAR' : 'REGISTRANDO VOTO'}</button>     
                  </div>
                </a>
              )
            })}
          </div>
        </Modal>
      ) : null}

      <div className='divPlayer'>
        <ReactAudioPlayer
          src={teste1}
          autoPlay={true}
          // controls
        />
      </div>
      {/* <button className='btn' onClick={playAudio}>play</button> */}
    </div>

  );
}

export default Home;

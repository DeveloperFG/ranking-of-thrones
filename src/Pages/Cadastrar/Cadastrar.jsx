import React, {useState, useEffect} from 'react'
import firebase from '../../firebaseConnection';


import './Cadastrar.css'


const Cadastrar = () => {

  const [nome, setNome] = useState('')
  const [casa, setCasa] = useState('')
  const [imgAvatar, setImgAvatar] = useState('')
  const [url, setUrl] = useState('')
  const [voto, setVoto] = useState(0)
  const [votado, setVotado] = useState(false)
  const [sobre, setSobre] = useState('')



  function handleFile(e){
      // console.log(e.target.files[0])

      if(e.target.files[0]){

        const image = e.target.files[0];

        if(image.type === 'image/jpeg' || image.type === 'image/png'){

            setImgAvatar(image)
            setUrl(URL.createObjectURL(e.target.files[0]))

        }else{
            alert('envie uma imagem do tipo PNG ou JPEG')
            setImgAvatar(null);
            return null;
        }

    }
  }


  async function handleUpload(){

    const uploadTask = await firebase.storage()
    .ref(`img/${imgAvatar.name}`)
    .put(imgAvatar)
    .then( async ()=>{    

        // alert('Dados salvos com sucesso!')

        await firebase.storage().ref('img')
        .child(imgAvatar.name).getDownloadURL()
        .then(async (ul) => {
            let urlFoto = ul;

            await firebase.firestore().collection('participantes')
            .doc()
            .set({
              nome:nome,
              casa: casa,
              sobre:sobre,
              votos: voto,
              votado: votado,
              img:urlFoto
          })
          .then(() => {
            setNome('');
            setCasa('');
            setSobre('');
            alert('Cadastrado com sucesso!')
           
        })
        .catch((error) => {
          console.log(error + 'Deu algum erro')
    })
  })
    
  })
}

  return (
    <div className='cadastrarConteiner'>
        <section className='cadastrar'>
          <h1>Novo Participante</h1>
              <span>Nome:</span>
              <input 
                value={nome}
                onChange={(e)=> setNome(e.target.value)}
                placeholder='Digite aqui'
              />
              <span>Casa:</span>
              <input
                value={casa}
                onChange={(e)=> setCasa(e.target.value)}
                placeholder='Digite aqui'
              />
              <span>Imagem:</span>
              <label className='label-avatar'>
                    <input type='file' accept='image/*' onChange={handleFile}/> <br/>
                </label>
              <span>Sobre:</span>
              <textarea
                value={sobre}
                onChange={(e)=> setSobre(e.target.value)}
                placeholder='Digite aqui'
              />
               
        </section>
        <div className='divButton'>
            <button onClick={handleUpload}>Cadastrar</button>
        </div>      
    </div>
  )
}

export default Cadastrar

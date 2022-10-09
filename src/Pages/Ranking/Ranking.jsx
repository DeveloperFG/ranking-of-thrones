import React,{useContext, useEffect, useState} from 'react'
import { UserContext } from '../../Context/user';
import './Ranking.css'

const Ranking = () => {



  let {listaStorage, setListaStorage } = useContext(UserContext);


  
  useEffect(()=>{

    function loadStorage(){
      const storageUser = localStorage.getItem('thrones');
  
      if(storageUser){
        setListaStorage(JSON.parse(storageUser))
        
      }
    }
    
    loadStorage()

},[])


    let quantVotos = listaStorage.sort((a, b) => {
       return a?.votos >= b?.votos ? -1 : 1;
   });


   let totalVotos = quantVotos.map(item => item.votos).reduce((prev, curr) => prev + curr, 0)


  return (
    <div className='containerRanking'>
      {quantVotos.map((item, index)=>{
        return(
          <div key={index} className='RankingItens'>
            <div>
              <img src={item.img}/>
            </div>
           <div className='itensDois'>
              <p>{item.nome}</p>
               <small>Casa: {item.casa}</small>
           </div>
           <div className='itensTres'>
                <small>{item.votos } <small>{item.votos > 1 ? 'votos':'voto'}</small></small>
               <h1>{((item.votos / totalVotos)*100).toFixed(2)}%</h1>
           </div>
            
          </div>
        )
      })}
    </div>
  )
}

export default Ranking

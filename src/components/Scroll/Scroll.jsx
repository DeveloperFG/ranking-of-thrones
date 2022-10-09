import React from 'react'

import { Link } from 'react-router-dom'

import warrior from '../../img/warrior.png'
import trono from '../../img/trono.png'
import stark from '../../img/stark.png'
import mao from '../../img/mao.png'

import './Scroll.css'


const Submenu = [
    {
        titulo: 'Melhor Rei',
        img: trono,
    },
    {
        titulo: 'Melhor Mão',
        img: mao,
    },
    {
        titulo: 'Melhor Guerreiro',
        img: warrior,
    },

    {
        titulo: 'Melhor Personagem',
        img: stark,
    },

]

const Scroll = () => {
    return (
        <div className='wrapper'>
            {Submenu.map((item, index) => {
                return (
                    <div className='subMenu' key={index}>
                        <Link onClick={()=> alert('em desenvolvimento')}>
                        <div className='top'>
                            <div className='item'>
                                <div className='subImg'>
                                    <img src={item.img}></img>
                                </div>
                                <div className='subBtn'>
                                    <button> {item.titulo}
                                    </button>
                                </div>

                              </div>
                         </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Scroll
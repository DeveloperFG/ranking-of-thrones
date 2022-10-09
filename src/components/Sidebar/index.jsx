import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Content } from './styles'
// import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
// import * as FiIcons from 'react-icons/fi'
// import * as SiIcons from 'react-icons/si'
import * as BiIcons from 'react-icons/bi'

import SidebarItem from '../SidebarItem'

import banner2 from '../../img/banner2.jpg'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

   // funcão para fechar side bar tocando na tela
//    const close = () => {
//     if (active === true) {
//          active(!false)

//     } else if (active === false) {
//         console.log('nda')
//     }

// }

  return (
    <Container sidebar={active}>
      <FaIcons.FaTimes onClick={closeSidebar} />  
      <Content>
        <Link to='/'>
         <SidebarItem Icon={FaIcons.FaHome} Text="Home"/>
        </Link>  
        <Link to='/Geneologia'>
          <SidebarItem Icon={BiIcons.BiMaleSign} Text="Genealogia" />
        </Link>
        {/* <SidebarItem Icon={FiIcons.FiTrendingUp} Text="Anuncie" /> */}
        {/* <SidebarItem Icon={SiIcons.SiMinutemailer} Text="Contato" /> */}
        {/* <Link to='/Cadastrar'>
          <SidebarItem Icon={AiIcons.AiOutlineUserAdd} Text="New Users" />
        </Link> */}
        <Link to='/Ranking'>
          <SidebarItem Icon={BiIcons.BiLineChart} Text="Ranking" />
        </Link>
        <img className='wallpaper' src={banner2}/>
      </Content>
    </Container>
  )
}

export default Sidebar
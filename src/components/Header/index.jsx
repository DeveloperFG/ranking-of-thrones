import React, { useState } from 'react'
import { Container, divContainer } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'


import stark from '../../img/stark.png'
import banner3 from '../../img/banner3.png'
// import metalica from '../../img/metalica.jpg'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>  
        <FaBars onClick={showSiderbar} />
           <img className='banner3' src={banner3}/>
           {sidebar && <Sidebar active={setSidebar} />}  
           <img src={stark}/>
    </Container>
  )
}

export default Header
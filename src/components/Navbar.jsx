import React from 'react'
import Navcontainer from './Navcontainer'
import Buttonresp from './Buttonresp'
import Title from './Title'

function Navbar() {
  return(
  <nav className = "navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <Title/>
  <Buttonresp/>

  <Navcontainer/>

</nav>
  )
}

export default Navbar
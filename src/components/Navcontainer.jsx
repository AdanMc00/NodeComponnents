

import React from 'react'
//import Title from './Title'
import Home from './Home'
import Link from './Link'
import Disabled from './Disabled'
import Itemdropdown from './Itemdropdown'
import Search from './Search'
import Button from './Button'

function Navcontainer() {
  return(

<div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
  
  <Home/> 
  <Link/>
  <Disabled/>
  <Itemdropdown/>
  </ul>
  <Search/>
  <Button/>
</div>
  )
}


export default Navcontainer
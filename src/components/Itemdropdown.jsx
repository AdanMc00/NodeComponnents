import React from 'react'
import Menudropdown from './Menudropdown'

function Itemdropdown(){
  return(

<li className = "nav-item dropdown">
        <a className = "nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <Menudropdown/>
              </li>
      
    
  )
  
}

export default Itemdropdown
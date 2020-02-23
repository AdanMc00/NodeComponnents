import React from 'react'

function Disabled(){
  return(

    <li className = "nav-item">
        <a className = "nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
  )
}


export default Disabled


import React from 'react'

import "./Desktop.css"
import Smallrow from '../Desktop/Top/Top'
import Bottom from '../Desktop/bottom/Bottom'
import Middle from '../Desktop/middle/middle'

// import Video from'./AddRowVideo'


function Desktop({large,video,small}) {

    

 
    return (
    <div className="desk">
   
 
   <Bottom/>
      <Middle/>
     
      <Smallrow />
    </div>
 

      
       
    )
}

export default Desktop



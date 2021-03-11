
import React from "react";
import YouTube from "react-youtube";

import   './Middle.css'




function AddRowVideo({play}) {
    
    const opts = {
      height: '600',
      width: '100%',
      playerVars: {
      
        autoplay: 1,
        mute:1
      },
    };
   

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
   

  return (
     


  <div className="videorow" >
  
   

    
     <div className="Videoposters" >
        
     <YouTube className="Videoposter" videoId={play.play} opts={opts} ></YouTube>
  
  
  </div>
      </div>
    
  )
}

export default AddRowVideo

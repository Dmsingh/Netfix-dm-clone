import React from 'react'
import Long from './AddBannerRow'
import Video from './AddRowVideo'
import getVideo from "../../../../Important/getVideo";
function Middle() {
    const count=(video)=>{
        return video[
             Math.floor(Math.random() *  video.length)
           ]
          
      }
    return (
        <div className="middleadd" >
            <div className="middleaddleftcorner" >
        <Long />
        <Long />

        <Long />
        <Long/>

            </div>
            <div className="middleaddlemiddle">
             <Video play={count(getVideo.video2)}/> 
            
              
            </div>
           
            <div className="middleaddlerightcorner">
        <Long />
        <Long />

        <Long />
      <Long/>
            </div>
        
        </div>
    )
}

export default Middle

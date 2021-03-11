import React from 'react'
import Mob from './AddSmallrow'
function Mobile({small}) {
    return (
        <div className="mob">
          <Mob get={small} />
           </div>
    )
}

export default Mobile

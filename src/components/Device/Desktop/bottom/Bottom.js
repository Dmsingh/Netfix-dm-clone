import React from 'react'
import Large from './AddRow'
import request from "../../../../Important/request";
function Bottom() {
    return (
        <div>
              <Large get={request.fetchActionMovies}/>
        </div>
    )
}

export default Bottom

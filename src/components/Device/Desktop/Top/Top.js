import React from 'react'
import SmallRow from './AddSmallrow'
import request from '../../../../Important/request'
function Top() {
    return (
        <div>
       <SmallRow get={request.fetchRomanceMovie} />
        </div>
    )
}

export default Top

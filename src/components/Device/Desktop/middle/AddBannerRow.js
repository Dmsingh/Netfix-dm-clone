import React,{useState,useEffect} from 'react'
import data from '../../../../Important/AddsFile/BannerAddData'
import  "./Middle.css"

const baseURL="https://image.tmdb.org/t/p/original"
function AddBannerRow() {
    const [Long, setLong] = useState([])

    useEffect(() => {
     async function getData(){
         const request = await data.results
         setLong(request[Math.floor(Math.random()* request.length)])
         return request
     }

     getData()
     let timerId = setInterval(() => getData(), 20000);
     setTimeout(() => { clearInterval(timerId); }, 200000);
     
    }, [data.results])
  
    return (
        <div className="LongAdds" >
            {
            
                    <img
                    key={Long.id}
                     src={`${baseURL}${Long.poster_path}`} 
                     alt={Long.name }  className="longadds"/>
              
            }
        </div>
    )
}

export default AddBannerRow

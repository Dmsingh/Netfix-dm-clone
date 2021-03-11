import React, { useState, useEffect } from "react";

import axios from "../../../Important/axios";
import   './Mobile.css'


const baseURL="https://image.tmdb.org/t/p/original";


function MobAddSmall({get}) {
    const [movies, setmovies] = useState([]);
  
    
      useEffect(() => {
        async function fetchData() {
          const requests = await axios.get( get );
          setmovies(requests.data.results)
          return requests;
        }
        fetchData();
      }, [get]);

      
   
    return (
        <div>


    <div className="row">
    
     

      
       <div className="poster2">
          
             {
             movies.map(movie=>(
               <img 
              
              key={movie.id}
               className={`mobileposter`} src={`${baseURL}${movie.backdrop_path}`} alt={movie.name}/>
             ))
         }
       </div>
    
    </div>
        </div>
    )
}

export default MobAddSmall

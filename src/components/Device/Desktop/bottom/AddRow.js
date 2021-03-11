import React, { useState, useEffect } from "react";

import axios from "../../../../Important/axios";
import   './Bottom.css'
import request from '../../../../Important/request'

const baseURL="https://image.tmdb.org/t/p/original";


function AddRow({get}) {
    const [movies, setmovies] = useState([]);
  
   
      useEffect(() => {
        async function fetchData() {
          const requests = await axios.get( get );
     setmovies(requests.data.results)
        }
        fetchData();
      }, [get]);

      const [moviebanner, setmoviebanner] = useState([]);
      useEffect(() => {
        async function getBanner() {
          const requests =await axios.get(get );
        
          setmoviebanner(
            
            requests.data.results[
              Math.floor(Math.random() *  requests.data.results.length)
            ]
          );
          return request;
        }
        getBanner();
      }, []);
   
    return (
        <div>


    <div className="row">
    
     

      
       <div className="Addsposters">
           <>
             <img 
              
             key={moviebanner.id}
              className={`largeAddsposterbanner`} src={`${baseURL}${moviebanner.backdrop_path}`} alt={moviebanner.name}/>
             </>
             {
             movies.map(movie=>(
               <img 
              
              key={movie.id}
               className={`largeAddsposter`} src={`${baseURL}${movie.backdrop_path}`} alt={movie.name}/>
             ))
         }
       </div>
    
    </div>
        </div>
    )
}

export default AddRow

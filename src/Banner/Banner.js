import axios from "../Important/axios";
import React, { useState, useEffect } from "react";
import requests from "../Important/request";
import "./Banner.css"

function Banner({mob,movieType}) {
    const truncate=(str,n)=>{
        return str?.length >n ?str.substr(0,n-1)+" ...":str

    }
  const [moviebanner, setmoviebanner] = useState([]);
  useEffect(() => {
    async function getBanner() {
      const request =await  axios.get(requests.fetchRomanceMovie);
    
      setmoviebanner(
        
        request.data.results[
          Math.floor(Math.random() *  request.data.results.length)
        ]
      );
      return request;
    }
    getBanner();
  }, []);
  // console.log(moviebanner)
  return (
    <header className="banner" style={{
        backgroundSize:"cover",
        backgroundPosition:"center center",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${moviebanner?.backdrop_path}")`}}>
        <div className="banner_container">
        <h1 className={`banner_title ${mob &&'mob_title'}`}>
            {moviebanner?.title||moviebanner?.name||moviebanner?.original_name}
        </h1>
        <div class="banner_button" >
   
        </div>
       
        <div class="banner_desc" className={`banner_desc ${mob &&'mob_desc'}`}>

            {truncate(moviebanner?.overview,150)}
        </div> 
        </div>
      <div class="banner_bottom" ></div>

    </header>
  );
}

export default Banner;

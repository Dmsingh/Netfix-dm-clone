import React, { useEffect, useState } from 'react'
import { BrowserView, MobileView } from "react-device-detect";
import Navbar from '../Navbar/Navbar';
import Movie from './Movie';
import { useParams } from "react-router";


import request from "../../Important/request";
import axios from "../../Important/axios";
import MobMovie from './MobMovie';
import MobBar from '..//Navbar/MobBar'
function Movieadd() {
    const param=useParams()
    const URL=[
    
        {
           "Name": "Netflix Original",
           "URL":request.fetchNetflixOriginal
        },
        {
           "Name": "Trending Now",
           "URL":request.fetchTrending
        },
        {
           "Name": "Top Rated",
           "URL":request.fetchTopRated
        },
        {
           "Name": "Action",
           "URL":request.fetchActionMovies
        },
        {
           "Name": "Comedy",
           "URL":request.fetchComedyMovie
        },
        {
           "Name": "Thriller",
           "URL":request.fetchThrillerMovies
        },
        {
           "Name": "Romance",
           "URL":request.fetchRomanceMovie
        }
    ]
    
  
    const fetchUrl=URL.findIndex(obj=>{
      // eslint-disable-next-line eqeqeq
      return  obj.Name==param.title
             
        
    })
 
    const FetchUrl=(URL[fetchUrl].URL)
    
    
    const [movies, setmovies] = useState([]);
    

    ///finding movie by id
    useEffect(() => {
        async function fetchData() {
          const requests = await axios.get(FetchUrl);
          
         
          
          setmovies(requests.data.results);
          return requests;
        }
        fetchData();
      }, []);
     // console.log(movies)
    const index=movies.findIndex(obj=>{
        // eslint-disable-next-line eqeqeq
        return obj.id==param.id
    })
 
        
    return (
        <div>
            <BrowserView>
<Navbar/>
            <Movie fetchUrl={FetchUrl} index={index} movies={movies} movieType={param.movieType} title={param.title} />
            {/* <MobMovie fetchUrl={FetchUrl} index={index} movies={movies} movieType={param.movieType} title={param.title} /> */}
            
            </BrowserView>

            <MobileView>
               <MobBar/>
               
            <MobMovie fetchUrl={FetchUrl} index={index} movies={movies} movieType={param.movieType} title={param.title} />
              
            </MobileView>
        </div>
    )
}

export default Movieadd

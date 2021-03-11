import React from 'react'
import Row from "../components/Row/Row";
import request from "./request";
import Banner from"../Banner/Banner"
import Navbar from "../components/Navbar/Navbar";


function Wood( {type,mob}) {
    return (
    <div>

     
   <Navbar movieType={type} mob={mob} /> 
     <Banner mob={mob} movieType={type}/>
     <Row movieType={type} title="Netflix Original" fetchUrl={request.fetchNetflixOriginal } isLargeRow />
      <Row movieType={type} title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row movieType={type} title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row movieType={type} title="Action" fetchUrl={request.fetchActionMovies} />
      <Row movieType={type} title="Comedy" fetchUrl={request.fetchComedyMovie} />
      <Row movieType={type} title="Thriller" fetchUrl={request.fetchThrillerMovies} />
      <Row movieType={type} title="Romance" fetchUrl={request.fetchRomanceMovie} />
     
 
     
   
      
   
    </div>
    )
}

export default Wood

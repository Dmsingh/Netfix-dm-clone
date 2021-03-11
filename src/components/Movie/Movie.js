import { Divider, IconButton } from "@material-ui/core";
import React, {  useState } from "react";
import "./Movie.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import SubscriptionsRoundedIcon from "@material-ui/icons/SubscriptionsRounded";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

import { NavLink } from "react-router-dom";


const baseMURL = "/movies/movie_category";
const baseURL = "https://image.tmdb.org/t/p/original";

function Movie({ fetchUrl, index, movies, movieType, title }) {
  let last = true;
  if (index === -1) {
    last = false;
  } else {
    last = true;
  }
  const [trailerUrl, settrailerUrl] = useState("");



  const handelClick = (movie) => {
  
  

   
    if (trailerUrl) {
    
      settrailerUrl("");
    
      document.getElementById("istatus").removeAttribute('hidden');
    } else {
  

      movieTrailer(
        movies[index]?.name ||
          movies[index]?.title ||
          movies[index]?.original_name
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          
          settrailerUrl(urlParams.get("v"));
        
          document.getElementById("istatus").setAttribute('hidden',true);
          console.log("not")
        })

        .catch((err) => {
          document.getElementById(
            "istatus"
          ).innerHTML = ` "Sorry! trailer Not found" `;
          document.getElementById("istatus").style.color = "white";
          document.getElementById("istatus").style.fontSize = "60px";
          document.getElementById("istatus").style.left = "20%";

          document.getElementById("player").style.opacity = 0.1;
          setTimeout(() => {
            document.getElementById(
              "istatus"
            ).innerHTML = ` "Please! Refresh this page" `;
            document.getElementById("player").style.opacity = 0.07;
          }, 2000);

          window.location.reload();

          console.log(err, "Dm");
        });
    }
  };
  const opts = {
    height: "600px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handelvideo = () => {
    settrailerUrl(" ");
    handelClick()
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
  
  };

  


  return (
    <div className="outerRow">
      <div className="innerRow">
        <div className="Player" id="player">
          {!trailerUrl ? (
            <img
              
              src={`${baseURL}${last ? movies[index].backdrop_path : null}`}
              alt=""
            />
          ) : (
            <YouTube videoId={trailerUrl} opts={opts} />
          )}
          <div className="status" id="istatus">
            <IconButton  onClick={handelClick} className="Playbtn">
              <PlayCircleFilledIcon fontSize="default" className="playround" />
           
            </IconButton>
          </div>
        </div>

        <div className="Content">
          <div className="movie-header">
            {last ? movies[index].original_name || movies[index].title : null}
          </div>
          <div className="Buttons">
            <IconButton  className="mbutton" disableRipple>
              { " "}
              <GetAppRoundedIcon fontSize="large" /> Download
             
            </IconButton>
            <Divider orientation="vertical" className="divider" />
            <IconButton className="mbutton">
              {" "}
              <ShareRoundedIcon fontSize="large" />
              Share
            </IconButton>
            <Divider orientation="vertical " className="divider" />

            <IconButton className="mbutton">
              {" "}
              <SubscriptionsRoundedIcon fontSize="large" /> Subscribe
            </IconButton>
          </div>
          <div className="movie-content">
            Uploaded on{" "}
            {last
              ? movies[index].first_air_date || movies[index].release_date
              : null}
            <br></br>
            Uploaded by <mark>DM Singh</mark>
            <br />
            <br />
            <br></br>
            <h4 style={{ paddingLeft: "45%" }}>
              <mark>General Information</mark>
            </h4>
            <br />
            <h4 style={{ textDecorationLine: "underline" }}>Overview</h4>
            <br />
            <p>{last ? movies[index].overview : null}</p>
            <br />
            <h4 className="mhead" style={{ textDecorationLine: "underline" }}>
              Star Cast
            </h4>
            <p>Dm Singh Vikash Pandey</p>
            <br />
            <h4 className="mhead" style={{ textDecorationLine: "underline" }}>
              Director
            </h4>
            <p>Dm Singh Vikash Pandey</p>
            <br />
            <h4
              className="mhead"
            
              style={{ textDecorationLine: "underline", paddingLeft: "50%" }}
            >
              <mark>Media Info</mark>
            </h4>
            <br />
            <h4 className="mhead" style={{ textDecorationLine: "underline" }}>
              Duration
            </h4>
            <p>1:20:46 hr</p>
            <br />
            <h4 className="mhead" style={{ textDecorationLine: "underline" }}>
              File Size
            </h4>
            1.28GB
            <br />
            <br />
            <h4 className="mhead" style={{ textDecorationLine: "underline" }}>
              Language
            </h4>
            <p>{last ? movies[index].original_language : null}</p>
          </div>
        </div>
      </div>

      <div className="recomendations">
        {movies.map((movie) => (
          <div className="mposter">
            <NavLink to={`${baseMURL}/${movieType}/${title}/${movie.id}/`}>
              <div className="mimage">
                <img
                onClick={handelvideo}
                 
                  src={`${baseURL}${movie.backdrop_path}`}
                  alt=""
                />
              </div>
            </NavLink>

            <div className="mtitle">{movie?.title || movie?.original_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;

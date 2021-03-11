import { Divider, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./Movie.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import SubscriptionsRoundedIcon from "@material-ui/icons/SubscriptionsRounded";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Tab from './Tabsection'

import { NavLink } from "react-router-dom";

const baseMURL = "/movies/movie_category";
const baseURL = "https://image.tmdb.org/t/p/original";

function MobMovie({ fetchUrl, index, movies, movieType, title }) {
  let last = true;
  if (index === -1) {
    last = false;
  } else {
    last = true;
  }
  const [trailerUrl, settrailerUrl] = useState("");

  const handelClick = (movie) => {
    if (trailerUrl) {
      console.log(trailerUrl);
      settrailerUrl("");
      console.log("object");
      document.getElementById("istatus").removeAttribute("hidden");
    } else {
      movieTrailer(
        movies[index]?.name ||
          movies[index]?.title ||
          movies[index]?.original_name
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
          document.getElementById("istatus").setAttribute("hidden", true);
          console.log("not");
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
    height: "230px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handelvideo = () => {
    settrailerUrl(" ");
    handelClick();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // from  here we are going to write js code for swipable tab
 

  return (
    <div className="MobouterRow">
      <div className="MobinnerRow">
        <div className="MobPlayer" id="player">
          {!trailerUrl ? (
            <img
              src={`${baseURL}${last ? movies[index].backdrop_path : null}`}
              alt=""
            />
          ) : (
            <YouTube videoId={trailerUrl} opts={opts} />
          )}
          <div className="Mobstatus" id="istatus">
            <IconButton onClick={handelClick} className="Playbtn">
              <PlayCircleFilledIcon fontSize="default" className="playround" />
            
            </IconButton>
          </div>
        </div>

        <div className="MobContent">
          <div className="Mobmovie-header">
            {last ? movies[index].original_name || movies[index].title : null}
          </div>
          <div className="MobButtons">
            <IconButton className="Mobmbutton" disableRipple>
              {" "}
              <GetAppRoundedIcon fontSize="medium" /> Download
            </IconButton>

            <IconButton className="Mobmbutton">
              {" "}
              <ShareRoundedIcon fontSize="medium" />
              Share
            </IconButton>
            <Divider orientation="vertical " className="divider" />

            <IconButton className="Mobmbutton">
              {" "}
              <SubscriptionsRoundedIcon fontSize="medium" /> Subscribe
            </IconButton>

            {/* form here we are going to make accordian tab */}
   
           
            </div>
          </div>
          <div className="Mobmovie-content">
           <Tab  movies={movies} last={last} index={index} />
   </div>
   <div className="Mobrecomendations">
        {movies.map((movie) => (
          <div className="Mobmposter">
            <NavLink to={`${baseMURL}/${movieType}/${title}/${movie.id}/`}>
              <div className="mimage mob">
                <img
                onClick={handelvideo}
                 
                  src={`${baseURL}${movie.backdrop_path}`}
                  alt=""
                />
              </div>
            </NavLink>

            <div className="Mobmtitle">{movie?.title || movie?.original_name}</div>
          </div>
        ))}
      </div>
        </div>
      </div>
  
  );
}
export default MobMovie;

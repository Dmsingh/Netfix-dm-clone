import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { SwipeableDrawer,  } from "@material-ui/core";
import Menubar from "./Menubar";

function MobBar({ movieType,mob }) {

  const [show, setshow] = useState(false);
  useEffect(() => {
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else setshow(false);
      
        if (window.scrollY) {
          console.log(document.getElementById("menu")
          )
          document.getElementById("header").removeAttribute("hidden");
          document.getElementById("menu").setAttribute("hidden", "true");
        }
      

    });
    window.addEventListener("mousemove", () => {
      document.getElementById("header").setAttribute("hidden", "true");
    
    

    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);






 
  

  return (

    <div className={`nav ${show && "nav_black"}`}>

      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-history-32.png"
        alt="Netflix-logo"
        className="nav-logo"
      />
      <div className="nav-menu-size " id="menu" >
   
      </div>
      
      <h2 className={`nav-header ${mob && 'mob-header'}`} id="header" hidden>
        {movieType}
      </h2>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU"
        alt="Netflix-avatar"
        className="nav-avatar"
      />
      <React.Fragment>

        {
     
  
     <SwipeableDrawer
     anchor="bottom"
     open={"bottom"}
     variant="permanent"
    
   >

    
     <Menubar />
   
   </SwipeableDrawer>
      
        }
       
      </React.Fragment>
      ))
    </div>
  );
}

export default MobBar;

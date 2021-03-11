import React, { useEffect, useState } from "react";
import "./Navbar.css";
import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { SwipeableDrawer, Tooltip } from "@material-ui/core";
import Menubar from "./Menubar";

function Navbar({ movieType,mob }) {

  const [show, setshow] = useState(false);
  useEffect(() => {
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else setshow(false);
      
        if (window.scrollY) {
        
          document.getElementById("header").removeAttribute("hidden");
          document.getElementById("menu").setAttribute("hidden", "true");
        }
      

    });
    window.addEventListener("mousemove", () => {
      document.getElementById("header").setAttribute("hidden", "true");
      document.getElementById("menu").removeAttribute("hidden");
    

    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);






 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  return (

    <div className={`nav ${show && "nav_black"}`}>

      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-history-32.png"
        alt="Netflix-logo"
        className="nav-logo"
      />
      <div className="nav-menu-size " id="menu" >
      
       <IconButton fontSize="large" >
          <Tooltip title="MENUBAR" arrow>
            <MenuRoundedIcon fontSize="large" className="nav-menu"  onClick={toggleDrawer("bottom", true)} />
          </Tooltip>
        </IconButton>

        
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
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}
          onOpen={toggleDrawer("bottom", true)}
         
        >

         
          <Menubar />
        
        </SwipeableDrawer>
        }
       
      </React.Fragment>
      ))
    </div>
  );
}

export default Navbar;

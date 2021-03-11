import React from 'react';

import { NavLink } from "react-router-dom";

import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import "./Navbar.css";
import { IconButton, Tooltip } from '@material-ui/core';



export default function SimpleBottomNavigation() {
  

  return (


    <div className="  menubar ">
      
        <IconButton className="button " >
            <Tooltip title="Home Page" >
            <NavLink to="/" >
            <HomeTwoToneIcon  className="icon"/>

            </NavLink>

            </Tooltip>
       </IconButton>
       <IconButton className="button">
           <Tooltip title="Tutorial">
           <YouTubeIcon   className="icon"/>

           </Tooltip>
       </IconButton>
       <IconButton className="button">
           <Tooltip title="Help/Suggestion">
           <LiveHelpIcon  className="icon"/>

           </Tooltip>
       </IconButton>
    
       {/* <div class="MuiPaper-root MuiDrawer-paper MuiDrawer-paperAnchorBottom MuiPaper-elevation16" tabindex="-1" style="transform: none; transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;"><div class="menubar"><button class="MuiButtonBase-root MuiIconButton-root button .MuiSvgIcon-root" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"></path><path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root button" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" title="Tutorial"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root button" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" title="Help/Suggestion"><path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></div></div> */}
       
        </div>
      
  );
}

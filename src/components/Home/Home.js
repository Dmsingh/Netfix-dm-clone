import React from "react";
import Navbar from "../Navbar/Navbar";
import Desktop from "../Device/Desktop/Desktop";
import Mobile from "../Device/Mobile/Mobile";
import request from "../../Important/request";

import Slide from "../../components/carousel/Carousel";

import Mobslide from '../../components/Device/Mobile/MobCarousel'
import { BrowserView, MobileView } from "react-device-detect";
import Mobbar from '../Navbar/MobBar'


function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      
      <BrowserView>
      <Navbar mob="false"/> 
        
       <Desktop/>
       <Desktop/>

        <Slide/> 
      
   
       
      </BrowserView>
      <MobileView>
      <Mobbar mob="true" />
      
        <Mobile small={request.fetchNetflixOriginal} />
        <Mobslide /> 
       
   
      
 
      </MobileView>
    </div>
  );
}

export default Home;

import React from "react";
import { NavLink } from "react-router-dom";
import movieRequest from './movieRequest'
function Navigation(props) {
  console.log(movieRequest.fetchBollyWood)
  return (
    <div>
      <NavLink to="/" >Home</NavLink>
      <NavLink to={`${movieRequest.fetchBollyWood}`} >BollyWood</NavLink>

      <NavLink to={`${movieRequest.fetchHollyWood}`}>HollyWood</NavLink>
      <NavLink to={`${movieRequest.fetchTollyWood}`}>TollyWood</NavLink>

     
    </div>
  );
}

export default Navigation;

import React, { useState } from 'react';
import { MobData } from './MobData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NavLink } from "react-router-dom";
import Play from '../../Images/p1 (1).png'
function MobSlider({slides}) {
    const [Current, setCurrent] = useState(0)
    
    
    const length = slides.length;
  
    const nextSlide = () => {
     setCurrent(Current === length - 1 ? 0 : Current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(Current === 0 ? length - 1 : Current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
      <section className="mobile">
       
        <ArrowBackIosIcon className='mleft-arrow' onClick={prevSlide} color='secondary' />
        <ArrowForwardIosIcon className='mright-arrow' onClick={nextSlide} color='secondary' />
        {MobData.map((slide, index) => {
          return (
            <div
              className={index === Current ? 'mobslide active' : 'mobslide'}
              key={index}
            >
              {index === Current && (
                <div>  
                
                {/* <NavLink  to={`${slide.fetch}`}>   */}
                
                 <img src={`${slide.image}`} alt={slide.class} className={`${slide.class}`} />
                
                
                {/* </NavLink>  */}

                <NavLink  to={`${slide.fetch}`}>   <img src={Play} alt={slide.class} className="imgbutton" /></NavLink> 
              
                
               
                </div>
              )}
            </div>
          );
        })}
      </section>
    );
  };

export default MobSlider

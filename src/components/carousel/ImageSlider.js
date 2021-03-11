import React, { useState } from 'react';
import { Data } from './Data';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NavLink } from "react-router-dom";
import Play from '../Images/p1 (1).png'

function ImageSlider({slides}) {
 
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
      <section className="slider">
       
        <ArrowBackIosIcon className='left-arrow' onClick={prevSlide} color='secondary' />
        <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} color='secondary' />
        {Data.map((slide, index) => {
          return (
            <div
              className={index === Current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === Current && (
                <div>  
                       <img src={`${slide.image}`} alt={slide.class} className={`d${slide.class}`} />

                
                       <NavLink  to={`${slide.fetch}`}>   <img src={Play} alt={slide.class} className="imgbutton1" /></NavLink>

               
                </div>
              )}
            </div>
          );
        })}
      </section>
    );
  };

export default ImageSlider

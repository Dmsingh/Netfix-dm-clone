import './Carousel.css';
import ImageSlider from './ImageSlider';
import { Data } from './Data';

function Carousel() {
  return <ImageSlider  slides={Data} />;
}

export default Carousel;
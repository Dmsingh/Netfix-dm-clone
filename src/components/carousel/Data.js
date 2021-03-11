import Bolly from '../Images/b2.png'
import Holly from '../Images/h2.png'
import Tolly from '../Images/t.png'
import hwolly from '../Images/hw.png'
import bwolly from '../Images/bw.png'



export const Data = [
    {
      class:
        'boolyWood',
        image:Bolly,
        fetch:`/movies/movie_category/type/Bollywood`,
        message:'Click Me'
    },
    {
      class:
        'hoolyWood',
        image:Holly,
        fetch:`/movies/movie_category/type/Hollywood`,
        message:'Smash Me'

    },
    {
      class:
        'toolyWood',
        image:Tolly,
        fetch:`/movies/movie_category/type/Tollywood`,
       message:'Hit Me'

    },
    {
      image:
       hwolly,
        class:'englishme',
        fetch:`/movies/movie_category/type/WebSeries/HollyWood`,
        message:'Press Me'

    },
    {
      image:
     bwolly,
        class:'indian',
        fetch:`/movies/movie_category/type/WebSeries/Indian`,
        message:`Touch Me`

    }
  ];
  export default Data

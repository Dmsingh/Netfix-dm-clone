import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import { BrowserView, MobileView } from "react-device-detect";


import movieRequest from './movieRequest';
import Wood from './Wood';
import Home from '../components/Home/Home';
import MWood from './MWood';

import Movieadd from '../components/Movie/Movieadd';

const baseMURL = "/movies/movie_category";
function Routes() {

  

    return (
        <BrowserRouter>
        <div>
         <BrowserView>
         <Switch>
             <Route path="/" component={()=><Home/>} exact/>
             <Route path={`${movieRequest.fetchBollyWood}`}component={()=><Wood type="BollyWood"  />}/>
             <Route path={`${movieRequest.fetchHollyWood}`}component={()=><Wood type="HollyWood"  />}/>
             <Route path={`${movieRequest.fetchTollyWood}`}component={()=><Wood type="TollyWood"  />}/>
             <Route path={`${movieRequest.fetchHindi}`}component={()=><Wood type="Indian Seires"  />}/>
             <Route path={`${movieRequest.fetchEnglish}`}component={()=><Wood type="Mix Seires"  />}/>
             <Route path={`${baseMURL}/:movieType/:title/:id`}component={()=><Movieadd  />}/>






             
           
            

          
           </Switch>
         
         
         
         </BrowserView>



         <MobileView>
         <Switch>
             <Route path="/" component={()=><Home/>} exact/>
             <Route path={`${movieRequest.fetchBollyWood}`}component={()=><MWood type="BollyWood" mob="true"/>}/>
             <Route path={`${movieRequest.fetchHollyWood}`}component={()=><MWood type="HollyWood" mob="true"/>} />
             <Route path={`${movieRequest.fetchTollyWood}`}component={()=><MWood type="TollyWood" mob="true"/>}/>
             <Route path={`${movieRequest.fetchHindi}`}component={()=><MWood type="Indian Seires" mob="true"/>}/>
             <Route path={`${movieRequest.fetchEnglish}`}component={()=><MWood type="Mix Seires" mob="true"/>}/>
             <Route path={`${baseMURL}/:movieType/:title/:id`}component={()=><Movieadd  />}/>



             
           
            

          
           </Switch>

         </MobileView>
           
        </div> 
      </BrowserRouter>
    )
}

export default Routes

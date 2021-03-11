import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export default function Tabsection({last,movies,index,}) {
  

  return (
    <div className="tab-root">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="Mobsummary"
        >
          <Typography className="tab-heading">Movie Info</Typography>
        </AccordionSummary>
        <AccordionDetails className="Mobdetails">
          <Typography>
          Uploaded on{" "}
            {last
              ? movies[index].first_air_date || movies[index].release_date
              : console.log(null)}
            <br></br>
            Uploaded by <mark>DM Singh</mark>
            <br />
            <br />
            <br></br>
            <h4 style={{ paddingLeft:'25%'}}>
              <mark>General Information</mark>
            </h4>
            <br />
            <h4 style={{ textDecorationLine: "underline" }}>Overview</h4>
            <br />
            <p>{last ? movies[index].overview : null}</p>
            <br />
            <h4 className="mhead" style={{ textDecorationLine: "underline" }}>
              Star Cast
            </h4>
            <p>Dm Singh Vikash Pandey</p>
            <br />
            <h4 className="mhead" style={{ textDecorationLine: "underline" }}>
              Director
            </h4>
            <p>Dm Singh Vikash Pandey</p>
            <br />
            <h4
              className="mhead"
            
              style={{ textDecorationLine: "underline", paddingLeft: "35%" }}
            >
              <mark>Media Info</mark>
            </h4>
            <br />
            <h4 className="mhead" style={{ textDecorationLine: "underline" }}>
              Duration
            </h4>
            <p>1:20:46 hr</p>
            <br />
            <h4 className="mhead" style={{ textDecorationLine: "underline" }}>
              File Size
            </h4>
            1.28GB
            <br />
            <br />
            <h4 className="mhead" style={{ textDecorationLine: "underline" }}>
              Language
            </h4>
            <p>{last ? movies[index].original_language : null}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
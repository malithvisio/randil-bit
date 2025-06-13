import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TourPlanAccordion = ({ plans }) => {
  return (
    <div className="planning-content-tour">
      <h3 className="title-plan">Tour Plan :</h3>
      {plans.map((plan, index) => (
        <div className="tour-planing-section flex" key={index}>
          <div className="number-box flex-five">{plan.day}</div>
          <div className="content-box">
            <Accordion>
            <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                <h5 className="title">{plan.title}</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p className="des">{plan.description}</p>
              </AccordionDetails>
              <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      gap: "20px",
                    }}
                  >
                    </div>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourPlanAccordion;

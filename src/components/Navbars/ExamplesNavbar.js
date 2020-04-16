import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import './styles.css';

// reactstrap components
import { Button } from "reactstrap";

function ExamplesNavbar() {
  const location  = useLocation();

  const [about, setAbout] = useState("default");
  const [formation, setFormation] = useState("default");
  const [skill, setSkill] = useState("default");
  const [experience, setExperience] = useState("default");

  useEffect(() => {
    
    switch (location.pathname) {
      case "/": setAbout("danger"); break;
      case "/formation": setFormation("danger"); break;
      case "/skills": setSkill("danger"); break;
      case "/experience": setExperience("danger"); break;
    
      default:   break;
    }
  }, [location]);

  return (
    <>
     <div className="button-container">   
        <Button           
          className="btn-round"
          color={about}
          size="lg"
          to="/"
          tag={Link}
        >
          Sobre
        </Button>
        <Button
          
          className="btn-round"
          color={formation}
          size="lg"
          to="/formation"
          tag={Link}
        >
          Formação
        </Button>
        <Button
          to="/skills"
          tag={Link}
          className="btn-round"
          color={skill}
          size="lg"
        >
          Habilidades
        </Button>
        <Button
          to="/experience"
          tag={Link}
          className="btn-round"
          color={experience}
          size="lg"
        >
          Experiências
        </Button>
      </div>
    </>
  );
}

export default ExamplesNavbar;

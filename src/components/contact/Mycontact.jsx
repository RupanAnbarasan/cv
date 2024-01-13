import "./Mycontact.css";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Mycontact = () => {
  return (
    <div className="my-contact">
      <ul className="social-media">
        <li>
          <a
            href="https://github.com/RupanAnbarasan"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon className="social-icon git" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rupan-anbarasan-no9442955869/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon className="social-icon in" />
          </a>
        </li>
        <li>
          <a
            href="mailto:rupananbarasan@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <EmailIcon className="social-icon mail" />
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/maps/place/Salem,+Tamil+Nadu/@11.6537234,78.0558951,12z/data=!3m1!4b1!4m6!3m5!1s0x3babf1ccf52cba0b:0xee9989007068ca47!8m2!3d11.664325!4d78.1460142!16zL20vMDFqbmdz?entry=ttu"
            rel="noreferrer"
            target="_blank"
          >
            <LocationOnIcon className="social-icon location" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Mycontact;

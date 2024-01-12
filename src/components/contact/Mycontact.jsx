import './Mycontact.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import React from "react";

const Mycontact = () => {
  return (
   
    <div className="my-contact">
      <ul className="My-contact-ul">
       
        <li className="contact My-contact-l2">+91 9442955869</li>
        <li className="contact My-contact-l3">Salem,Tamilnadu</li>
      </ul>
      <ul className='social-media'>
      <li><a href='https://github.com/RupanAnbarasan' rel="noreferrer"target="_blank"><GitHubIcon className='social-icon' /></a></li>
        <li><a href='https://www.linkedin.com/in/rupan-anbarasan-no9442955869/'rel="noreferrer"target="_blank"><LinkedInIcon className='social-icon'/></a></li>
        <li><a href='mailto:rupananbarasan@gmail.com' rel="noreferrer" target="_blank"><EmailIcon className='social-icon'/></a></li>
      </ul>
    </div>
  );
};

export default Mycontact;
import React from 'react';
import DrawerLeft from '../components/Drawer.js';
import Button from '@material-ui/core/Button';
import Phone from '../assets/phone4.png';


function About() {
  return (
    <div className="Phone">
      <div className="Phone__container">
        <div className="Phone__container__wrapper">
          <img className="Phone__container__wrapper__phone" src={Phone} alt="phone" />
          <div className="Phone__container__wrapper__inner">
            <DrawerLeft page="About" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

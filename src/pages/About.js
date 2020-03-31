import React from 'react';
import DrawerLeft from '../components/Drawer.js';
import Phone from '../assets/phone4.png';
import '../styles/Phone.scss';


export default function About() {
  return (
    <div className="Phone">
      <div className="Phone__container">
        <div className="Phone__container__wrapper">
          <img className="Phone__container__wrapper__phone" src={Phone} alt="phone" />
          <div className="Phone__container__wrapper__inner">
            <DrawerLeft page="About" />
            <div className="Phone__container__wrapper__inner__content">
              <h2 tabIndex="0">Quiz App</h2>
              <p tabIndex="0" id="about">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

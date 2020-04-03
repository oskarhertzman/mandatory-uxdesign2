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
              <div className="Phone__container__wrapper__inner__content__about">
                <p tabIndex="0">Made by me, Oskar Hertzman.</p>
                <p tabIndex="0">Feel free to check out my <a href="https://github.com/oskarhertzman">Github</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

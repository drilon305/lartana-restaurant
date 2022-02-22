import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
    <h1 className='app__footer-headtext'>Contact Us</h1>
    <p className='p__opensans'>Street 120 No.2 1200</p>
    <p className='p__opensans'>078 392 594</p>
      </div>
      <div className="app__footer-links_logo">
      <img src={images.lartana} alt='lartana' />
      <p className='p__opensans'>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
      <img src={images.spoon} alt='spoon' className='spoon_img' style={{marginTop: 15}} />
      <div className="app__footer-links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className='app__footer-headtext'>Working Hours</h1>
    <p className='p__opensans'>Monday-Friday:</p>
    <p className='p__opensans'> 09:00 Am - 01:00 Am</p>
    <p className='p__opensans'>Saturday-Sunday:</p>
    <p className='p__opensans'>10:00 Am - 02:00 Am</p>
      </div>
    </div>
    <div className="footer__copyright">
    <p className='p__opensans'>2022 Lartana. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;

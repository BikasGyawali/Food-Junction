import React from 'react';
import insta from '../images/instagram-brands.svg';
import facebook from '../images/facebook-brands.svg';
import twitter from '../images/twitter-brands.svg';
import Logo from "../images/logo.jpg"

const Footer = () => {
  return (
    <>
      <footer>
       
      <div className="about">
        <p className='pee'>Connect With Us</p>
        <a href="#twitter"><img src={twitter} alt='logo'/></a>
        <a href="#instagram"><img src={insta} alt='logo'/></a>
        <a href="#facebook"><img src={facebook} alt='logo'/></a>
        <address>
                PHONE NO:<br/>
                (+01)12345678<br/>
                BANESHWOR, KATHMANDU<br/>
                OPPOSITE OF EVEREST BANK
        </address>     
        </div>
        <p className='p'>
        Copyright &copy; 2022 ||  Rights Reserved By Food Junction
        </p>
    </footer>
    </>
  )
}

export default Footer;

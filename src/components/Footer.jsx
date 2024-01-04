import React, {useEffect}  from 'react';
import { styles } from "../styles";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto w-full">
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <div className='footer-gradient-text pb-5'>Thanks for stopping by!</div>
        <p className='text-[14px]'>This site is best viewed on desktop.</p>
        <p className='text-[14px]'>stephanie@stelzers.com</p>
        <p className='text-[14px]'>Made with joy <span>&copy; 2024 Stephanie Stelzer</span></p>
      </div>
    </footer>
  );
};

export default Footer;

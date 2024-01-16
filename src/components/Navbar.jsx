import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 bg-white shadow-md`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center justify-start'>
          <li >
            <a href="https://github.com/stephaniestelzer" target="_blank">
              <FaGithub fill="black" size={"2em"} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/stephanie-stelzeruf/" target="_blank">
              <FaLinkedinIn fill="black" size={"2em"}/>
            </a>
          </li>
          <li>
            <a href="mailto:stephanie@stelzers.com">
              <MdMailOutline fill="black" size={"2em"}/>
            </a>
          </li>
        </ul>

        <Link
          to='/'
          className='flex justify-center items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-black text-[18px] font-bold cursor-pointer flex '>
            Stephanie Stelzer &nbsp;
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-5 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-black" : "text-secondary"
              } hover:text-black text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className={`w-[28px] h-[28px] object-contain ${toggle ? 'black-image' : ''}`}
                        onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-inter font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-black" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

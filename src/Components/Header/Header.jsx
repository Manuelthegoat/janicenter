import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Img/logo2.png";
import "./Header.css";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMoblie] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav className={`${sticky ? "sticky" : "navbars"}`}>
      <div className="logosy">
        <img src="logo4.svg" className="logos" alt="" />
      </div>
      <div className="nav-itemss">
        <ul className="nav-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Partners</li>
          <li>Become An Achiever</li>
          <li>Customer Service</li>
          <div className="nav-btn">
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 he"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <div className="content">
              <p>Call for help</p>
              <p>(+234) 909 532 1394</p>
            </div>
          </div>
        </ul>
        <div className="bar">
            {mobile? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </div>
      </div>
    </nav>
  );
};

export default Header;

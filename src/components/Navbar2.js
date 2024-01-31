//Installation:   npm i react-router@6.0.0 
// If not working - use this:    
//                npm install react-router-dom --save
//Icon is taken from https://react-icons.github.io/react-icons/
//npm install react-icons --save

import React, { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import '../css/navbar.css'
import { Link } from "react-router-dom";


function Navbar2() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  return (
       <nav className="sticky">
                <Link onClick={handleClick} to = "/" className="realtor-title">
                    <span>R</span>EALTO<span>R</span>Calgary
                </Link>

            <div className={showMenu ? "menu mobile-menu" : "menu"}>
                <ul>
                    <li>
                        <Link onClick={handleClick} to = "/home">Home</Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} to = "/neigborhoods">Neighborhoods</Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} to = "/calculator">Mortgage Calculator</Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} to = "/contact">Contact us</Link>
                    </li>
                </ul>
            </div> 
            <TfiAlignJustify className="bar" onClick={handleClick} /> 
        </nav> 

  );
}

export default Navbar2;
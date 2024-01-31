// Installation:    npm i react-countup
//                  npm install react-scroll-trigger


import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import '../css/count.css'

const SoldHousesCounter = () => {

    const [counterOn, setCounterOn] = useState(false);

    return(
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="count">
                <h3 className="count-info"> 
                    Today in Calgary were sold 
                    {counterOn && <span style={{color: 'red'}}> <CountUp start={0} end={368} duration={3} delay={0}/> </span> }
                    properties
                </h3>
            </div>
        </ScrollTrigger>
    )
}
export default SoldHousesCounter;
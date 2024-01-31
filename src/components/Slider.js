//https://react-icons.github.io/react-icons/icons/hi/

import { useState } from "react"
import reasons from "../data/Reasons";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import "../css/slider.css"

export function Slider(){

    const [reasonWhy, setReasonWhy] = useState(0);
    const {id, title, reason} = reasons[reasonWhy];

    const previousReason = () => {
        setReasonWhy (reasonWhy => {
            reasonWhy --;
            if (reasonWhy < 0){
                reasonWhy = reasons.length -1;
            }
            return(reasonWhy)
        })
    }

    const nextReason = () => {
        setReasonWhy(reasonWhy => {
            reasonWhy ++;
        if( reasonWhy > reasons.length -1){
            reasonWhy = 0;
        }
        return(reasonWhy)
        })
    }

    return(<div className="main-slider">

    <div className="slider-title">
        <h2>What clients choose us for?</h2>
    </div>
    <div className="slider">
        <p className="title">{title}</p>
        <p className="reason">{reason}</p>
        <button onClick={previousReason} className="previous">
            <HiArrowNarrowLeft />
        </button>
        <button onClick={nextReason} className="next">
            <HiArrowNarrowRight />
        </button>
        </div>

    </div>)
}
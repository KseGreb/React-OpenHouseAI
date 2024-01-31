import { useState } from "react";
import AvailableHousing from "../components/AvailableHousing";
import data from "../data/data"
import dataPrice from "../data/dataPrice"
import "../css/neigborhoods.css"

function Neighborhoods(){

const [showMore, setShowMore] = useState(false);
const [showEvenMore, setShowEvenMore] = useState(false);

    return(<div className="mainNeighborhoods">
                <div className="showMore">
                    <br></br>
                    <h2 className="headingMarket">Calgary Housing Market Overview</h2>
                    <p className="aboutMarket">
                        {showMore ? data : data.substring(0, 300) + "..."}
                        <button className="btnShowMore" onClick={()=> setShowMore(!showMore)}>
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    </p>
                    <h2 className="headingMarket">Pricing Overview</h2>
                    <p className="aboutMarket">
                        {showEvenMore ? dataPrice : dataPrice.substring(0, 300) + "..."}
                        <button className="btnShowMore" onClick={()=> setShowEvenMore(!showEvenMore)}>
                            {showEvenMore ? "Show Less" : "Show More"}
                        </button>
                    </p>
                    <h2 className="headingMarket"> Available housing in Calgary </h2>
                </div>
            
            <AvailableHousing/>
    </div>)
};
export default Neighborhoods;
import Count from '../components/Count';
import image from "../assets/image.jpg";
import calgary from "../assets/calgary.jpg"
import { Slider } from '../components/Slider';
import { CgNotes } from "react-icons/cg";
import "../css/home.css"
import { Weather } from '../components/weather/Weather';
import { Footer } from '../components/Footer';
import AlertDismissibleExample from '../components/Alert';
import { BsFillHouseHeartFill } from "react-icons/bs";
import { ImCalculator } from "react-icons/im";
import TheMainNote from '../components/note/TheMainNote';
import { FaPhoneVolume } from "react-icons/fa6";


function Home(){
    const checkAcknowledgment = localStorage.getItem("Acknowledge");

    return(<div className='mainHomePage'>

        <div data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500">
                {!checkAcknowledgment ? (<AlertDismissibleExample/>) : null}
            
        </div>

        <img src={calgary} alt="Calgary" className='imageCalgary'/>

        <div className='Calgary'>
            <h1 className='heading'> The City of Calgary </h1>
            <p className="moreInfo">Calgary, a cosmopolitan Alberta city with numerous skyscrapers, owes its rapid growth to its status as the centre of Canada’s oil industry.
            However, it’s still steeped in the western culture that earned it the nickname “Cowtown,” evident in the Calgary Stampede, 
            its massive July rodeo and festival that grew out of the farming exhibitions once presented here.</p>
            <p className="moreInfo">Adventure meets opportunity in Calgary. 
            Our growing city is a connected, community-oriented place to build a life, nestled where the prairies and mountains meet. 
            Young professionals, families, outdoor enthusiasts and visionaries thrive in Calgary’s vibrant, affordable community – and you can too.
            You and your family can have it all in Calgary.</p>
        </div>

        <Count/>
    
        <h3 className="aboutCalgary">Buying? Selling? Together we will make <span style={{color: 'red'}}>HOME</span> happen!</h3>
        <h3 className="aboutCalgary">Will your home be next?</h3>
        <img src={image} alt="house" className='picture'></img>

        <Slider/>

        <div className='MapAndWeather'>
            <div className='weatherApp'>
                <Weather/>
            </div>
             <div className='map'>
                 <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160599.8994895216!2d-114.25263944489124!3d51.02772334687565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1705343908063!5m2!1sen!2sca">
                 </iframe>
             </div>
        </div>
        
        <div className='extras'>
        <div className='extraSection'>
                <a href='/contact' className="link">
                    <span className='icon'>
                    <FaPhoneVolume />
                    </span>
                    <p className="aboutCalgary"> Have questions? We've got eanswers! Don't hesitate to reach out! </p>
                </a>
            </div>
            <div className='extraSection'>
                <a href='/neigborhoods' className="link">
                    <span className='icon'>
                        <BsFillHouseHeartFill />
                    </span>
                    <p className="aboutCalgary">Learn more about Calgary neigborhoods and avaiable properties </p>
                </a>
            </div>
            <div className='extraSection'>
                <a href='/calculator' className="link">
                    <span className='icon'>
                        <ImCalculator />
                    </span>
                    <p className="aboutCalgary">Know what you want? Calculate your monthly payment with our mortgage calcucator </p>
                </a>
            </div>
            <div className='extraSectionNote'>
                <span className='icon'>
                    <CgNotes /> 
                </span>    
                <p className="aboutCalgary">Make a note!  </p>
                <TheMainNote/>
            </div>
        </div>

    <Footer/>

    </div>)
}
export default Home;

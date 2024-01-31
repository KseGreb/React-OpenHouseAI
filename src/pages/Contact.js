import { ContactForm } from "../components/Formspree";
import '../css/formspree.css'
import key from "../assets/key.jpg"

function Contact(){

    return(<div className="mainCalculator">

        <div className="contactForm">
            <h1 className="head">Contact us</h1>
            <h2 className="extraHeading">Location</h2>
            <p className="info">REALTOR CALGARY</p>
            <p className="info">  Suite 999, 9999 99 Street SW <br></br>Calgary, Alberta T3P 6T9</p>
            <h2 className="extraHeading">Phone Number</h2>
            <p className="info">Toll Free: 1.800.888.8888 <br></br> In Calgary: 1.403.000.000 <br></br>(Messages left outside of the office hours will be returned the next business day)</p>
            <h2 className="extraHeading">Office Hours</h2>
            <p className="info">Monday-Friday 8:30am - 4:30pm (MST)<br></br> <span className="red">Please Note: we are closed for lunch from noon - 1 pm</span></p>
        </div>



        <div className="contactFormTwo">
            <ContactForm/>
        </div>

        <div className="add">
            <img src={key} className="key" alt="keys"/>
            <div className="contactToday">
                <h2 className="contact">Contact us TODAY - get your new home TOMORROW</h2>
            </div>
        </div>

    </div>)
}
export default Contact;
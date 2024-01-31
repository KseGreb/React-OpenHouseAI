//Installation: npm install react-bootstrap bootstrap

import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import banff from "../assets/banff.jpg"
import '../css/alert.css'

function AlertDismissible() {
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(false);
        window.localStorage.setItem( "Acknowledge", JSON.stringify(true)) 
    }
    
  
    return (
      <>
        <Alert  show={show} 
                variant="success"
                className='alert'>
          <Alert.Heading className='heading'>Land acknowledgement</Alert.Heading>
          <br></br>
          <p className='par'>
          In the spirit of reconciliation, we acknowledge that we live,
           work and play on the traditional territories of the Blackfoot Confederacy 
           (Siksika, Kainai, Piikani), the Tsuut'ina, the îethka Nakoda Nations, 
           the Otipemisiwak Métis Government (Districts 5 and 6), 
          and all people who make their homes in the Treaty 7 region of southern Alberta.
          </p>
          <img src={banff} alt='Banff' className='banff'/>
          <hr />
          <div className="d-flex justify-content-end">
            <Button 
                onClick={() => handleClick()} 
                variant="outline-success"
                className='btn'>
              I acknowledge
            </Button>
          </div>
        </Alert>
      </>
    );
  }
  
  export default AlertDismissible;
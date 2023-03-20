import './Footer.css';
import { Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function FooterSection(){
    const date = new Date();
    const year = date.getFullYear()

    const [centralModal, setCentralModal] = useState(false);

    const toggleShowCentral = () => setCentralModal(!centralModal);

    return (
    <footer id='footerContainer'>
        <p className='footerP'>Copyright {year} © Vea Collections LLC </p> 
        <p className='footerP' style={{cursor: 'pointer'}} onClick={toggleShowCentral} title='Click to open.'>Privacy Policy</p>
        <p className='footerP'>Site encrypted with SSL</p>
        <a href='https://tomasmaldonado.rf.gd/' target='_blank' rel='noopener, noreferrer'><p className='footerP' title="Go to author's website.">Page author</p></a>


        <MDBModal
  animationDirection='right'
  show={centralModal}
  tabIndex='-2'
  setShow={setCentralModal}
>
  <MDBModalDialog position='central'  id='policy-modal' >
    <MDBModalContent>
      <MDBModalHeader className='bg-info text-white'>
        <MDBModalTitle>Privacy Policy</MDBModalTitle>
        <MDBBtn
          color='none'
          className='btn-close btn-close-white'
          onClick={toggleShowCentral}
        ></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody id='privacy-modal-body'>
        <p>
            Vea Collections is committed to protecting the privacy of our customers' personal information. This privacy policy describes what information we collect, how we use it, and how we share it.

        </p>
        <br/>
        <h3>
            Information We Collect

        </h3>
        <p>
            We collect the following types of personal information from our customers:
            <ul>
                <li>
                    Contact information such as name, email address, phone number, and mailing address
                </li>
                <li>
                    Billing information such as credit card number and billing address
                </li>
            </ul>

            We do not collect any other types of personal information such as social security numbers or driver's license numbers.
        </p>
            <br/>

        <h3>
            How We Use Your Information
        </h3>
        <p>
            We use your personal information to:
            <ul>
                <li>
                    Process your orders and provide customer support
                </li>
                <li>
                    Communicate with you about your orders and our products
                </li>
                <li>
                    Improve our website and customer experience
                </li>
            </ul>
            We do not sell or rent your personal information to third parties.
        </p>
            <br/>

        <h3>
            How We Share Your Information
        </h3>
        <p>
            We may share your personal information with our service providers who help us with our business operations. We require these service providers to keep your personal information confidential and only use it to provide services to us.
        </p>
        <p>
            We may also share your personal information when required by law, such as in response to a court order or subpoena.
        </p>
        <br/>

        <h3>
            Your Rights
        </h3>
        <p>
            Under the CCPA, you have the right to:
            <ul>
                <li>
                    Know what personal information we have collected about you
                </li>
                <li>
                    Request that we delete your personal information
                </li>
                <li>
                    Receive equal service and price even if you exercise your privacy rights
                </li>
            </ul>
            To exercise any of these rights, please contact us using the information provided below.
        </p>
        <br/>

        <h3>
            Contact Us
        </h3>
        <p>
            If you have any questions or concerns about our privacy policy, please contact us.
        </p>
            <Link to='/Contact'>
                <Button>Contact Page</Button>
            </Link>
      </MDBModalBody>
      <MDBModalFooter style={{backgroundColor:'rgba(77, 76, 76, 0.4)', color:'lightpink'}}>
          Vea Collections 2023
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>


        {/* <div id='footerContent'>
            <Typography variant='p' className='footerCol'>Store</Typography>
            <div className='footerCol'>
                <Typography variant='p' className='first'>Menu</Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>        
            </div>

            <div className='footerCol'>
                <Typography variant='p' className='first'>Help</Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>        
            </div>

            <div className='footerCol'>
                <Typography variant='p' className='first'>Social</Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>        
            </div>
        </div> */}
    </footer>
    )
}
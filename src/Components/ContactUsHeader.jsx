import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
import ContactUsHeaderImage from './Assets/images/contact-us.png'

function ContactUsHeader() {
  return (
    <div>
        <MDBCarousel>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={ContactUsHeaderImage}
                alt='...'
            />
        </MDBCarousel>
    </div>
  )
}

export default ContactUsHeader
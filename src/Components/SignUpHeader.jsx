import React from 'react'
import SignUpHeaderImage from './Assets/images/sign-up-header.png'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function SignUpHeader() {
  return (
    <div>
        <MDBCarousel>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={SignUpHeaderImage}
                alt='...'
            />
        </MDBCarousel>
    </div>
  )
}

export default SignUpHeader
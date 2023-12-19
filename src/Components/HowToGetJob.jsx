import React from 'react'
import GetJob from './Assets/images/get-job-in-humhai.png' 
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function HowToGetJob() {
  return (
    <div>
        <MDBCarousel>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={GetJob}
                alt='...'
            />
        </MDBCarousel>
    </div>
  )
}

export default HowToGetJob
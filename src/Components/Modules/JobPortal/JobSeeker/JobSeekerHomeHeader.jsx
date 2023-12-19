import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
import JobsForAll from '../../../Assets/images/jobs-home-banner.png'

function JobSeekerHomeHeader() {
  return (
    <div>
        <MDBCarousel>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={JobsForAll}
                alt='Jobs For All'
            />
        </MDBCarousel>
    </div>
  )
}

export default JobSeekerHomeHeader
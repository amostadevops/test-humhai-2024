import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  import LookingForJob from './Assets/images/home-sliders/job-seeker.png'
  import EmployerBanner from './Assets/images/home-sliders/employer.png'
  import LevelUpByHumHai from './Assets/images/home-sliders/level-up.png'
  import SelfBusiness from './Assets/images/home-sliders/business.png'

function HomeSlider() {
  return (
    <div>
        <MDBCarousel showControls>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={LookingForJob}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src={EmployerBanner}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src={LevelUpByHumHai}
                alt='...'
            />
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src={SelfBusiness}
                alt='...'
            />
        </MDBCarousel>
    </div>
  )
}

export default HomeSlider
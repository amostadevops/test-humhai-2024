import React, { useState } from 'react'
import HumHaiLogo from './Assets/images/hum-hai-web.png'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    // MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
  } from 'mdb-react-ui-kit';

function Navigation() {
    const [showNavRight, setShowNavRight] = useState(false);
  return (
    <>
        <MDBNavbar expand='lg' light bgColor='light' className='sticky-top'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img src={HumHaiLogo} alt='Hum Hai Logo' /> </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarLink active aria-current='page' href='/'>HOME</MDBNavbarLink>
            <MDBNavbarLink href='jobseekerhome'>JOBS</MDBNavbarLink>
            <MDBNavbarLink href='#'>EMPLOYER ZONE</MDBNavbarLink>
            <MDBNavbarLink href='#'>STUDENTS CORNER</MDBNavbarLink>
            <MDBNavbarLink href='#'>LEVEL UP</MDBNavbarLink>
            <MDBNavbarLink href='#'>SELF EMPLOYMENT</MDBNavbarLink>
            <MDBNavbarLink href='contactus'>CONTACT US</MDBNavbarLink>
          </MDBNavbarNav>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarLink  href='signup'>SIGN UP</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  )
}

export default Navigation
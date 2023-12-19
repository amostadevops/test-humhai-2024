import React from 'react'
import ContactUsHeader from './ContactUsHeader'
import ContactMeeting from './Assets/images/meeting-contact-web.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ContactUs() {
  return (
    <div>
        <ContactUsHeader/>
        <div className='container-fluid my-4'>
            <div className='row'>
                <div className='col-md-6 text-center'>
                    <img className='img-fluid' src={ContactMeeting} alt='Contact Us Graphic'/>
                </div>
                <div className='col-md-6 text-center'>
                    <form>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <Box
                                        sx={{
                                            width: 500,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField className='my-1' fullWidth id="outlined-basic" label="First Name" variant="outlined" />
                                    </Box>
                                </div>
                                <div className='col-md-6'>
                                    <Box
                                        sx={{
                                            width: 500,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField className='my-1' fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
                                    </Box>
                                </div>
                                <div className='col-md-6'>
                                    <Box
                                        sx={{
                                            width: 500,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField className='my-1' fullWidth id="outlined-basic" label="Mobile Number" variant="outlined" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                                    </Box>
                                </div>
                                <div className='col-md-6'>
                                    <Box
                                        sx={{
                                            width: 500,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField className='my-1' fullWidth id="outlined-basic" label="Email ID" variant="outlined" />
                                    </Box>
                                </div>
                                <div className='col-md-12'>
                                    <Box
                                        sx={{
                                            // width: 500,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField className='my-1' fullWidth id="outlined-basic" label="Subject" variant="outlined" />
                                    </Box>
                                </div>
                                <div className='col-md-12'>
                                    <Box
                                        sx={{
                                            // width: 500,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField className='my-1' multiline rows={4} fullWidth id="outlined-multiline-static" label="Message" />
                                    </Box>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6 my-2'>
                                    <Stack spacing={2} direction="row">
                                        <Button variant="contained">Send Message</Button>
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
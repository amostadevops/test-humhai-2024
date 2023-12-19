import React from 'react'
import JobSeekerHomeHeader from './JobSeekerHomeHeader'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import JobSeekerLocationSlider from './JobSeekerLocationSlider';
function JobSeekerHome() {
  return (
    <div>
      <JobSeekerHomeHeader/>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center my-3'>
            <p className='display-6'>
              SEARCH <span className='main-title'>JOBS</span>
            </p>
          </div>
          <div className='col-12 text-center'>
            <div className='search-box-main'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-md-3'>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                      >
                        <TextField id="standard-basic" label="Select Job Category" variant="standard"  />
                    </Box>
                  </div>
                  <div className='col-md-3'>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                      >
                        <TextField id="standard-basic" label="Select Location" variant="standard" />
                    </Box>
                  </div>
                  <div className='col-md-3'>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                      >
                        <TextField id="standard-basic" label="Select Experience" variant="standard" />
                    </Box>
                  </div>
                  <div className='col-md-3'>
                    <Stack direction="row" spacing={2} className='my-4'>
                      <Button variant="outlined" startIcon={<SearchIcon />} sx={{width: '100%'}}>
                        Search
                      </Button>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
      <JobSeekerLocationSlider/>
    </div>
  )
}

export default JobSeekerHome
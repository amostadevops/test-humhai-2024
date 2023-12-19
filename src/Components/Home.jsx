import React from 'react'
import HomeSlider from './HomeSlider'
// import Marquee from "react-fast-marquee";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HumHaiLogo from './Assets/images/hum-hai-header.png'
import JobSearch from './Assets/images/job-search.png'
import HirePeople from './Assets/images/hire-people.png'
import BusinessOpportunity from './Assets/images/business-opportunity.png'
import SkillDevelopment from './Assets/images/skill-development.png'
import VacoBinaryLogo from './Assets/images/clients/vaco-binary-semantics.png'
import AmazonPayLogo from './Assets/images/clients/amazon-pay.png'
import AmazonSellerLogo from './Assets/images/clients/amazon-seller.png'
import BharatZupposLogo from './Assets/images/clients/bharat-zuppos.png'
import BigBasketLogo from './Assets/images/clients/big-basket.png'
import CapgeminiLogo from './Assets/images/clients/capgemini.png'
import CaptainFreshLogo from './Assets/images/clients/captain-fresh.png'
import DhaniLogo from './Assets/images/clients/dhani.png'
import DotPeLogo from './Assets/images/clients/dot-pe.png'
import DPSLogo from './Assets/images/clients/dps.png'
import FrankfinnLogo from './Assets/images/clients/frankfinn.png'
import GenpactLogo from './Assets/images/clients/genpact.png'
import GoogleMapLogo from './Assets/images/clients/google-maps.png'
import GooglePayLogo from './Assets/images/clients/google-pay.png'
import GumletLogo from './Assets/images/clients/gumlet.png'
import HCLLogo from './Assets/images/clients/hcl.png'
import HindustanSecuritiesLogo from './Assets/images/clients/hindustan-securities.png'
import HSBCLogo from './Assets/images/clients/hsbc.png'
import InfosysLogo from './Assets/images/clients/infosys.png'
import JindalXLogo from './Assets/images/clients/jindal-x.png'
import JioMartLogo from './Assets/images/clients/jio-mart.png'
import JustDialLogo from './Assets/images/clients/justdial.png'
import KnorrBremseLogo from './Assets/images/clients/knorr-bremse.png'
import MeeshoLogo from './Assets/images/clients/meesho.png'
import MVNLogo from './Assets/images/clients/mvn.png'
import NimbusHarborLogo from './Assets/images/clients/nimbus-harbor.png'
import OkayGoLogo from './Assets/images/clients/okay-go.png'
import PagarBookLogo from './Assets/images/clients/pagar-book.png'
import PathwaysSchoolLogo from './Assets/images/clients/pathways-schools.png'
import PayswiffLogo from './Assets/images/clients/payswiff.png'
import PineLabsLogo from './Assets/images/clients/pine-labs.png'
import RapidoLogo from './Assets/images/clients/rapido.png'
import RelianceDigitalLogo from './Assets/images/clients/reliance-digital.png'
import ShadowfaxLogo from './Assets/images/clients/shadowfax.png'
import SietzLogo from './Assets/images/clients/sietz.png'
import SpinnyLogo from './Assets/images/clients/spinny.png'
import STJLogo from './Assets/images/clients/stj.png'
import SwiggyLogo from './Assets/images/clients/swiggy.png'
import BritishSchoolLogo from './Assets/images/clients/the-british-school.png'
import Trufedu from './Assets/images/clients/trufedu.png'
import UberLogo from './Assets/images/clients/uber.png'
import ZeptoLogo from './Assets/images/clients/zepto.png'
import ZomatoLogo from './Assets/images/clients/zomato.png'
import ZyppLogo from './Assets/images/clients/zypp.png'
// import GetJob from './Assets/images/get-job-in-humhai.png'
// import FullTimeJobs from './Assets/images/full-time-jobs.svg'
// import PartTimeJobs from './Assets/images/part-time-jobs.svg'
import { MDBBtn } from 'mdb-react-ui-kit';
import HowToGetJob from './HowToGetJob';
function Home() {
  return (
    <div>
      <HomeSlider/>
      <div className='container-fluid my-3'>
        <div className='row'>
          <div className='col-12 text-center my-2 mb-5'>
            <img src={HumHaiLogo} className='img-fluid' alt='Hum Hai Logo'/>
          </div>
          <div className='col-md-12 text-center'>
            {/* <Marquee>
              | Opportunities For All <span className='gujarati'>| બધા માટે તકો</span><span className='bengali'>| সবার জন্য সুযোগ</span><span className='tamil'>| அனைவருக்கும் வாய்ப்புகள்</span><span className='telugu'>| అందరికీ అవకాశాలు</span><span className='kannada'>| ಎಲ್ಲರಿಗೂ ಅವಕಾಶಗಳು</span><span className='malayalam'>| എല്ലാവർക്കും അവസരങ്ങൾ</span><span className='urdu'>| سب کے لیے مواقع</span><span className='marathi'>| सर्वांसाठी संधी</span><span className='odia'>| ସମସ୍ତଙ୍କ ପାଇଁ ସୁଯୋଗ</span>
            </Marquee> */}
              <p className='display-6'>India's leading <span className='main-title'>OPPORTUNITY</span> providing platform!</p>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 mb-3'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                <p align='justify'>We provide a comprehensive <span className='main-title'>OPPORTUNITY</span> platform that caters to the needs of both job seekers and companies. Our platform enables companies to post job listings and connect with talented individuals seeking employment opportunities. We also offer a range of <span className='main-title'>self-employment</span> options for individuals looking to start their own businesses. Our goal is to bridge the gap between job seekers and employers, and to empower individuals to take control of their careers. We are dedicated to providing a user-friendly experience and helping individuals achieve their professional goals.</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-md-3 text-center my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={JobSearch} alt='Job Search Icon' />
                  <div className="d-grid gap-2 my-2">
                    <MDBBtn>SEARCH JOBs</MDBBtn>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-3 text-center my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={HirePeople} alt='Job Search Icon' />
                  <div className="d-grid gap-2 my-2">
                    <MDBBtn>Hire People</MDBBtn>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-3 text-center my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={BusinessOpportunity} alt='Job Search Icon' />
                  <div className="d-grid gap-2 my-2">
                    <MDBBtn>start your own business</MDBBtn>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-3 text-center my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={SkillDevelopment} alt='Skill Development' />
                  <div className="d-grid gap-2 my-2">
                    <MDBBtn>develop your skills</MDBBtn>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <p className='display-6'>Trusted by many renowned organizations</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={VacoBinaryLogo} alt='Vaco Binary Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={AmazonPayLogo} alt='Amazon Pay Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={AmazonSellerLogo} alt='Amazon Seller Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={BharatZupposLogo} alt='Bharat Zuppos Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={BigBasketLogo} alt='Big Basket Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={CapgeminiLogo} alt='Capgemini Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={CaptainFreshLogo} alt='Captain Fresh Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={DhaniLogo} alt='Dhani Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={DotPeLogo} alt='DotPe Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={DPSLogo} alt='DPS Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={FrankfinnLogo} alt='FrankFinn Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={GenpactLogo} alt='Genpact Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={GoogleMapLogo} alt='Google Map Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={GooglePayLogo} alt='Google Pay Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={GumletLogo} alt='Gumlet Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={HCLLogo} alt='HCL Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={HindustanSecuritiesLogo} alt='Hindustan Securities Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={HSBCLogo} alt='HSBC Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={InfosysLogo} alt='Infosys Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={JindalXLogo} alt='Jindal X Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={JioMartLogo} alt='Jio Mart Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={JustDialLogo} alt='JustDial Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={KnorrBremseLogo} alt='Knorr Bremse Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={MeeshoLogo} alt='Meesho Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={MVNLogo} alt='MVN Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={NimbusHarborLogo} alt='Nimbus Harbor Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={OkayGoLogo} alt='Okay Go Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={PagarBookLogo} alt='Pagar Book Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={PathwaysSchoolLogo} alt='Pathways School Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={PayswiffLogo} alt='Payswiff Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={PineLabsLogo} alt='Pine Labs Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={RapidoLogo} alt='Rapido Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={RelianceDigitalLogo} alt='Reliance Digital Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={ShadowfaxLogo} alt='Shadowfax Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={SietzLogo} alt='Sietz Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={SpinnyLogo} alt='Spinny Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={STJLogo} alt='STJ Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={SwiggyLogo} alt='Swiggy Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={BritishSchoolLogo} alt='The British School Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={Trufedu} alt='Trufedu Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={UberLogo} alt='Uber Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={ZeptoLogo} alt='Zepto Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={ZomatoLogo} alt='Zomato Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <img className='img-fluid' src={ZyppLogo} alt='Zypp Logo' />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className='container-fluid my-2'>
        <div className='row'>
          <div className='col-12 text-center'>
            <p className='display-6'>How to get a job on Hum Hai?</p>
          </div>
        </div>
        {/* <div className='col-12 text-center'>
          <img className='img-fluid' src={GetJob} alt='How to get job in Hum Hai'/>
        </div> */}
      </div>
      <HowToGetJob/>
      <div className='container-fluid my-2'>
        <div className='row'>
          <div className='col-12 text-center'>
            <p className='display-6'>Job for everyone</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/hard-working.png" alt="hard-working"/>
                  <p className='h5 my-4'>Full Time Jobs</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-3 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={PartTimeJobs} alt='Part Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/under-computer.png" alt="under-computer"/>
                  <p className='h5 my-4'>Part Time Jobs</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-3 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={PartTimeJobs} alt='Part Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/home.png" alt="home"/>
                  <p className='h5 my-4'>Work From Home Jobs</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-3 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={PartTimeJobs} alt='Part Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/person-male--v5.png" alt="person-male--v5"/>
                  <p className='h5 my-4'>Jobs For Freshers</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className='container-fluid my-3'>
        <div className='row'>
          <div className='col-12 text-center'>
            <p className='display-6'>Industries We Cater To</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github"/>
                  <p className='h5 my-4'>Software</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/book-shelf.png" alt="book-shelf"/>
                  <p className='h5 my-4'>Education</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/worker-male--v4.png" alt="worker-male--v4"/>
                  <p className='h5 my-4'>Service</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/policeman-male.png" alt="policeman-male"/>
                  <p className='h5 my-4'>Security</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/taxi.png" alt="taxi"/>
                  <p className='h5 my-4'>Transport</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/survival-bag.png" alt="survival-bag"/>
                  <p className='h5 my-4'>Hospitality</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/money.png" alt="money"/>
                  <p className='h5 my-4'>Finance</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/two-tickets--v2.png" alt="two-tickets--v2"/>
                  <p className='h5 my-4'>Theater</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/trust.png" alt="trust"/>
                  <p className='h5 my-4'>NGO</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/bank-cards.png" alt="bank-cards"/>
                  <p className='h5 my-4'>E-Commerce</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className='col-md-2 text-center mx-0 my-2'>
            <Card sx={{ minWidth: '90%' }}>
              <CardContent>
                <Typography variant="body2">
                  {/* <img className='img-fluid' src={FullTimeJobs} alt='Full Time Jobs'/> */}
                  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/right.png" alt="right"/>
                  <p className='h5 my-4'>And many more...</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
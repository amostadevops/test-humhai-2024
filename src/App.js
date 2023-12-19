// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import JobSeekerHome from './Components/Modules/JobPortal/JobSeeker/JobSeekerHome'
import ContactUs from './Components/ContactUs'
import SignUp from './Components/SignUp'

function App() {
  return (
    <div>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='jobseekerhome' element={<JobSeekerHome/>}/>
          <Route path='contactus' element={<ContactUs/>}/>
          <Route path='signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;